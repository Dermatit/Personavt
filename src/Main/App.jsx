import { useSelector } from 'react-redux';
import { useState } from 'react';
import Header from '../Header';
import Constructor from '../Constructor';
import Footer from '../Footer';
import { Info } from '../Header/Info';
import './App.css';

export default function App() {
  const clearKey = useSelector(state => state.allClearHandler);

  const [infoRender, setInfoRender] = useState(false);
  const [dowloadUrl, setDownloadUrl] = useState();

  const showInfo = b => setInfoRender(b);
  const setDownloadUrlHandler = u => setDownloadUrl(u);
  
  return (
    <div className='app'>
      <Header showInfo={showInfo} infoRender={infoRender} dowloadUrl={dowloadUrl}/>
      {infoRender ? <Info/> : <><Constructor key={clearKey} setDownloadUrlHandler={setDownloadUrlHandler}/><Footer/></>}
    </div>
  );
}
