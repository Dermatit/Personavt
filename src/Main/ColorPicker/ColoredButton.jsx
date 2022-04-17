export const ColoredButton = ({color, showColorPicker}) => {
    return (
        <div 
            className='color-picker-button' 
            style={{backgroundColor: color}} 
            onClick={()=> showColorPicker(color)} 
            key={color}>
        </div>
    )
}