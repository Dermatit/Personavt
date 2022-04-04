import { Logo, Question, Download, Message } from "./SubComponent";
import './index.css';

export default function Header() {
    return (
        <header>
            <Logo/>
            <div className='middle'>
                <Question/>
                <Download/>
            </div>
            <Message/>
        </header>
    );
}