import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export default function Card({ id, name, image, temperaments, weight}) { 
    return (
        <Link to={'/dog/' + id}>      
            <div className= 'Card_container'>
                <div className='Card_data'>
                    <h3 className='Race'>{name}</h3>
                    </div>
                    <div>
                    <img className='Card_img' src={image} alt='img not found'/>
                    </div>
                    <div className='Card_text'>
                    <p>{temperaments}</p>
                    <p>{weight}</p>   
                </div>         
            </div>   
        </Link>
    );
};