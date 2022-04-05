import { ColorPiker } from './ColorPicker';
import { KonvaComponent } from './KonvaComponent';
//эТИ ГОВНАРИ РЕРЕНДЕРЯТСЯ ПРОСТО ВСЕГДА
import { useState } from 'react';

export default function Main({setDownloadUrlHandler}) {
    const [imageContainer] = useState([]);

    return (
        <main>
            <div className='main'>
                <ColorPiker/>
                <KonvaComponent imageContainer={imageContainer} setDownloadUrlHandler={setDownloadUrlHandler}/>
            </div>
        </main>
    );
}