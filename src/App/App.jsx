import { useState } from 'react';
import Header from '../Header';
import Main from '../Main'
import Footer from '../Footer';
import './App.scss';

export default function App() {
    const [rerenderKey, setRerenderKey] = useState(Math.random())
    const clearMain = () => setRerenderKey(Math.random());
    
    return (
        <div className='app'>
            {/* <Header toggleInfoRender={()=>setInfoRender(prevState=>!prevState)}/> */}
            <Header/>
            <Main key={rerenderKey}/>
            <Footer clearMain={clearMain}/>
        </div>
    );
}
