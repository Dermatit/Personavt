import { ColorPiker } from './ColorPicker/ColorPicker';
import { ImagesComponent } from './Stage/ImagesComponent';
import './index.scss';

export default function Constructor() {
    const imageContainer = [];
    return (
        <main>
            <div className='main'>
                <ColorPiker/>
                <ImagesComponent imageContainer={imageContainer}/>
            </div>
        </main>
    );
}