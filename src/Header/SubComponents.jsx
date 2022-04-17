import { ReactComponent as LogoIcon } from '../Assets/Logo.svg';
import { ReactComponent as DownloadIcon } from '../Assets/Download.svg';
import { useSelector } from 'react-redux';

export function Logo() {
    return (
        <div className='logo'>
            <a href='https://vk.com/logonavt'>
                <LogoIcon/>
            </a>
        </div>
    )
}

export function Download() {
    const getStateDownloadStage = state => state.triviaReducer.downloadStage;
    const downloadStage = useSelector(getStateDownloadStage);

    const download = (source) => {
        const el = document.createElement("a");
        el.setAttribute("href", source);
        el.setAttribute("download", 'image');
        document.body.appendChild(el);
        el.click();
        el.remove();
    }
    return (
        <div className='download' onClick={()=>download(downloadStage.current.toDataURL({pixelRatio: 2}))}>
            <DownloadIcon/>
        </div>
    )
}