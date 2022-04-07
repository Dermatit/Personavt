import { useSelector } from 'react-redux';
import { useState } from 'react';
import Header from '../Header';
import Constructor from '../Constructor';
import Footer from '../Footer';
import { Info } from '../Header/Info/Info';
import './App.css';

export default function App() {
    const clearKey = useSelector(state => state.allClearHandler);

    const [infoRender, setInfoRender] = useState(false);
    const showInfo = b => setInfoRender(b);
    
    return (
        <div className='app'>
            <Header showInfo={showInfo} infoRender={infoRender}/>
            {infoRender ? <Info/> : <><Constructor key={clearKey}/><Footer/></>}
        </div>
    );
}
