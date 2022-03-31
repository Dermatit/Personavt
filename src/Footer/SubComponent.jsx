import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { svgHandlerAction, currentTypeHandlerAction } from '../Redux/actions.jsx';
import { TypeData } from './data.js';

const parse = require('html-react-parser');

export function Type({sexCheck, poseCheck}) {
    const currentType = useSelector(state => state.currentTypeHandler);

    const dispatch = useDispatch();
    const [typeRender, setTypeRender] = useState(false);

    return (
        <section>
            {typeRender? <div className='style'>
                {TypeData.map(elem => sexCheck == elem.sex && poseCheck == elem.pose ? elem[currentType].map(elem => <div className='styleElement' style={{width: '50px'}} onClick={()=>dispatch(svgHandlerAction(elem))} key={elem}>{parse(elem)}</div>) : null)}
            </div> : null}
            <div className='type'>
                {Object.keys({...TypeData.find(elem => sexCheck == elem.sex)}).filter(elem => elem !== 'sex' && elem !== 'pose' && elem !== 'poseRender').map(elem => <div className='typeElement' onClick={()=>{dispatch(currentTypeHandlerAction(elem));setTypeRender(true)}} key={elem}>{elem}</div>)}
            </div>
        </section>
    );
}

export function SexSelector({sexSelect}) {
    return ( 
        <div className='SexSelector'>
            <div className='male' onClick={(e) => sexSelect(e)}>♂</div>
            <div className='female' onClick={(e) => sexSelect(e)}>♀</div>
        </div> 
    );
}

export function PoseSelector({sexCheck}) {
    const dispatch = useDispatch();

    const [typeRender, setTypeRender] = useState(false);
    const [poseCheck, setPoseCheck] = useState(null);

    const poseSelect = (poseFromArray) => {
        setPoseCheck(poseFromArray);
        setTypeRender(true);
    }
    return ( 
        <div className='PoseSelector'>
            {typeRender? <Type sexCheck={sexCheck} poseCheck={poseCheck}/> : 
            [...TypeData.filter(elem => sexCheck == elem.sex)].map(elem => <div className={elem.pose} onClick={() => {poseSelect(elem.pose); dispatch(svgHandlerAction(...elem.poseRender)); dispatch(currentTypeHandlerAction('pose'));}} style={{width: '50px'}} key={elem.pose}>{parse(...elem.poseRender)}</div>)}
        </div> 
    );
}