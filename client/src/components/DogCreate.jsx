import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './dogCreate.css';
import { postDog, getTemperament } from '../redux/actions';

function createValidations(input){
    let err ={};
    ///name/// 

    if (!input.name.trim()) {
        err.name = 'Insert a race';
    }else if (parseInt(input.name)) {
        err.name = 'Insert a valid character'; 
    }

    ///life span ///
    if (input.lifeMin < 0 || input.lifeMin > 20) {
        err.lifeMin = 'Insert a number between 1 & 20';
    }
    if (input.lifemax < 0 || input.lifemax > 20) {
        err.lifemax = 'Insert a number between 1 & 20';
    }
    if (input.lifemax < input.lifeMin) {
        err.lifeMin = 'The minimum value can not be greater than the maximum';
    }

    ///weight///
    if (input.weightMin < 0 || input.weightMin> 100) {
        err.weightMin = 'Insert a number between 0 & 100';
    }
    if (input.weightMax < 0 || input.weightMax > 100) {
        err.weightMax = 'Insert a number between 1 & 100';
    }
    if (input.weightMax < input.weightMin) {
        err.weightMin = 'The minimum value can not be greater than the maximum';
    }

    ///height///
    if (input.heightMin < 0 || input.heightMin> 100) {
        err.heightMin = 'Insert a number between 0 & 100';
    }
    if (input.heightMax < 0 || input.heightMax > 100) {
        err.heightMax = 'Insert a number between 1 & 100';
    }
    if (input.heightMax < input.heightMin) {
        err.heightMin = 'The minimum value can not be greater than the maximum';
    }

    ///temperament///
    if (!input.temperament) {
        err.temperament = 'Select at least one temperament';
    }
    /// image///
    if (!input.image) {
        err.image = 'Insert an url direction';
    }

    return err;
   
}


export default function DogCreate(){
    const dispatch = useDispatch()
    //const history = useHistory() 
    const temperament = useSelector((state) => state.temperament) 
    const [err, setErr] = useState({});
    // formulario
    const[input, setInput] = useState({
        
        name: '',
        lifeMin: '',
        lifeMax: '',
        weightMin: '',
        weightMax: '',
        heightMin: '',
        heightMax: '',
        temperament: [],
        image: ''
        
    });
    ///Manejo de eventos
    
    useEffect(() =>{
        dispatch(getTemperament());
    }, [dispatch]); 

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value  //trae todos los parámetros para cada perro
        })
        setErr(createValidations({
            ...input,
            [e.target.name] : e.target.value
        }));

        console.log(input) // acá deberia ver en consola el perro creado o los errores
    }
    
    function  handleTemperament(e) {
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
    }
    function handleSubmit(e) {
        e.preventDefault();   //Impide q se recargue la página
        setErr(createValidations({
           ...input,
           [e.target.name] : e.target.value,  
        })
        );
        if (!Object.keys(err).length && 
            input.lifeMin &&
            input.lifeMax &&
            input.weightMin &&
            input.weightMax && 
            input.heightMin &&
            input.heightMax &&  
            input.temperament &&
            input.image) {
            
            input.weightMax += 'Kgs'
            input.heightMax += 'cm'
            input.life_span = input.lifein + '-' + input.lifeMax + 'years'

            dispatch(postDog(input));
            alert('Your new friend was succesfully created')
            setInput({
                name: '',
                lifeMin: '',
                lifeMax: '',
                weightMin: '',
                weightMax: '',
                heightMin: '',
                heightMax: '',
                temperament: [],
                image: ''
            })
        } else{
            alert('Your friend was´nt created ');
            return;
        }

        useHistory.push('/home')  
    }

    ////Delete///
    function handleDelete(elem) {
        setInput({
            ...input, 
            temperament: input.temperament.filter(temp => temp !== elem)
        })
    }



    return(
        <div className='dogCreate'>
           
                <Link to={'/home'}>
                    <button>HOME</button>
                </Link>
                <h1> It's time to create!</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label className='label'> Dog name </label>
                        <input type='text' value={input.name} name='name' onChange={(e) => handleChange(e)}/>
                        {err.name && (<p className='err'>{err.name}</p>)}
                    </div>

                    <div>
                        <label className='label'>Min life span </label>
                        <input type='number' value={input.lifeMin} name='lifeMin' onChange={(e) => handleChange(e)}/>
                        {err.lifeMin &&(<p className='err'>{err.lifeMin}</p>)}
                    </div>

                    <div>
                        <label className='label'>Max life span </label>
                        <input type='number' value={input.lifeMax} name='lifeMax' onChange={(e) => handleChange(e)}/>
                        {err.lifeMax &&(<p className='err'>{err.lifeMax}</p>)}
                    </div>

                    <div>
                        <label className='label'> Min weight </label>
                        <input type='number' value={input.weightMin} name='weightMin' onChange={(e) => handleChange(e)}/>
                        {err.weightMin &&(<p className='err'>{err.weightMin}</p>)}
                    </div>

                    <div>
                        <label className='label'>Max weight </label>
                        <input type='number' value={input.weightMax} name='weightMax' onChange={(e) => handleChange(e)}/>
                        {err.weightMax &&(<p className='err'>{err.weightMax}</p>)}
                    </div>

                    <div>
                        <label className='label'>Min height </label>
                        <input type='number' value={input.heightMin} name='heightMin' onChange={(e) => handleChange(e)}/>
                        {err.heightMin &&(<p className='err'>{err.heightMin}</p>)}
                    </div>

                    <div>    
                        <label className='label'>Max height </label>
                        <input type='number' value={input.heightMax} name='heightMax' onChange={(e) => handleChange(e)}/>
                        {err.heightMax &&(<p className='err'>{err.heightMax}</p>)}
                    </div>

                    <div>    
                        <label className='label'>Temperaments </label>
                        <select onChange={(e) => handleTemperament(e)}>


                            {err.temperament &&(<p className='err'>{err.temperament}</p>)}
                            {temperament.map(c =>(
                                <option value={c.name}>{c.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                    <ul><li>{input.temperament.map(e => e + ", ")}</li></ul>
                    {input.temperament.map(elem =>
                    <button className='del' onClick={() => handleDelete(elem)}> X </button>
                        )}
                    </div>

                    <div>
                        <label className='label'>Image </label>
                        <input type='text' value={input.image} name='image' onChange={(e) => handleChange(e)}/>
                        {err.image && (<span className='err'>{err.image}</span>)}
                     </div>    

                        <div>
                            <button className='creaBut' type='submit'>CREATE</button>
                        
                    </div>

                    </form>
                   
        </div>
    )

}


