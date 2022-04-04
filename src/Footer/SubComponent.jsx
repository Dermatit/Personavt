import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { svgHandlerAction, currentTypeHandlerAction, allClearAction } from '../Redux/actions.jsx';
import { TypeData } from './data.js';

const parse = require('html-react-parser');

export function Type() {
    const clearKey = useSelector(state => state.allClearHandler);

    const currentType = useSelector(state => state.currentTypeHandler);
    const dispatch = useDispatch();

    const [typeRender, setTypeRender] = useState(false);

    const [poseCheck, setPoseCheck] = useState();
    const [sexCheck, setSexCheck] = useState();

    const [textBlur, setTextBlur] = useState('#1c5ebd');
    const [poseBlur, setPoseBlur] = useState('#1c5ebd');

    useMemo(() => {
        setPoseCheck();
        setTextBlur('#1c5ebd');
    }, [clearKey])


    const [styleDisplay, setStyleDisplay] = useState();

    return (
        <section>
            {typeRender? 
                <div className='style' style={{display: styleDisplay}}>
                    {currentType == 'sex' &&
                        [TypeData.find(elem => elem.sex == 'male').sex, TypeData.find(elem => elem.sex == 'female').sex].map(elem =>
                            <div className='styleElement' onClick={()=>{setSexCheck(...elem); setPoseBlur('white'); dispatch(allClearAction(Math.random()))}}>
                                <div 
                                    className={elem + ' styleSVG'}
                                    key={elem}>
                                    {elem == 'male' ? '♂' : '♀'}
                                </div>
                            </div>
                        )
                    }
                    {currentType == 'pose' && 
                        TypeData.filter(elem => sexCheck == elem.sex).map(elem => 
                            <div className='styleElement' onClick={()=>{dispatch(svgHandlerAction(...elem.pose));setPoseCheck(...elem.poseCheck);setTextBlur('white')}} >
                                <div 
                                    className='styleSVG' 
                                    style={{width: '50px'}} 
                                    key={elem.poseCheck}>
                                    {parse(...elem.pose)}
                                </div>
                            </div>
                        )
                    }
                    {currentType !== 'pose' && currentType !== 'sex' &&
                        TypeData.filter(elem => sexCheck == elem.sex && poseCheck == elem.poseCheck).map(elem => elem[currentType].map(elem =>
                            <div className='styleElement' onClick={()=>dispatch(svgHandlerAction(elem))} >
                                <div 
                                    className='styleSVG' 
                                    style={{width: '50px'}} 
                                    key={elem}>
                                    {parse(elem)}
                                </div>
                            </div>
                            )
                        )
                    }
                    {/* <div className='closeMenu' onClick={() => setStyleDisplay('none')}>Back</div> */}
                </div> 
            : null}

            <div className='type'>
                {Object.keys({...TypeData.find(elem => elem)}).filter(elem => elem !== 'poseCheck').map((elem, i) => 
                i === 0 ? <div className='typeElement' onClick={()=>{dispatch(currentTypeHandlerAction(elem));setTypeRender(true); setStyleDisplay()}}>{elem}</div> :
                i === 1 ? <div className='typeElement' style={{color : poseBlur}} onClick={()=>{dispatch(currentTypeHandlerAction(elem));setTypeRender(true); setStyleDisplay()}}>{elem}</div> :
                <div className='typeElement' style={{color : textBlur}} onClick={()=>{dispatch(currentTypeHandlerAction(elem));setTypeRender(true); setStyleDisplay()}} key={elem}>{elem}</div>)}
            </div>

        </section>
    );
}