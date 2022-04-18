import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getSvgAction } from '../../Redux/actions.jsx';
import { GenderStyle, PoseStyle, OtherStyles } from './CharacterPart.jsx';

export const CharacterParts = ({blur, setBlur, currentType, clearMain}) => {
    
    const dispatch = useDispatch();

    const [typeCheck, setTypeCheck] = useState({
        pose : null,
        gender : null
    });

    const clickPoseParts = (pose) => {
        typeCheck.pose !== pose && clearMain();
        setTypeCheck({ ...typeCheck, pose : pose })
        setBlur({ ...blur, other : null})
        dispatch(getSvgAction(pose, currentType));
    }

    const clickGenderParts = (gender) => {
        clearMain();
        setTypeCheck({ pose : null, gender : gender })
        setBlur({ pose : null, other : '#1c5ebd'})
        dispatch(getSvgAction('', currentType));
    }

    const clickOtherParts = (other) => {
        dispatch(getSvgAction(other, currentType));
    }

    switch(currentType) {
        case 'gender': return <GenderStyle clickGenderParts={clickGenderParts}/>;
        case 'pose' : return <PoseStyle genderCheck={typeCheck.gender} clickPoseParts={clickPoseParts}/>;
        default : return <OtherStyles typeCheck={typeCheck} currentType={currentType} clickOtherParts={clickOtherParts}/>;
    }
}