import React, {useState, useEffect} from 'react';
import MATRIX_FRAMES from './data/matrix';
import {useDynamicTransition} from './hooks';

const minimumDelay = 10;
const minimumIncrement = 1;

function Matrix(){
    const [delay, setDelay] = useState(100);
    const [increment, setIncrement] = useState(1);

    const index = useDynamicTransition({
        increment, delay, length: MATRIX_FRAMES.length
    })

    const updateDelay = event => {
        const delay = Number(event.target.value)

        setDelay(delay < minimumDelay ? minimumDelay : delay);
    }

    const updateIncrement = event => {
        const increment = Number(event.target.value)

        setIncrement(increment < minimumIncrement ? minimumIncrement : increment);
    }

    return (
        <div className='Matrix'>
            <img src={MATRIX_FRAMES[index]} alt='matrix-animation'/>
            <div className='multiform'>
                <div>
                    Frame transition delay (miliseconds):
                    <input type='number' onChange={updateDelay} />
                </div>
                <div>
                    Frame increment:
                    <input type='number' onChange={updateIncrement} />
                </div>
            </div>
        </div>
    )
}


export default Matrix