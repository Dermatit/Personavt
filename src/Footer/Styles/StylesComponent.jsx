import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { urlHandlerAction } from '../../Redux/actions.jsx';
import { GenderStyle, PoseStyle, OtherStyles } from './StyleElements.jsx';

export const Styles = ({setBlur}) => {
    const dispatch = useDispatch();

    const currentType = useSelector(state => state.currentTypeHandler);

    const [poseCheck, setPoseCheck] = useState();
    const [prevPoseCheck, setPrevPoseCheck] = useState();

    const [sexCheck, setSexCheck] = useState();

    const poseStyleProp = (poseCheck, pose) => {
        prevPoseCheck !== poseCheck && setBlur.newClearKey() && setPrevPoseCheck(poseCheck);
        setBlur.otherTypes('white');
        setPoseCheck(poseCheck);
        dispatch(urlHandlerAction(pose));
    }

    const genderStyleProp = (sex) => {
        setSexCheck(sex);
        setPoseCheck();
        setBlur.poseType();
        setBlur.newClearKey();
        setBlur.otherTypes('#1c5ebd');
        dispatch(urlHandlerAction(''));
    }

    return (
        <div className='style'>
            {currentType == 'sex' && <GenderStyle genderStyleProp={genderStyleProp}/>}
            {currentType == 'pose' && <PoseStyle sexCheck={sexCheck} poseStyleProp={poseStyleProp}/>}
            {currentType !== 'pose' && currentType !== 'sex' && <OtherStyles sexCheck={sexCheck} poseCheck={poseCheck}/>}
        </div> 
    )
}