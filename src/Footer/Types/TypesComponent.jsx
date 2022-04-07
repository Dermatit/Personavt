import { TypeElement } from './TypeElement.jsx';
import { TypeData } from '../Data/data.js';

export const Types = ({initialType, poseTypeBlur, otherTypesBlur}) => {
    return (
        <div className='type'>
            {Object.keys({...TypeData.find(elem => elem)}).filter(elem => elem !== 'poseCheck').map((elem, i) => 
                i === 0 ? <TypeElement initialType={initialType} elem={elem} key={i}/> : 
                i === 1 ? <TypeElement initialType={initialType} elem={elem} style={{color : poseTypeBlur}} key={i}/> : 
                <TypeElement initialType={initialType} elem={elem} style={{color : otherTypesBlur}} key={i}/>
            )}
        </div>
    )
}