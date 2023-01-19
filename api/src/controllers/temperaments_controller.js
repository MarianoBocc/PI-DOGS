const axios= require("axios");
const { Temperament } = require('../db')

// esta función busca los temperamentos en la api y las guarda en la db
// importante! esta función la uso en el index, para que apenas se levante el servidor se guarden los temperamentos
// en la db para tenerlos disponibles.
const getTemperaments = async (req, res, next) => {
  let tempUrl = await axios.get('https://api.thedogapi.com/v1/breeds')
  let temperament = []

    try {
        tempUrl.data.forEach(e => {
            if (e.temperament) temperament = [...temperament, ...e.temperament.split(', ')]
            })
        let arrayTemperaments = temperament.filter((item,index) => {
            return temperament.indexOf(item) === index;
        })
        arrayTemperaments.forEach(t => {
            Temperament.findOrCreate({
            where: { name: t }
            })
        })
        console.log('temperamentos cargados en la db')   
    } catch (error) {
        next(error)
    }
};

// esta función se encarga de buscar los temperamentos en la db
// la ejecuto desde el get a '/temperaments'
const getDbTemperaments = async (req, res, next) => {
    try {
        const TemperamentsDb = await Temperament.findAll()
        res.send(TemperamentsDb)
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getTemperaments,
    getDbTemperaments
};

