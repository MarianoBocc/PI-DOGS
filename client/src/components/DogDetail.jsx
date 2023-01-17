import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/actions';
import { Link } from 'react-router-dom';
import './dogDetail.css';

export default function DogDetail(props) {

    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail[0])
    const id = props.match.params.id;
    console.log(detail)
    useEffect(()=> {
        dispatch(getDetail(id)) 
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
    <>
        {!!detail && 
            <div className='container'>
                <div className='dogDetail'>
                    <img className='img' src={detail?.image} alt='img not found'/>

                    <div className='text'>
                        <span className='race'>{detail?.name}</span>
                        <span className='measures'> weight metric : {detail?.weight.metric}</span>
                        <span className='measures'> height metric : {detail?.height.metric}</span>
                        <div className='measures'>
                            <span>life span : {detail?.life_span}</span>
                            <span>temperaments : {detail?.temperaments}</span>
                        </div>
                    </div>
                    <Link to='/home'><button className='volver'>BACK</button></Link>
                </div>
            </div>
        }
    </>
    )
}
