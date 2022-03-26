import { useState } from 'react';
import useImage from "use-image";
// import getColors from "get-svg-colors";
import getSVGColors from 'get-svg-colors-browser';
import { HexColorPicker } from "react-colorful";
import { Stage, Layer, Image } from "react-konva";

const SVG = '<svg id="0926940a-ec7f-493d-9a13-e7e5cef45db4" data-name="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><title>circle1</title><circle cx="80" cy="80" r="80" fill="#8dc640"/><path d="M163,243c0,.82,0,1.63.06,2.44.81,0,1.62.06,2.44.06a80,80,0,0,0,80-80c0-.82,0-1.63-.06-2.44-.81,0-1.62-.06-2.44-.06A80,80,0,0,0,163,243Z" transform="translate(-163 -163)" fill="#79ad37"/></svg>';

export default function Main() {
    const [url, setNewUrl] = useState(SVG);
    const image = useImage('data:image/svg+xml;base64,' + window.btoa(url));

    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    
    const [colorPickerSelectedColor, setColorPickerSelectedColor] = useState("#ffffff");
    const showColorPicker = (toggle, oldColor) => {
        setDisplayColorPicker(toggle);
        setColorPickerSelectedColor(oldColor);
    };

    const [uniqColors, setUniqColors] = useState();

    getSVGColors(url, { flat: true }).then((value) => {
        setUniqColors(value);
        console.log(value);
    });

    // useMemo(() => {
    //     getSVGColors(url, { flat: true }).then((value) => {
    //         setUniqColors(value);
    //         console.log(value);
    //     });
    // }, []);

    // console.log(uniqColors);
    // console.log(uniqColors)
    // const uniqColors = colors.then(value => value);

    // const allColors = colors.map((color) => color.hex());
    // const allColors = colors.then(value => value);
    // console.log(allColors);
    // const uniqColors = Array.from(new Set(allColors));

    // const colors = getColors(url, { flat: true });
    // const allColors = colors.map((color) => color.hex());
    // const uniqColors = Array.from(new Set(allColors));//копирует значения из allColors не повторяя их и создает массив

    const setNewColor = (oldColor, newColor) => {
        const newSvgCode = url.replaceAll(oldColor, newColor);
        setColorPickerSelectedColor(newColor);
        setNewUrl(newSvgCode);
    };

    return (
        <main>
            <div className='main'>
                
                {uniqColors.map((color) => 
                    <div 
                        style={{content: "", width: "30px", height: "30px", backgroundColor: color, display: "inline-block", marginRight: "10px",}} 
                        onClick={() => showColorPicker(!displayColorPicker, color)}
                    ></div>
                )}

                {displayColorPicker && (<HexColorPicker color={colorPickerSelectedColor} onChange={(e) => setNewColor(colorPickerSelectedColor, e)}/>)}

                <Stage width={500} height={500}>
                    <Layer>
                        <Image image={image} />
                    </Layer>
                </Stage>

            </div>
        </main>
    );
}