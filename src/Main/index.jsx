import { ColorPiker } from './ColorPicker/ColorPicker';
import { CharacterStage } from './Stage/CharacterStage';
import './index.scss';

export default function Main() {
    const images = {};

    return (
        <main>
            <div className='main'>
                <ColorPiker/>
                <CharacterStage images={images}/>
            </div>
        </main>
    );
}