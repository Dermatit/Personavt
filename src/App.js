import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';
import { svgHandlerAction, urlHandlerAction } from './Redux/actions';
import { Info } from './Info/Info';

export default function App() {
  const dispatch = useDispatch();

  const clearKey = useSelector(state => state.allClearHandler);
  useMemo(() => {
    dispatch(svgHandlerAction('none'))
    dispatch(urlHandlerAction(''))
  }, [clearKey]);

  const [infoRender, setInfoRender] = useState(false);

  const showInfo = b => setInfoRender(b)

  const [dowloadUrl, setDownloadUrl] = useState();

  const setDownloadUrlHandler = u => setDownloadUrl(u)
  
  return (
    <div className='app'>
      <Header showInfo={showInfo} infoRender={infoRender} dowloadUrl={dowloadUrl}/>
      {infoRender ? <Info/> : <><Main key={clearKey} setDownloadUrlHandler={setDownloadUrlHandler}/><Footer/></>}
    </div>
  );
}
