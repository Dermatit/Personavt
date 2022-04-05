import { useMemo, useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import { PositionData } from '../Footer/positionData';
import { urlHandlerAction, currentTypeHandlerAction } from '../Redux/actions.jsx';

export const KonvaComponent = ({ imageContainer, setDownloadUrlHandler }) => {
    const dispatch = useDispatch();
    const [position, setPosition] = useState({x: 0, y: 0});
    const [currentType, url] = useSelector(state => [state.currentTypeHandler, state.urlHandler]);

    const [image] = useImage('data:image/svg+xml;base64,' + window.btoa(url));

    const suddenColor = (suddenCurrentType, url) => {
        dispatch(currentTypeHandlerAction(suddenCurrentType)); 
        dispatch(urlHandlerAction(url));
        PositionData.map(elem => url.slice(9, 45) == elem.UID ? setPosition({x: elem.x, y: elem.y}) : null);
    }

    useMemo(() => {
        PositionData.map(elem => url.slice(9, 45) == elem.UID ? setPosition({x: elem.x, y: elem.y}) : null);

        if (imageContainer.some(elem => Object.keys(elem) == currentType)) {
            imageContainer[imageContainer.indexOf(imageContainer.find(elem => Object.keys(elem) == currentType))] = {[currentType] : <Image image={image} draggable onClick={() => suddenColor(currentType, url)} x={parseInt(position.x)} y={parseInt(position.y)}/>};
        }
        else {
            imageContainer.push({[currentType] : <Image image={image} draggable onClick={() => suddenColor(currentType, url)} x={parseInt(position.x)} y={parseInt(position.y)}/>}); 
        }
    }, [image])

    const download = (source) => {
        const el = document.createElement("a");
        el.setAttribute("href", source);
        el.setAttribute("download", 'image');
        document.body.appendChild(el);
        el.click();
        el.remove();
    }

    const stageRef = useRef();
    setDownloadUrlHandler(stageRef);

    return (
        <>
         <Stage ref={stageRef} width={500} height={500}>
            <Layer>
                {imageContainer.map(elem => Object.values(elem))}
            </Layer>
        </Stage>
        </>
    );
}