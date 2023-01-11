const initialState = { 
    dogs : [],
    allDogs: [], // declaro un estado q siempre va a tener todos los perros
    temperament: [],
    detail: {}

};

function rootReducer(state= initialState, action){
    switch(action.type) {

        case 'GET_DOGS':
        return {
            ...state, //guardo el estado
            dogs: action.payload, //en mi estado dogs, inicialmente un estado vacío, manda lo q  mande la acción de dogs
            allDogs: action.payload //guarda todos los perros para q pueda usarlo al filtrar y q me los cargue a todos de nuevo, y no sobre el filtro del filtro
        }

        case 'GET_DOG_NAME':
            return {
                ...state,
                dogs: action.payload //es el arreglo q estoy renderizando
            }

        case 'GET_TEMPERAMENT':
        return {
            ...state,
            temperament: action.payload
        }

        case 'POST_DOG':
            return {
                ...state,
            }

      
      
        case 'FILTER_BY_TEMPERAMENT':
            const allBreeds = state.allDogs 
            const temperamentFiltered = action.payload === 'All'? 
            state.allDogs : allBreeds.filter(el => {
               return el.temperaments? el.temperaments.includes(action.payload) :
                    el.temperaments?.map(ele => ele.name).includes(action.payload) //acá le saqué la s al primer temperament y filtra pero no renderiza

            })
                return {
                    ...state, //me traigo todo lo de estado
                    dogs: temperamentFiltered
        }
        
        case 'FILTER_CREATED':
            const allCreated = state.dogs;
            const createdFilter = action.payload === 'Created' ? allCreated.filter(e => e.createInDb) : state.allDogs.filter(e => !e.createInDb)
            return {
                ...state,
                dogs: action.payload === 'All' ? state.allDogs : createdFilter
            } 



        case 'ORDER_BY_NAME': //'Asc. Desc'
        const sortName = [...state.dogs];
        const orderAZ = action.payload === 'All' ?
                 sortName: 
                 action.payload === 'Asc' ?
                     sortName.sort((a, b) =>
                        a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
                    : sortName.sort((a, b) =>
                        a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1);
                return {
                    ...state,
                    dogs: orderAZ,
                };  

        case 'ORDER_BY_WEIGHT':
      
        const sortWeight =[...state.dogs]
        const orderWeight = action.payload === 'All'?
        sortWeight:
          action.payload === 'Heavy' ? 
          sortWeight.sort((a, b) =>
            parseInt(a.weight.metric)-parseInt(b.weight.metric))
            : sortWeight.sort((a, b) => 
            parseInt(b.weight.metric)-parseInt(a.weight.metric));
            return{
                ...state,
                dogs: orderWeight, 
      };
        case 'GET_DETAIL':
             return {
                 ...state,
                 detail: action.payload
             }
        default:
            return state;
    }


    
    

};


export default rootReducer;