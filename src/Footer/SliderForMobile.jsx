import { useState, useRef } from 'react';

export const SliderForMobile = (props) => {
    const ref = useRef();

    const [initialPosition, setInitialPosition] = useState();
    const [finalPosition, setFinalPosition] = useState();
    const [pausedPosition, setPausedPosition] = useState(0);

    const onTouchStart = e => {
        e.currentTarget.className === 'type' && setInitialPosition(e.touches[0].clientX);
        const positionFromDOM = window.getComputedStyle(ref.current).getPropertyValue('left');
        positionFromDOM !== 'none' && (setPausedPosition(parseInt(positionFromDOM.slice(0, -2))));
    };

    const onTouchMove = e => {
        if (e.currentTarget.className === 'type') {
            const currentPosition = e.touches[0].clientX - initialPosition + pausedPosition;

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