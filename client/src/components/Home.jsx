import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getAllDogs, getTemperament, filterDogsByTemperament, filterCreated, orderByName,  orderByWeight } from "../redux/actions";
import { Link } from "react-router-dom";
import './home.css'
import Search from './Search';
import Pagination from "./Pagination";
import Card from "./NewCard";
import Buttons from "./Buttons"
   
    //////Este es el q va/////

 export default function Home() {
    //// REDUX ////
    const dispatch = useDispatch() 
    const allDogs = useSelector((state) => state.dogs) 
    const allTemperament = useSelector((state) => state.temperament)
    const [/*order*/, setOrder] = useState('')

 ////PAGINACIÓN////
    const[currentPage, setCurrentPage] = useState(1) 
    const [pagesNumber, /*setPagesNumber*/] = useState(23)
    const dogsPerPage = 8
    const indexOfLastDog = currentPage * dogsPerPage 
    const indexOfFirstDog = indexOfLastDog - dogsPerPage 
    let currentDogs;
    let notFound = false
    if(!allDogs.message) currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)
    else notFound = true

    const pagination = (pageNumber) => { 
      setCurrentPage(pageNumber)
    };

    useEffect (() => {
        dispatch(getTemperament());
    }, [dispatch]);

    useEffect (()=> {
        dispatch(getAllDogs());
    }, [dispatch]);

    function handleClick(e){ 
        e.preventDefault();
        dispatch(getAllDogs()); 
    }

   
    


    
    //// FILTROS////
    function handleFilterTemperament(e){
        dispatch(filterDogsByTemperament(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
    };

    function handleFilterCreated(e){
        e.preventDefault();
        dispatch(filterCreated(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };

    function handleSort(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };

    function handleWeight(e){
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }; 

 return (
    <div className="fondo">
        <div className="head">

        <Link to= '/dog'>
           <button className='reload_dogs'>Create Dog</button> 
            </Link>
        <button className='reload_dogs' onClick={e=> {handleClick(e)}}>Reload Dogs</button>
        </div>

        
        <div className="selectores">

            <select className="botonSel" onClick={e=> {handleSort(e)}}>
                <option value='Asc'>A-Z</option>
                <option value='Desc'>Z-A</option>

            </select>

            <select className="botonSel" onChange={(e) => handleFilterTemperament(e)}>
                <option value='All'>Temperaments</option>
                {allTemperament?.map((temperament) => (
                    <option key={temperament.name} value={temperament.name}>
                    {temperament.name}
                    </option>
                ))}
            </select>

            <select className="botonSel" onChange={(e) => handleWeight(e)}>
                <option>Weight</option>
                <option value="Heavy">Light</option>
                <option value="Light">Heavy</option>
            </select>

            <select className="botonSel" onChange={(e) => handleFilterCreated(e)}>
                <option value='All'>All</option>
                <option value='Created'>Created</option>
                <option value='Api'>Existent</option>
            </select>
        </div>
        <div>
            <Search/> 
            <Pagination
                dogsPerPage={dogsPerPage}
                allDogs={allDogs.length}
                pagination={pagination}
            />
            <div>
                <Buttons pageNumber={pagesNumber} currentPage={currentPage} changePage={pagination} />
            </div>
            </div>
            <div className="conteiner">
            <div className="card_grid">
            { notFound 
                    ? <button className="botonSel" onClick={e=> {handleClick(e)}}>Dog not found, try again.</button>
                : currentDogs?.map(el => (
                   
                    <Card
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        image={el.image}
                        weight={el.weight.imperial + ( 'Lbs  | ' )+ el.weight.metric + ('Kgs')}
                        temperament={el.temperament ? el.temperament : el.Temperament}
                    />
                ))}
            </div>
        </div>
    </div>
   
 )
}
 

