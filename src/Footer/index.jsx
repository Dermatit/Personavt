import { useState } from 'react';
import { Styles } from './Styles/StylesComponent.jsx';
import { Types } from './Types/TypesComponent.jsx';
import './index.css'
import { Slider } from './slider.jsx';

export default function Footer({rerender}) {

    const [otherTypesBlur, setOtherTypesBlur] = useState('#1c5ebd');
    const [poseTypeBlur, setPoseTypeBlur] = useState('#1c5ebd');

    const [localCurrentType, setLocalCurrentType] = useState();

    const [typeRender, setTypeRender] = useState(false);

    const initialType = (elem) => {
        setLocalCurrentType(elem);
        setTypeRender(true);
    }

    const setBlur = {
        poseType : () => setPoseTypeBlur('white'),
        otherTypes : (color) => setOtherTypesBlur(color)
    }

    return (
        <footer>
            <section>
                
                <div className='style'>
                    {typeRender && <Styles setBlur={setBlur} localCurrentType={localCurrentType} rerender={rerender}/>}
                </div>

                <Slider>
                    <Types initialType={initialType} poseTypeBlur={poseTypeBlur} otherTypesBlur={otherTypesBlur}/>
                </Slider>
                
                {/* <div className='type'>
                    <Types initialType={initialType} poseTypeBlur={poseTypeBlur} otherTypesBlur={otherTypesBlur}/>
                </div> */}

            </section>
        </footer>
    );
}