const { Router} = require('express');
const axios = require('axios');
const {Dog, Temperament} = require("../db.js")
const {API_KEY} = process.env

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', async(req, res, next) => {
  try {
    const dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    //formateando la api para traer solo los datos necesarios para la ruta pricipal
    const formateo = dogApi.data.map(dog => {
      return {
        image: dog.image.url,
        name: dog.name,
        peso: dog.height.metric,
        temperament: dog.temperament
      }
    })
    
    const dogDb = await Dog.findAll({include: [{model: Temperament}]});

    const dogs = [...formateo, ...dogDb];
    
    res.json(dogs)

  } catch (error) {
    next(error)
  }
})

router.post('/dogs', async(req, res, next) => {
  const {name, height, weight} = req.body;

  if(!name || !height || !weight) {
    return res
      .status(400)
      .send({msg: "Falta enviar datos obligatorios"})
  }

  try {
    const dog = await Dog.create(req.body)
    return res
      .status(201)
      .send(dog)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
