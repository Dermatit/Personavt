import { Logo, Question, Download, Message } from "./SubComponent";
import './index.css';

export default function Header() {
    return (
        <header>
            <Logo/>
            <Question/>
            <Download/>
            <Message/>
        </header>
    );
}