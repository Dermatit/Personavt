import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getSvgAction } from '../../Redux/actions.jsx';
import { Gender, Pose, Other } from './CharacterPart.jsx';

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
        case 'gender': return <Gender clickGenderParts={clickGenderParts}/>;
        case 'pose' : return <Pose genderCheck={typeCheck.gender} clickPoseParts={clickPoseParts}/>;
        default : return <Other typeCheck={typeCheck} currentType={currentType} clickOtherParts={clickOtherParts}/>;
    }
}