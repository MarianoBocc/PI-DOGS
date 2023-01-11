import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogName } from '../redux/actions';
import './search.css'

export default function NavBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState('') 

function handleInputChange(e){ 
    e.preventDefault()
    setName(e.target.value)
    console.log(name) 
}

function handleSubmit(e){
    e.preventDefault()
    if(!name.length){
        alert('Please enter a race');
    } else {
        dispatch(getDogName(name));
        setName(''); 

}
};   


    return (
        <div className='search'>
        <form  onSubmit={(e) => handleSubmit(e)}>
        
           
           <input className='input' type= 'text' 
           value={name} 
           placeholder='Find a puppy...'
           onChange = {(e) => handleInputChange(e)}
           required/>
        <button className='busqueda'  type='submit'>SEARCH</button> 
        </form>
        </div>
    )
}