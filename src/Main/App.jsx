import { useState } from 'react';
import Header from '../Header';
import Constructor from '../Constructor';
import Footer from '../Footer';
import { Info } from '../Header/Info/Info';
import './App.css';

export default function App() {
    const [infoRender, setInfoRender] = useState(false);
    const [rerenderKey, setRerenderKey] = useState(Math.random())

    const rerender = () => setRerenderKey(Math.random());
    
    return (
        <div className='app'>
            <Header toggleInfoRender={()=>setInfoRender(prevState=>!prevState)}/>
            {infoRender ? <Info/> : <><Constructor key={rerenderKey}/><Footer rerender={rerender}/></>}
        </div>
    );
}
