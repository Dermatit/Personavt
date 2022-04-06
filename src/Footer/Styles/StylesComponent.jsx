import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { urlHandlerAction } from '../../Redux/actions.jsx';
import { GenderStyle, PoseStyle, OtherStyles } from './StyleElements.jsx';

export const Styles = ({setBlur}) => {
    const dispatch = useDispatch();

    const currentType = useSelector(state => state.currentTypeHandler);

    const [poseCheck, setPoseCheck] = useState();
    const [sexCheck, setSexCheck] = useState();

    const poseStyleProp = (poseCheck, pose) => {
        setPoseCheck(poseCheck);
        dispatch(urlHandlerAction(pose));
        setBlur.otherTypes();
    }

    const genderStyleProp = (sex) => {
        setSexCheck(sex);
        setPoseCheck();
        setBlur.poseType();
        setBlur.newClearKey();
    }

    const otherStylesProp = (url) => dispatch(urlHandlerAction(url))

    return (
        <div className='style'>
            {currentType == 'sex' && <GenderStyle genderStyleProp={genderStyleProp}/>}
            {currentType == 'pose' && <PoseStyle sexCheck={sexCheck} poseStyleProp={poseStyleProp}/>}
            {currentType !== 'pose' && currentType !== 'sex' && <OtherStyles sexCheck={sexCheck} poseCheck={poseCheck} otherStylesProp={otherStylesProp}/>}
        </div> 
    )
}