import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export default function Card({ id, name, image, temperaments, weight}) { 
    return (
        <Link to={'/dog/' + id}>
           
            <div className= 'Card_container'>
                <div className='Card_data'>
                    <img className='Card_img' src={image} alt='img not found'/>
                    <h3>{name}</h3>
                    <p>{temperaments}</p>
                    <p>{weight}</p>            
                </div>
            </div>
          
            
        </Link>
    );
};