import { ColorPiker } from './ColorPicker/ColorPicker';
import { CharacterStage } from './Stage/CharacterStage';
import { useCallback, useState } from 'react';
import './index.scss';

export default function Main() {
    // const imageContainer = [];

    // const [imageContainer, setImageContainer] = useState([]);
    // const addImage = image => setImageContainer(image);

    return (
        <main>
            <div className='main'>
                <ColorPiker/>
                <CharacterStage/>
            </div>
        </main>
    );
}