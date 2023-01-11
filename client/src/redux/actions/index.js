import axios from 'axios';

 //RUTA DE HOME//////

export function getAllDogs(){
    return async function(dispatch){     // aquí se une front y back
        let json = await axios.get ('http://localhost:3001/dogs');
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        })
    }
}

export function getDogName(name){ //name o payload, da igual
    return async function(dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/dogs?name=' + name);
            return dispatch ({
                type: 'GET_DOG_NAME',
                payload: json.data 
            })
      } catch (error) {
        alert('Dog not found');

        }
    }
}

export function getTemperament(){
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/temperaments');
        return dispatch({
            type: 'GET_TEMPERAMENT',
            payload: json.data
        })
    }
}

export function postDog(payload){
    return async function(dispatch) {
        const data = await axios.post('http://localhost:3001/dogs', payload);
        console.log(data)
        return data;
    }
}

export function filterDogsByTemperament(payload){ 
    console.log(payload)
    return {
        type: 'FILTER_BY_TEMPERAMENT',
        payload
    };
}

export function filterCreated(payload){
    return {
        type: 'FILTER_CREATED',
        payload
    }

}

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME', 
        payload
    }
}

export function orderByWeight(payload) {
    return {
        type: 'ORDER_BY_WEIGHT',
        payload
    }
}

export function getDetail(id){   
    return async function (dispatch){
        try {
            if(id){
                const detail = await axios.get(`http://localhost:3001/dogs/${id}`);
                dispatch ({
                    type: 'GET_DETAIL',
                    payload: detail.data
                })
            } else {
                dispatch({
                    type: 'GET_DETAIL',
                    payload: []
                })
            }
        } catch(error){
            console.log(error)   
        }  
    }  
}     