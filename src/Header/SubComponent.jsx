import { ReactComponent as LogoIcon } from '../Assets/Logo.svg';
import { ReactComponent as QuestionIcon } from '../Assets/Question.svg';
import { ReactComponent as DownloadIcon } from '../Assets/Download.svg';
import { ReactComponent as MessageIcon } from '../Assets/Message.svg';

export function Logo() {
    return (
        <div className='logo'>
            <a href='https://vk.com/logonavt'>
                <LogoIcon/>
            </a>
        </div>
    )
}
export function Question({showInfo, infoRender}) {
    return (
        <div className='question' onClick={()=>showInfo(!infoRender)}>
            <QuestionIcon/>
        </div>
    )
}
export function Download({dowloadUrl}) {
    const download = (source) => {
        const el = document.createElement("a");
        el.setAttribute("href", source);
        el.setAttribute("download", 'image');
        document.body.appendChild(el);
        el.click();
        el.remove();
    }
    return (
        <div className='download' onClick={() => download(dowloadUrl.current.toDataURL())}>
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