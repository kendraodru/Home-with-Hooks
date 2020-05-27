import React, {useState, useEffect} from 'react';
import PICTURES from './data/pictures'

function Gallery(){
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=> {
            setIndex(sortedIndex =>{
                return (sortedIndex + 1) % PICTURES.length;  
            })
        },3000);
        return () => {
            clearInterval(interval)
            //avoids memory leaks, clean up call back. 
        };
    },[]);
//have to use a call back because it doesnt use the latest index
    return(
        <div className='Gallery'>
            <img 
                src={PICTURES[index].image}
                alt='gallery'
            />
        </div>
    )
}

export default Gallery;