export const ColorPickerButton = ({color, showColorPicker}) => {
    return (
        <div 
            className='color-picker-button' 
            style={{backgroundColor: color}} 
            onClick={()=> showColorPicker(color)} 
            key={color}>
        </div>
    )
}