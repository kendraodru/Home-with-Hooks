import React from 'react';
import {useFetch} from './hooks'

function Joke() {
    const { setup, punchline } = useFetch(`https://official-joke-api.appspot.com/jokes/random`,{})
    // useEffect(()=> {
    //     fetch(`https://official-joke-api.appspot.com/jokes/random`)
    //     // fetch(`http://localhost:3005/jokes/random`)
    //         .then( response => response.json())
    //         .then(json => {
    //             console.log(json)
    //             setJoke(json)
    //         })
    // },[]);
    //acts as component did mount
    //use effect runs its call back at every render (componentdidupdate);
    //the empty array will avoid the infinite loop of componentdidupdate
    return(
        <div>
            <h3>Joke</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    )
}

export default Joke;