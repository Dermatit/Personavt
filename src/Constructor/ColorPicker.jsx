import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HexColorPicker } from "react-colorful";
import getSVGColors from 'get-svg-colors-browser';

import { urlHandlerAction } from '../Redux/actions.jsx';

export const ColorPiker = () => {
    const dispatch = useDispatch();

    const url = useSelector(state => state.urlHandler);

    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    const [colorPickerSelectedColor, setColorPickerSelectedColor] = useState("#ffffff");
    
    const showColorPicker = (toggle, oldColor) => {
        setDisplayColorPicker(toggle);
        setColorPickerSelectedColor(oldColor);
    };

    const [colors, setСolors] = useState([]);

    useEffect(() => getSVGColors(url, { flat: true }).then((value) => setСolors(Array.from(new Set(value)))), [url]);

    const setNewColor = (oldColor, newColor) => {
        setColorPickerSelectedColor(newColor);
        url.indexOf(newColor) == -1 && dispatch(urlHandlerAction(url.replaceAll(oldColor, newColor)));
    };

    return (
        <>
            {colors.map(color => 
                <div 
                    style={{content: "", width: "30px", height: "30px", backgroundColor: color, display: "inline-block", marginRight: "10px",}} 
                    onClick={()=> showColorPicker(!displayColorPicker, color)}
                    key={color}
                ></div>
            )}
            {displayColorPicker && (<HexColorPicker color={colorPickerSelectedColor} onChange={(e)=> setNewColor(colorPickerSelectedColor, e)}/>)}
        </>
    );
}