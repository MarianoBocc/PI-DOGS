const { Router } = require('express');
const{ getAllDogs } = require("../controllers/dogs_controller.js");
const { Dog, Temperament } = require('../db');
const router = Router();

//----- /dogs
   
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
  
router.get('/:idRaza', async (req, res, next) => {
  const idRaza = req.params.idRaza
  let dogs=await getAllDogs()

  try {
    if(!idRaza){
      res.status(200).send(dogs)
    } else {
      let dog= await dogs.filter(d=> d.id === Number(idRaza))
      console.log(dog)
      dog.length ?
      res.status(200).send(dog[0]) : res.status(404).send('Id not found')
    }
  } catch (error) {  
    next(error)
  }
});
  
router.post("/", async (req,res)=>{
  const { name, height, weight, image, life_span, temperament } = req.body;
  if (!name || !height || !weight || !image) {
    return res.status(404).send("required values")
  }
  // console.log(name)
  // console.log(height)
  // console.log(weight)
  // console.log(image)
  // console.log(life_span)
  // console.log(temperaments)
  try {
    const dog = await Dog.create({name, height, weight, life_span, image})
    let dogTemperament = await Temperament.findAll({
      where: {name: temperament}
    })
    dog.addTemperament(dogTemperament)
    res.status(201).send(dog)
  } catch (error) {
    console.log(error)
  }
});
  
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