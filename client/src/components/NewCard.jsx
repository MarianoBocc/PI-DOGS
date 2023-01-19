import React from 'react';
import { Link } from 'react-router-dom';
import './newCard.css';

export default function Card({ id, name, image, temperament, weight}) { 
    return (
<Link to={'/dog/' + id}> 
    <div className='container'>
   <div className='card'>
      <img className='Card_img' src={image} alt='img not found'/>
      <h2>{name}</h2>
   <div>
      {temperament}   
   </div> 
      <p>{weight}</p>
   </div>
   </div>
</Link>

)};