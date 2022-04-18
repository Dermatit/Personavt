import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HexColorPicker } from "react-colorful";
import getSVGColors from 'get-svg-colors-browser';
import { ColoredButton } from './ColoredButton.jsx';
import { getSvgAction } from '../../Redux/actions.jsx';

export const ColorPiker = () => {
    const dispatch = useDispatch();

    const getState = state => state.svg;
    const url = useSelector(getState);

    const [colors, setСolors] = useState([]);

    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [colorPickerSelectedColor, setColorPickerSelectedColor] = useState("#ffffff");
    
    const showColorPicker = (oldColor) => {
        setDisplayColorPicker(prevState => !prevState);
        setColorPickerSelectedColor(oldColor);
    };

    useEffect(() => getSVGColors(url, { flat: true }).then((value) => setСolors(Array.from(new Set(value)))), [url]);

    const setNewColor = (oldColor, newColor) => {
        const newUrl = url.replaceAll(oldColor, newColor);
        setColorPickerSelectedColor(newColor);
        url.indexOf(newColor) == -1 && dispatch(getSvgAction(newUrl));
    };

    return (
        <>
        <div className='colors'>
            {colors.map(color => <ColoredButton color={color} showColorPicker={showColorPicker}/>)}
        </div>
            {displayColorPicker && <HexColorPicker color={colorPickerSelectedColor} onChange={(e)=>setNewColor(colorPickerSelectedColor, e)}/>}
        </>
    );
}