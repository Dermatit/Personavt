import useImage from "use-image";
import { PositionData } from '../../Data/positionData.js'
import { useState, useEffect } from 'react';
import { Image } from "react-konva";

export const CharacterPart = ({suddenColor, currentType, url}) => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [image] = useImage('data:image/svg+xml;base64,' + window.btoa(url));

    useEffect(()=>PositionData.forEach(elem => url.slice(9, 45) == elem.UID ? setPosition({x: elem.x, y: elem.y}) : null), [url]);

    return <Image 
        image={image} 
        // draggable
        // onDragMove={(e) => console.log(e.target.x(), e.target.y())}
        onClick={()=>suddenColor(currentType, url)} 
        onTap={()=>suddenColor(currentType, url)}
        x={parseInt(position.x)} 
        y={parseInt(position.y)}
    />;
};