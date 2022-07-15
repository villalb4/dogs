const { Router} = require('express');
const axios = require('axios');
const {Dog, Temperament} = require("../db.js")
const {API, API_SEARCH, API_KEY} = process.env

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




router.get('/search', async(req, res, next) => {
  const {name} = req.query;
  if(!name){
    return res
      .status(400)
      .send({msg: "Falta enviar datos obligatorios"})
  }
  try {
    const dogApi = (await axios.get(`${API}?api_key=${API_KEY}`)).data
    const dogDb = await Dog.findAll({where: {name: name}, include: Temperament})

    const allDog = await [...dogApi, ...dogDb]
  
    const dog = await allDog.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))
      
    return res
      .status(200)
      .send(dog)
  } catch (error) {
    next(error)
  }
})




router.get('/dogs', async(req, res, next) => {
  try {
    const dogApi = (await axios.get(`${API}?api_key=${API_KEY}`)).data
    //formateando la api para traer solo los datos necesarios para la ruta pricipal
    const apiFormateo = dogApi.map(dog => {
      return {
        id: dog.id,
        image: dog.image.url,
        name: dog.name,
        weight: dog.height.metric,
        temperament: dog.temperament
      }
    })
    
    const dogDb = await Dog.findAll({include: Temperament});

    const dbFormateo = dogDb.map(dog => {
      return {
        id: dog.id,
        image: dog.image,
        name: dog.name,
        weight_min: dog.weight_min,
        weight_max: dog.weight_max,
        temperament: dog.temperaments
      }
    })

    const dogs = [...apiFormateo, ...dbFormateo];
    
    res.json(dogs)

  } catch (error) {
    next(error)
  }
})




router.post('/dogs', async(req, res) => {
  const {name, height_min, height_max, weight_min, weight_max, temperament} = req.body;
  if(!name || !height_min || !height_max || !weight_min || !weight_max) {
    return res
      .status(400)
      .send({msg: "Falta enviar datos obligatorios"})
  }
  try {
    const dog = await Dog.create(req.body)

    let tempDb = await Temperament.findAll({
      where: {id : temperament}
    })

    await dog.addTemperament(temperament)

    return res
      .status(201)
      .send({msg: "Perro creado correctamente"})
  } catch (error) {
    // next(error)
    console.log(error)
  }
})




router.get('/temperaments', async(req, res, next)=> {
  try {
    const temperamentos = (await axios.get(`${API}?api_key=${API_KEY}`)).data
    const formateo = temperamentos.map(t => t.temperament)
    const uniendo = formateo.filter(r => r != null)
    .join().split(", ").join().split(",")

    let resultado = uniendo.reduce((a, e) => {
      if(!a.find(d => d == e)) a.push(e)
      return a
    }, []);

    resultado = resultado.map(t => {return{name: t}})

    
    if(await Temperament.findAll().length === 0) {
      await Temperament.bulkCreate(resultado)
    } 
    const temper = await Temperament.findAll()
      console.log(temper)
    res.send(temper)

  } catch (error) {
    next(error)
  }
})




router.get('/dogs/:idRaza', async(req, res, next) => {
  const {idRaza} = req.params;
  if(!idRaza) {
    return res
      .status(400)
      .send({msg: "Falta enviar datos obligatorios"})
  }
  try {
    const dogApi = (await axios.get(`${API}?api_key=${API_KEY}`)).data
    //formateando la api para traer solo los datos necesarios para la ruta pricipal
    const apiFormateo = await dogApi.map(dog => {
      return {
        id: dog.id,
        image: dog.image.url,
        name: dog.name,
        weight_min: parseInt(dog.weight.metric.slice(0, 2).trim()),
        weight_max: parseInt(dog.weight.metric.slice(4).trim()),
        height_min: parseInt(dog.height.metric.slice(0, 2).trim()),
        height_max: parseInt(dog.height.metric.slice(4).trim()),
        life_span_min: parseInt(dog.life_span.slice(0, 2).trim()),
        life_span_max: parseInt(dog.life_span.slice(4).trim()),
        temperament: dog.temperament
      }
    })
    
    const dogDb = await Dog.findAll({include: Temperament});

    const dbFormateo = await dogDb.map(dog => {
      return {
        id: dog.id,
        image: dog.image,
        name: dog.name,
        height_min: dog.height_min,
        height_max: dog.height_max,
        weight_min: dog.height_min,
        weight_max: dog.height_max,
        life_span_min: dog.life_span_min,
        life_span_max: dog.life_span_max,
        temperament: dog.temperaments
      }
    })

    const allDog = [...apiFormateo, ...dbFormateo];

    const dog = allDog.filter(d => d.id == idRaza)

    return res
      .status(200)
      .send(dog)
  } catch (error) {
    next(error)
  }
})


module.exports = router;