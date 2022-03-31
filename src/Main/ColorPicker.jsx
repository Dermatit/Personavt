import { useState, useEffect } from 'react';
import { HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from 'react-redux';
import getSVGColors from 'get-svg-colors-browser';

import { urlHandlerAction } from '../Redux/actions.jsx';

export const ColorPiker = () => {
    const dispatch = useDispatch();
    const SVG = useSelector(state => state.svgHandler);
    const url = useSelector(state => state.urlHandler);

    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    const [colorPickerSelectedColor, setColorPickerSelectedColor] = useState("#ffffff");
    const showColorPicker = (toggle, oldColor) => {
        setDisplayColorPicker(toggle);
        setColorPickerSelectedColor(oldColor);
    };

    const [сolors, setСolors] = useState([]);

    useEffect(() => {
        getSVGColors(SVG, { flat: true }).then((value) => {
            setСolors(Array.from(new Set(value)));
        });
    }, [url]);

    const setNewColor = (oldColor, newColor) => {
        const newSvgCode = url.replaceAll(oldColor, newColor);
        setColorPickerSelectedColor(newColor);
        dispatch(urlHandlerAction(newSvgCode));
    };

    return (
        <>
            {сolors.map(color => 
                <div 
                    style={{content: "", width: "30px", height: "30px", backgroundColor: color, display: "inline-block", marginRight: "10px",}} 
                    onClick={() => showColorPicker(!displayColorPicker, color)}
                    key={color}
                ></div>
            )}
            {displayColorPicker && (<HexColorPicker color={colorPickerSelectedColor} onChange={(e) => setNewColor(colorPickerSelectedColor, e)}/>)}
        </>
    );
}