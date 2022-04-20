import { CharacterPartType } from './CharacterPartType.jsx';
import { characterData } from '../../Data/characterData.js';

export const CharacterPartTypes = ({onTypeClick, blur}) => {

    return  Object.keys(characterData.find(elem => elem)).filter(elem => elem !== 'poseCheck').map((elem, i) => {
                    switch(i) {
                        case 0: return <CharacterPartType onTypeClick={onTypeClick} elem={elem} key={i}/>;
                        case 1: return <CharacterPartType onTypeClick={onTypeClick} elem={elem} style={{color : blur.pose}} key={i}/>;
                        default: return <CharacterPartType onTypeClick={onTypeClick} elem={elem} style={{color : blur.other}} key={i}/>;
                    }
                }
            )
}