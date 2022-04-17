export const CharacterPartType = ({onTypeClick, elem, style}) => {
    return (
        <div 
            className='typeElement' 
            style={style} 
            onClick={()=>onTypeClick(elem)} 
            key={elem}>
            {elem}
        </div> 
    );
}