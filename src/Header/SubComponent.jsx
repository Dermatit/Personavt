import { ReactComponent as LogoIcon } from '../Assets/Logo.svg';
import { ReactComponent as QuestionIcon } from '../Assets/Question.svg';
import { ReactComponent as DownloadIcon } from '../Assets/Download.svg';
import { ReactComponent as MessageIcon } from '../Assets/Message.svg';
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

export function Question({toggleInfoRender}) {
    return (
        <div className='question' onClick={toggleInfoRender}>
            <QuestionIcon/>
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
        <div className='download' onClick={()=>download(downloadStage.current.toDataURL())}>
            <DownloadIcon/>
        </div>
    )
}

export function Message() {
    return (
        <div className='message'>
            <a href='https://vk.com/im?sel=-192730957'>
                <MessageIcon/>
            </a>
        </div>
    )
}