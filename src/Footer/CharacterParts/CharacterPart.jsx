import { TypeData } from '../../Data/data.js';

const parse = require('html-react-parser');

export const GenderStyle = ({clickGenderParts}) => {
    const genderArray = ['male', 'female'];
    return  genderArray.map(elem => 
                <div className='styleElement' onClick={()=> clickGenderParts(elem)}>
                    <div className={elem + ' styleSVG'} key={elem}>{elem === 'male' ? '♂' : '♀'}</div>
                </div>
            )  
}

export const PoseStyle = ({genderCheck, clickPoseParts}) => {
    return  TypeData.filter(elem => genderCheck == elem.gender).map(elem => 
                <div className='styleElement' onClick={()=> clickPoseParts(...elem.pose)} >
                    <div 
                        className='styleSVG' 
                        key={elem.pose}>
                        {parse(...elem.pose)}
                    </div>
                </div>   
            )
}

export const OtherStyles = ({typeCheck, currentType, clickOtherParts}) => {
    return  TypeData.filter(elem => typeCheck.gender == elem.gender && typeCheck.pose == elem.pose).map(elem => elem[currentType].map(elem =>
                <div className='styleElement' onClick={()=> clickOtherParts(elem)} >
                    <div 
                        className='styleSVG' 
                        key={elem}>
                        {parse(elem)}
                    </div>
                </div>  
            ))
}