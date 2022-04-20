import { characterData } from '../../Data/characterData.js';

const parse = require('html-react-parser');

export const Gender = ({clickGenderParts}) => {
    const genderArray = ['male', 'female'];
    return  genderArray.map(elem => 
                <div className='styleElement' key={elem} onClick={()=> clickGenderParts(elem)}>
                    <div className={elem + ' styleSVG'}>{elem === 'male' ? '♂' : '♀'}</div>
                </div>
            )  
}

export const Pose = ({genderCheck, clickPoseParts}) => {
    return  characterData.filter(elem => genderCheck == elem.gender).map(elem => 
                <div className='styleElement' key={elem.pose} onClick={()=> clickPoseParts(...elem.pose)} >
                    <div className='styleSVG'>{parse(...elem.pose)}</div>
                </div>   
            )
}

export const Other = ({typeCheck, currentType, clickOtherParts}) => {
    return  characterData.filter(elem => typeCheck.gender == elem.gender && typeCheck.pose == elem.pose).map(elem => elem[currentType].map(elem =>
                <div className='styleElement' key={elem} onClick={()=> clickOtherParts(elem)} >
                    <div className='styleSVG'>{parse(elem)}</div>
                </div>  
            ))
}