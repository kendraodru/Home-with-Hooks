import React, {useEffect, useState} from 'react';

function Joke() {

    const [joke, setJoke] = useState({});

    useEffect(()=> {
        fetch(`https://official-joke-api.appspot.com/jokes/random`)
        // fetch(`http://localhost:3005/jokes/random`)
            .then( response => response.json())
            .then(json => {
                console.log(json)
                setJoke(json)
            })
    },[]);
    //acts as component did mount
    //use effect runs its call back at every render (componentdidupdate);
    //the empty array will avoid the infinite loop of componentdidupdate

    const {setup, punchline} = joke;

    return(
        <div>
            <h3>Joke</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    )
}

export default Joke;