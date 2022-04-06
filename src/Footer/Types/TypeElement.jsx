export const TypeElement = ({initialType, elem, style}) => {
    return (
        <div 
            className='typeElement' 
            style={style} 
            onClick={()=>initialType(elem)} 
            key={elem}>
            {elem}
        </div> 
    );
}