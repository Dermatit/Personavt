import { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stage, Layer } from "react-konva";
import { imageInfoAction, downloadStageAction } from '../../Redux/actions.jsx';
import { ImageComponent } from './ImageComponent.jsx';

export const ImagesComponent = ({imageContainer}) => {
    const dispatch = useDispatch();
    const stage = useRef();

    const getStateCurrentType = state => state.constructorReducer.currentType;
    const getStateCurrentUrl = state => state.constructorReducer.currentUrl;
    const currentType = useSelector(getStateCurrentType);
    const url = useSelector(getStateCurrentUrl);

    const suddenColor = (suddenCurrentType, url) => {
        dispatch(imageInfoAction(url, suddenCurrentType));
    }

    useMemo(() => {
        dispatch(downloadStageAction(stage));
        const currentImageIndex = imageContainer.indexOf(imageContainer.find(elem => Object.keys(elem) == currentType));
        const imageRepeatCheck = imageContainer.some(elem => Object.keys(elem) == currentType);
        const imageToRender = {[currentType] : <ImageComponent key={url} suddenColor={suddenColor} currentType={currentType} url={url}/>};
        imageRepeatCheck ? imageContainer[currentImageIndex] = imageToRender : imageContainer.push(imageToRender);
    }, [url])

    return (
        <Stage ref={stage} width={250} height={500}>
            <Layer>
                {imageContainer.map(elem => Object.values(elem))}
            </Layer>
        </Stage>
    );
};