import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HexColorPicker } from "react-colorful";
import getSVGColors from 'get-svg-colors-browser';
import { ColorPickerButton } from './ColorPickerButton.jsx';
import { urlHandlerAction } from '../../Redux/actions.jsx';
import './index.css';

export const ColorPiker = () => {
    const dispatch = useDispatch();

    const url = useSelector(state => state.urlHandler);
    const [colors, setСolors] = useState([]);

    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [colorPickerSelectedColor, setColorPickerSelectedColor] = useState("#ffffff");
    
    const showColorPicker = (oldColor) => {
        setDisplayColorPicker(!displayColorPicker);
        setColorPickerSelectedColor(oldColor);
    };

    useEffect(() => getSVGColors(url, { flat: true }).then((value) => setСolors(Array.from(new Set(value)))), [url]);

    const setNewColor = (oldColor, newColor) => {
        const newUrl = url.replaceAll(oldColor, newColor);
        setColorPickerSelectedColor(newColor);
        url.indexOf(newColor) == -1 && dispatch(urlHandlerAction(newUrl));
    };

    return (
        <>
            {colors.map(color => <ColorPickerButton color={color} showColorPicker={showColorPicker}/>)}
            {displayColorPicker && <HexColorPicker color={colorPickerSelectedColor} onChange={(e)=>setNewColor(colorPickerSelectedColor, e)}/>}
        </>
    );
}