import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { svgHandlerAction, urlHandlerAction } from './Redux/actions';

export default function App() {
  const dispatch = useDispatch();

  const clearKey = useSelector(state => state.allClearHandler);
  useMemo(() => {
    dispatch(svgHandlerAction('none'))
    dispatch(urlHandlerAction(''))
  }, [clearKey])
  
  return (
    <div className='app'>
      <Header/>
      <Main key={clearKey}/>
      <Footer/>
    </div>
  );
}
