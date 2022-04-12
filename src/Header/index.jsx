import { Logo, Question, Download, Message } from "./SubComponent";
import './index.scss';

export default function Header({toggleInfoRender}) {
    return (
        <header>
            <Logo/>
            <div className='middle'>
                <Question toggleInfoRender={toggleInfoRender}/>
                <Download/>
            </div>
            <Message/>
        </header>
    );
}