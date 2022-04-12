import { TypeElement } from './TypeElement.jsx';
import { TypeData } from '../Data/data.js';

export const Types = ({initialType, poseTypeBlur, otherTypesBlur}) => {

    return  Object.keys(TypeData.find(elem => elem)).filter(elem => elem !== 'poseCheck').map((elem, i) => {
                    switch(i) {
                        case 0: return <TypeElement initialType={initialType} elem={elem} key={i}/>;
                        case 1: return <TypeElement initialType={initialType} elem={elem} style={{color : poseTypeBlur}} key={i}/>;
                        default: return <TypeElement initialType={initialType} elem={elem} style={{color : otherTypesBlur}} key={i}/>;
                    }
                }
            )
}