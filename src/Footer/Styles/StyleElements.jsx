import { TypeData } from '../Data/data.js';

const parse = require('html-react-parser');

export const GenderStyle = ({genderStyleProp}) => {
    const genderArray = ['male', 'female'];
    return  genderArray.map(elem => 
                <div className='styleElement' onClick={genderStyleProp(elem)}>
                    <div className={elem + ' styleSVG'} key={elem}>{elem === 'male' ? '♂' : '♀'}</div>
                </div>
            )  
}

export const PoseStyle = ({sexCheck, poseStyleProp}) => {
    return  TypeData.filter(elem => sexCheck == elem.sex).map(elem => 
                <div className='styleElement' onClick={poseStyleProp(...elem.pose)} >
                    <div 
                        className='styleSVG' 
                        style={{width: '50px'}}
                        key={elem.pose}>
                        {parse(...elem.pose)}
                    </div>
                </div>   
            )
}

export const OtherStyles = ({sexCheck, poseCheck, localCurrentType, otherStylesProp}) => {
    return  TypeData.filter(elem => sexCheck == elem.sex && poseCheck == elem.pose).map(elem => 
                <div className='styleElement' onClick={otherStylesProp(...elem[localCurrentType])} >
                    <div 
                        className='styleSVG' 
                        style={{width: '50px'}} 
                        key={elem[localCurrentType]}>
                        {parse(...elem[localCurrentType])}
                    </div>
                </div>  
            )
}