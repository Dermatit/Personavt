import { SexSelector, PoseSelector } from "./SubComponent";
import {useState} from 'react';
import './index.css'

export default function Footer() {

    const [sexCheck, setSexCheck] = useState(null);

    const sexSelect = (e) => {
        setSexCheck(e.target.className);
        setTypeRender(true);
    }

    const [typeRender, setTypeRender] = useState(false);

    return (
        <footer>
            {typeRender? <PoseSelector sexCheck={sexCheck}/> : <SexSelector sexSelect={sexSelect}/>}
        </footer>
    );
}