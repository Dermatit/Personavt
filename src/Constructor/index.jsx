import { ColorPiker } from './ColorPicker';
import { KonvaComponent } from './KonvaComponent';

export default function Constructor({setDownloadUrlHandler}) {
    const imageContainer = [];

    return (
        <main>
            <div className='main'>
                <ColorPiker/>
                <KonvaComponent imageContainer={imageContainer} setDownloadUrlHandler={setDownloadUrlHandler}/>
            </div>
        </main>
    );
}