import { useMemo, useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stage, Layer } from "react-konva";
import { imageInfoAction, downloadStageAction } from '../../Redux/actions.jsx';
import { CharacterPart } from './CharacterPart.jsx';

export const CharacterStage = () => {
    const dispatch = useDispatch();
    const stage = useRef();
    console.log(1)
    const [imageContainer, setImageContainer] = useState([]);

    const getStateCurrentType = state => state.constructorReducer.currentType;
    const getStateCurrentUrl = state => state.constructorReducer.currentUrl;
    const currentType = useSelector(getStateCurrentType);
    const url = useSelector(getStateCurrentUrl);

    const suddenColor = (suddenCurrentType, url) => {
        dispatch(imageInfoAction(url, suddenCurrentType));
    }

    useEffect(() => {
        dispatch(downloadStageAction(stage));
        const currentImageIndex = imageContainer.indexOf(imageContainer.find(elem => Object.keys(elem) == currentType));
        const imageRepeatCheck = imageContainer.some(elem => Object.keys(elem) == currentType);
        const imageToRender = {[currentType] : <CharacterPart key={url} suddenColor={suddenColor} currentType={currentType} url={url}/>};
        imageRepeatCheck ? setImageContainer(imageContainer.map((elem, i) => i === currentImageIndex ? imageToRender : elem)) : setImageContainer([...imageContainer, imageToRender]);
    }, [url])

    // useMemo(() => {
    //     dispatch(downloadStageAction(stage));
    //     const currentImageIndex = imageContainer.indexOf(imageContainer.find(elem => Object.keys(elem) == currentType));
    //     const imageRepeatCheck = imageContainer.some(elem => Object.keys(elem) == currentType);
    //     const imageToRender = {[currentType] : <CharacterPart key={url} suddenColor={suddenColor} currentType={currentType} url={url}/>};
    //     imageRepeatCheck ? imageContainer[currentImageIndex] = imageToRender : imageContainer.push(imageToRender);
        
    //     if (imageContainer.some(elem => Object.keys(elem) == 'face') && imageContainer.some(elem => Object.keys(elem) == 'hair')) {
    //         const indexOfFace = imageContainer.indexOf(imageContainer.find(elem => Object.keys(elem) == 'face'));
    //         const indexOfHair = imageContainer.indexOf(imageContainer.find(elem => Object.keys(elem) == 'hair'));
    //         indexOfHair > indexOfFace && ([imageContainer[indexOfFace], imageContainer[indexOfHair]] = [imageContainer[indexOfHair], imageContainer[indexOfFace]]);
    //     }
    // }, [url])

    return (
        <Stage ref={stage} width={250} height={500}>
            <Layer>
                {imageContainer.map(elem => Object.values(elem))}
            </Layer>
        </Stage>
    );
};