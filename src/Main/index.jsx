import { ColorPiker } from './ColorPicker';
import { KonvaComponent } from './KonvaComponent';
//эТИ ГОВНАРИ РЕРЕНДЕРЯТСЯ ПРОСТО ВСЕГДА
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Main() {
    const [imageContainer] = useState([]);

    return (
        <main>
            <div className='main'>
                <ColorPiker/>
                <KonvaComponent imageContainer={imageContainer}/>
            </div>
        </main>
    );
}