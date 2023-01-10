import React from 'react';
import {Link} from 'react-router-dom';
import './landingPage.css';

export default function  LandingPage() {
    return (
        <div className='total'>
        <div className='landing'>
            <h1 className='title'> BEWARE of the dogs!!! </h1> 
            <h3 className='sub_title'> I'm just kidding! you arrrrr...</h3>
            <Link to = {"/home"}>
                <button className='bone'> WELCOME!</button>
            </Link>
        </div>
        </div>
    );

}