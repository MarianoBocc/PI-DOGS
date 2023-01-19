const { Router } = require('express');
const{ getAllDogs } = require("../controllers/dogs_controller.js");
const { Dog, Temperament } = require('../db');
const router = Router();

///dogs ///
   
router.get("/", async (req, res) => {
  const name = req.query.name;
  let dogs = await getAllDogs(); 

  try { 
    if (name) {

      let dogsPerName = dogs.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );

      if (dogsPerName.length < 1) {
        return res.json({message:`Can't find dog with name: ${name}`});
      }
      res.status(200).json(dogsPerName);
    } else {
      res.status(200).json(dogs);
    }    
  } catch (error) {
    res.json(404).send(`Can't find dogs`)
  }
}); 
  
///Raza///
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const dogs = await getAllDogs()
  if (id) {
      let dog = await dogs.filter(el => el.id == id) //traer el personaje con ese id 
      dog.length?
      res.status(200).json(dog):
      res.status(404).send('That id was not found 😕')
  }
})

router.post('/', async (req, res) => {
  let {
        name, 
        image, 
        height,  
        weight,
        life_span, 
        createdInDb, 
        temperament
      } = req.body;

  let dogCreated = await Dog.create ({ //creo el perro con todo esto)
        name, 
        image, 
        height,
        weight,
        life_span, 
        createdInDb, 
  })  
  //me lo traigo del modelo de temperament
  let temperamentDb = await Temperament.findAll({ //el temp lo tengo que encontrar en el modelo q 
      where : {name : temperament}                // tiene toddos los temperamentos, donde coincida con el temperamento del modelo
  })
  dogCreated.addTemperament(temperamentDb) //Temperament de la tabla de base de datos
  res.send('Dog created')
});
  



///delete///
router.delete("/:id", async(req,res) => {
  const id = req.params.id;
  try {
    await Dog.destroy({
      where: { id }
    })
    res.send(`the dog with id ${id} was removed`)
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;