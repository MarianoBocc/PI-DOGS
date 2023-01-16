const axios= require("axios");
const { Dog, Temperament } = require('../db')

const getApiInfo = async () => {
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds?api_key=live_SJUPMRYxf1e9hkOb86t03WJ8XD51pSGzPEZJAYT5yX8FisLiUt0pYFBEW9mYlt4T')
    const apiInfo = await apiUrl.data.map(el =>{
        return{
            id: el.id,
            weight: el.weight,
            name: el.name,
            temperaments:el.temperament,    
            height: el.height,
            life_span: el.life_span,
            image: el.image.url
        }
    })
    return apiInfo;
};
// const getDbInfo = async () => {

//     let infoDbgogs = await Dog.findAll({ 
//         include: {
//             model: Temperament,
//             attributes: ['name'],
//             through: { attributes: [] }
//         }
//     })
//     return infoDbgogs = infoDbgogs.map(el => ({
//         id: el.id,
//         weight: el.weight,
//         name: el.name, 
//         height: el.height,
//         life_span: el.life_span,
//         image: el.image.url,
//         temperament: el.temperament.map(e => e.name)
        
//     }))
// };
const getDbInfo = async() => {
    return await Dog.findAll({
    includes:{
        model: Temperament,
        atributes: ['name'],
        through: {
            atributes: [],
        },
    }
    })
    
};

const getAllDogs = async ()=>{
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);      // concatenamos la primera con la segunda constante
    return infoTotal;                               // devolvemos un arreglo con toda la info
};


module.exports = {
    getAllDogs, getApiInfo, getDbInfo
};
