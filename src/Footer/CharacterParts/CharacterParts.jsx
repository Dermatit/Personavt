import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { imageInfoAction } from '../../Redux/actions.jsx';
import { GenderStyle, PoseStyle, OtherStyles } from './CharacterPart.jsx';

export const CharacterParts = ({blur, currentType, clearMain}) => {
    
    const dispatch = useDispatch();

    const [typeCheck] = useState({
        pose : null,
        gender : null
    });

    const clickPoseParts = (pose) => {
        typeCheck.pose !== pose && clearMain();
        typeCheck.pose = pose;
        blur.other = null;
        dispatch(imageInfoAction(pose, currentType));
    }

    const clickGenderParts = (gender) => {
        clearMain();
        typeCheck.pose = null;
        typeCheck.gender = gender;
        blur.other = '#1c5ebd';
        blur.pose = null;
        dispatch(imageInfoAction('', currentType));
    }

    const clickOtherParts = (other) => dispatch(imageInfoAction(other, currentType));

    switch(currentType) {
        case 'gender': return <GenderStyle clickGenderParts={clickGenderParts}/>;
        case 'pose' : return <PoseStyle genderCheck={typeCheck.gender} clickPoseParts={clickPoseParts}/>;
        default : return <OtherStyles typeCheck={typeCheck} currentType={currentType} clickOtherParts={clickOtherParts}/>;
    }
}