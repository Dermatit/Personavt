import { Logo, Question, Download, Message } from "./SubComponent";

export default function Header({showInfo, infoRender}) {
    return (
        <header>
            <Logo/>
            <div className='middle'>
                <Question showInfo={showInfo} infoRender={infoRender}/>
                <Download/>
            </div>
            <Message/>
        </header>
    );
}