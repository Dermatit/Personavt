import { useState, useRef } from 'react';

export const Slider = (props) => {
    const ref = useRef();

    const [initialPosition, setInitialPosition] = useState();
    const [finalPosition, setFinalPosition] = useState();

    const onTouchStart = e => {
        e.currentTarget.className === 'type' && setInitialPosition(e.touches[0].clientX);
    };

    const onTouchMove = e => {
        if (e.currentTarget.className === 'type') {
            const currentPosition = e.touches[0].clientX - initialPosition;

            const sliderPadding = window.innerWidth - ref.current.clientWidth;
            const restrictPosition = currentPosition <= 0 && currentPosition > sliderPadding;

            restrictPosition && setFinalPosition(currentPosition);
        }
    };

    return (
        <div className='type' ref={ref} style={{left: finalPosition}} onTouchMove={onTouchMove} onTouchStart={onTouchStart}>
            {props.children}
        </div>
    );
};