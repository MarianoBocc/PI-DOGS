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
        <div>
            <Link to='/home'><button>VOLVER</button></Link>
            <div className='dogDetail'>
              <h2 className='race'>{detail.name}</h2>
               <div>
                   <span className='measures'>weight imperial : {detail.weight?.imperial}</span> | <span>weight metric : {detail.weight?.metric}</span>
               </div>
               <div>
                   <span className='measures'>height imperial : {detail.height?.imperial}</span> | <span>height metric : {detail.height?.metric}</span>
                   <h4 className='measures'>life span : {detail.life_span}</h4>
                   <h4 className='temps'>temperaments : {detail.temperaments}</h4>
               </div>
               <div>
                  <img className='img' src={detail.image} alt='img not found'/>
                </div>
             </div>
        </div>
    )
};