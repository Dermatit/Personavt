import { useSelector, useDispatch } from 'react-redux';
import { urlHandlerAction } from '../../Redux/actions.jsx';
import { TypeData } from '../Data/data.js';

const parse = require('html-react-parser');

export const GenderStyle = ({genderStyleProp}) => {
    return (
        [TypeData.find(elem => elem.sex == 'male').sex, TypeData.find(elem => elem.sex == 'female').sex].map(elem =>
            <div className='styleElement' onClick={()=>genderStyleProp(...elem)}>
                <div 
                    className={elem + ' styleSVG'}
                    key={elem}>
                    {elem == 'male' ? '♂' : '♀'}
                </div>
            </div>
        )
    )
}

export const PoseStyle = ({sexCheck, poseStyleProp}) => {
    return (
        TypeData.filter(elem => sexCheck == elem.sex).map(elem => 
            <div className='styleElement' onClick={()=>poseStyleProp(...elem.poseCheck, ...elem.pose)} >
                <div 
                    className='styleSVG' 
                    style={{width: '50px'}} 
                    key={elem.poseCheck}>
                    {parse(...elem.pose)}
                </div>
            </div>
        )
    )
}

export const OtherStyles = ({sexCheck, poseCheck}) => {
    const dispatch = useDispatch();
    const currentType = useSelector(state => state.currentTypeHandler);
    return (
        TypeData.filter(elem => sexCheck == elem.sex && poseCheck == elem.poseCheck).map(elem => elem[currentType].map(elem =>
            <div className='styleElement' onClick={()=>dispatch(urlHandlerAction(elem))} >
                <div 
                    className='styleSVG' 
                    style={{width: '50px'}} 
                    key={elem}>
                    {parse(elem)}
                </div>
            </div>
            )
        )
    )
}