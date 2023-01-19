import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/actions';
import { Link } from 'react-router-dom';
import './dogDetail.css';

export default function DogDetail(props) {

    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail[0])
    const id = props.match.params.id;

    useEffect(()=> {
        dispatch(getDetail(id)) 
    }, [dispatch, id]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='container'>
            <Link to='/home'><button className='volver'>BACK</button></Link>
           {!!detail &&
            <div className='dogDetail'>
                <img className='img' src={detail.image} alt='img not found'/>
                    <strong className='race'>{detail.name}</strong>
                    <div className='measures'>
                    <h4>life span : {detail.life_span}</h4>
                    <h4>temperaments: {detail.temperament? detail.temperament : detail.Temperaments.map(e => e.name + (', '))}</h4>
                    </div> 
           
            </div>}        </div>
    )};