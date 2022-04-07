import { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stage, Layer } from "react-konva";
import { urlHandlerAction, currentTypeHandlerAction, downloadRefHandlerAction } from '../../Redux/actions.jsx';
import { ImageComponent } from './ImageComponent.jsx';

export const ImagesComponent = ({ imageContainer }) => {
    const dispatch = useDispatch();
    
    const stageRef = useRef();
    dispatch(downloadRefHandlerAction(stageRef));

    const currentType = useSelector(state => state.currentTypeHandler);
    const url = useSelector(state => state.urlHandler);

    const suddenColor = (suddenCurrentType, url) => {
        dispatch(currentTypeHandlerAction(suddenCurrentType));
        dispatch(urlHandlerAction(url));
    }

    useMemo(() => {
        const repeatedElementIndex = imageContainer.indexOf(imageContainer.find(elem => Object.keys(elem) == currentType));
        const repeatedElementCheck = imageContainer.some(elem => Object.keys(elem) == currentType);
        const imageToContainer = {[currentType] : <ImageComponent suddenColor={suddenColor} currentType={currentType} url={url}/>};
        repeatedElementCheck ? imageContainer[repeatedElementIndex] = imageToContainer : imageContainer.push(imageToContainer);
    }, [url])

    return (
        <Stage ref={stageRef} width={500} height={500}>
            <Layer>
                {imageContainer.map(elem => Object.values(elem))}
            </Layer>
        </Stage>
    );
};