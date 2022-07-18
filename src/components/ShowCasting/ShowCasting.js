import React from 'react';
import './ShowCasting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const ShowCasting = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const {name, role, salary, age, img, country} = props.cast;
    const selectedActor = {name, img};
    // console.log(selectedActor);
    const handleClick = props.handleClick;
    return (
        <div className='show-casting'>
            <img src={img} alt="" />
            <p>Name     :  {name}</p>
            <p>Role     : {role}</p>
            <p>Age      : {age}</p>
            <p>Salary   : {salary}</p>
            <p>Country  : {country}</p>
            <button onClick={() => handleClick(selectedActor)}> {element} add to cart</button>
        </div>
    );
};

export default ShowCasting;