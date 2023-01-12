import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/actions';
import { Link } from 'react-router-dom';
import './dogDetail.css';

export default function DogDetail(props) {

    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail)
    const id = props.match.params.id;

    useEffect(()=> {
        dispatch(getDetail(id)) 
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='container'>
            <div className='dogDetail'>
                  <img className='img' src={detail.image} alt='img not found'/>
               <div className='text'>
              <strong className='race'>{detail.name}</strong>
                   <span className='measures'> weight imperial : {detail.weight?.imperial}</span> | <span>weight metric : {detail.weight?.metric}</span>
                   <span className='measures'>height imperial : {detail.height?.imperial}</span> | <span>height metric : {detail.height?.metric}</span>
                   <h4 className='measures'>
                    <p>life span : {detail.life_span}</p>
                    <p>temperaments : {detail.temperaments}</p>
                    </h4>
               </div>
               <div>
               <Link to='/home'><button className='volver'>BACK</button></Link>
                </div>
             </div>
        </div>
    )
};