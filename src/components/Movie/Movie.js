import React, { useEffect, useState } from 'react';
import ChoosenActor from '../ChoosenActors/ChoosenActor';
import ShowCasting from '../ShowCasting/ShowCasting';
import './Movie.css';
const Movie = () => {
    const [casts, setCasts] = useState([]);
    const [choosen, setChoosen] = useState([]);

    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCasts(data));

    },[])
    const handleClick = data => {
        const newChoosen = [...choosen, data]
        setChoosen(newChoosen);
    }
    console.log(choosen);
    return (
        <div className='cast-container'>
            
            <div className='casting'>
                
                {
                    casts.map(cast => <ShowCasting handleClick={handleClick} cast = {cast}></ShowCasting>)
                }
            </div>
            <div className='selected-people'>
                <h2>Actors Added: {choosen.length}</h2>
                {
                    choosen.map(actor => <ChoosenActor actor={actor}></ChoosenActor>)
                }
            </div>
        </div>
    );
};

export default Movie;