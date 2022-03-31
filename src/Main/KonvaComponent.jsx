import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import { PositionData } from '../Footer/positionData';
import { urlHandlerAction } from '../Redux/actions.jsx';

export const KonvaComponent = ({ imageContainer }) => {
    const dispatch = useDispatch();
    const [position, setPosition] = useState({x: 0, y: 0});
    const [SVG, currentType, url] = useSelector(state => [state.svgHandler, state.currentTypeHandler, state.urlHandler]);

    useMemo(() => {
        SVG !== 'none' && dispatch(urlHandlerAction(SVG));
        PositionData.map(elem => SVG == elem.UID ? setPosition({x: elem.x, y: elem.y}) : null);
    }, [SVG]);

    const [image] = useImage('data:image/svg+xml;base64,' + window.btoa(url));

    useMemo(() => {
        if (imageContainer.some(elem => Object.keys(elem) == currentType)) {
            imageContainer.splice(imageContainer.indexOf(imageContainer.find(elem => Object.keys(elem) == currentType)), 1);
            imageContainer.push({[currentType] : <Image image={image} x={parseInt(position.x)} y={parseInt(position.y)}/>});
        }
        else {
            imageContainer.push({[currentType] : <Image image={image} x={parseInt(position.x)} y={parseInt(position.y)}/>}); 
        }
    }, [image])

    return (
         <Stage width={500} height={500}>
            <Layer>
                {imageContainer.map(elem => Object.values(elem))}
            </Layer>
        </Stage>
    );
}