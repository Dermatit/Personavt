import { Logo, Download } from "./SubComponents";
import './index.scss';

export default function Header() {
    return (
        <header>
            <Logo/>
            <Download/>
        </header>
    );
}