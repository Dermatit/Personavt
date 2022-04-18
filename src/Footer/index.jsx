import { useState } from 'react';
import { CharacterParts } from './CharacterParts/CharacterParts.jsx';
import { CharacterPartTypes } from './CharacterPartTypes/CharacterPartTypes.jsx';
import { SliderForMobile } from './SliderForMobile.jsx';
import './index.scss'

export default function Footer({clearMain}) {

    const [blur, setBlur] = useState({ pose : '#1c5ebd', other : '#1c5ebd' });

    const [currentType, setCurrentType] = useState();

    const [characterPartsRender, setCharacterPartsRender] = useState(false);

    const onTypeClick = (elem) => {
        setCurrentType(elem);
        setCharacterPartsRender(true);
    }

    return (
        <footer>
            <section>
                
                <div className='style'>
                    {characterPartsRender && <CharacterParts blur={blur} setBlur={setBlur} currentType={currentType} clearMain={clearMain}/>}
                </div>

                <SliderForMobile>
                    <CharacterPartTypes onTypeClick={onTypeClick} blur={blur}/>
                </SliderForMobile>

            </section>
        </footer>
    );
}