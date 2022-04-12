import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { imageInfoAction } from '../../Redux/actions.jsx';
import { GenderStyle, PoseStyle, OtherStyles } from './StyleElements.jsx';

export const Styles = ({setBlur, localCurrentType, rerender}) => {
    const dispatch = useDispatch();

    const [poseCheck, setPoseCheck] = useState();

    const [sexCheck, setSexCheck] = useState();

    const poseStyleProp = (pose) => {
        return () => {
            poseCheck !== pose && rerender();
            setPoseCheck(pose);
            setBlur.otherTypes('white');
            dispatch(imageInfoAction(pose, localCurrentType));
        }
    }

    const genderStyleProp = (sex) => {
        return () => {
            rerender();
            setPoseCheck();
            setSexCheck(sex);
            setBlur.poseType();
            setBlur.otherTypes('#1c5ebd');
            dispatch(imageInfoAction('', localCurrentType));
        }
    }

    const otherStylesProp = (otherStyle) => {
        return () => {
            dispatch(imageInfoAction(otherStyle, localCurrentType));
        }
    }

    switch(localCurrentType) {
        case 'sex': return <GenderStyle genderStyleProp={genderStyleProp}/>;
        case 'pose' : return <PoseStyle sexCheck={sexCheck} poseStyleProp={poseStyleProp}/>;
        default : return <OtherStyles sexCheck={sexCheck} poseCheck={poseCheck} localCurrentType={localCurrentType} otherStylesProp={otherStylesProp}/>;
    }
}