import React from 'react';
import './ChoosenActor.css';
const ChoosenActor = (props) => {
    const{name, img} = props.actor;
    return (
        <div className='choosenActor'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default ChoosenActor;