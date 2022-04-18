import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stage, Layer } from "react-konva";
import { getSvgAction, downloadStageAction } from '../../Redux/actions.jsx';
import { CharacterPart } from './CharacterPart.jsx';

export const CharacterStage = ({images}) => {
    const dispatch = useDispatch();

    const stage = useRef();
    dispatch(downloadStageAction(stage));

    const getStateCurrentType = state => state.currentType;
    const getStateCurrentUrl = state => state.svg;
    const currentType = useSelector(getStateCurrentType);
    const url = useSelector(getStateCurrentUrl);

    const suddenColor = (currentType, url) => {
        dispatch(getSvgAction(url, currentType));
    }

    images[currentType] = <CharacterPart key={url} suddenColor={suddenColor} currentType={currentType} url={url}/>;
    const pureImages = Object.values(images);

    if ('face' in images && 'hair' in images) {
        const indexOfFace = Object.keys(images).indexOf('face');
        const indexOfHair = Object.keys(images).indexOf('hair');
        indexOfHair > indexOfFace && ([pureImages[indexOfFace], pureImages[indexOfHair]] = [pureImages[indexOfHair], pureImages[indexOfFace]]);
    }
        
    return (
        <Stage ref={stage} width={250} height={500}>
            <Layer>
                {pureImages}
            </Layer>
        </Stage>
    );
};