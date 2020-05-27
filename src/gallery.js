import React, {useState, useEffect} from 'react';
import PICTURES from './data/pictures';

const SECONDS = 1000; 
const minimumDelay = 1 * SECONDS
const minimumIncrement = 1 

function Gallery(){
    const [index, setIndex] = useState(0);
    const [delay, setDelay] = useState(3 * SECONDS);
    const [increment, setIncrement] = useState(1)

    useEffect(()=>{
        console.log("delay",delay)
        console.log("increment", increment)
        const interval = setInterval(()=> {
            setIndex(sortedIndex =>{
                return (sortedIndex + increment) % PICTURES.length;  
            })
        }, delay);
        return () => {
            clearInterval(interval)
            //avoids memory leaks, clean up call back. 
        };
    }, [delay, increment]); //<- listens to delay changes, useEffect will run again
//have to use a call back because it doesnt use the latest index

    const updateDelay = event =>{
        const delay = Number(event.target.value * SECONDS)
    
        setDelay(delay < minimumDelay ? minimumDelay : delay);
    }

    const updateIncrement = event =>{
        const increment = Number(event.target.value)
    
        setIncrement(increment < minimumIncrement ? minimumIncrement : increment);
    }
    return(
        <div className='Gallery'>
            <img 
                src={PICTURES[index].image}
                alt='gallery'
            />
            <div className='multiform'>
                <div>
                    Gallery Transition Delay (seconds):
                    <input type='number' onChange={updateDelay}/>
                </div>
                <div>
                    Gallery Increment:
                    <input type='number' onChange={updateIncrement} />
                </div>
            </div>
        </div>
    )
}

export default Gallery;