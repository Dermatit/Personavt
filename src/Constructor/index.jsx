import { ColorPiker } from './ColorPicker/ColorPicker';
import { ImagesComponent } from './Stage/ImagesComponent';

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