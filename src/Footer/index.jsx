import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentTypeHandlerAction, allClearAction, urlHandlerAction } from '../Redux/actions.jsx';
import { Styles } from './Styles/StylesComponent.jsx';
import { Types } from './Types/TypesComponent.jsx';
import './index.css'

export default function Footer() {
    const dispatch = useDispatch();

    const clearKey = useSelector(state => state.allClearHandler);

    const [otherTypesBlur, setOtherTypesBlur] = useState('#1c5ebd');
    const [poseTypeBlur, setPoseTypeBlur] = useState('#1c5ebd');

    const [typeRender, setTypeRender] = useState(false);

    const initialType = (elem) => {
        dispatch(currentTypeHandlerAction(elem)); 
        setTypeRender(true);
    }

    const setBlur = {
        newClearKey : () => dispatch(allClearAction(Math.random())),
        poseType : () => setPoseTypeBlur('white'),
        otherTypes : () => setOtherTypesBlur('white')
    }

    useMemo(() => {
        setOtherTypesBlur('#1c5ebd');
        dispatch(urlHandlerAction(''));
    }, [clearKey]);

    return (
        <footer>
            <section>
                {typeRender && <Styles setBlur={setBlur}/>}
                <Types key={clearKey} initialType={initialType} poseTypeBlur={poseTypeBlur} otherTypesBlur={otherTypesBlur}/>
            </section>
        </footer>
    );
}