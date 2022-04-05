import { Logo, Question, Download, Message } from "./SubComponent";
import './index.css';

export default function Header({showInfo, infoRender, dowloadUrl}) {
    return (
        <header>
            <Logo/>
            <div className='middle'>
                <Question showInfo={showInfo} infoRender={infoRender}/>
                <Download dowloadUrl={dowloadUrl}/>
            </div>
            <Message/>
        </header>
    );
}