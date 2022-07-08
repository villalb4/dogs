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
    const dogApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data
    //formateando la api para traer solo los datos necesarios para la ruta pricipal
    const formateo = dogApi.map(dog => {
      return {
        image: dog.image.url,
        name: dog.name,
        weight: dog.height.metric,
        temperament: dog.temperament
      }
    })
    
    const dogDb = await Dog.findAll({include: [{model: Temperament}]});

    // const hola = dogDb.map(dog => {
    //   return {
    //     image: dog.image,
    //     name: dog.name,
    //     weight: dog.weight,
    //     temperament: dog.temperament
    //   }
    // })

    const dogs = [...formateo, ...dogDb];
    
    res.json(dogs)

  } catch (error) {
    next(error)
  }
})



router.get('/temperaments', async(req, res)=> {
  try {
    const temperamentos = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data

    const formateo = temperamentos.map(t => t.temperament)
    const uniendo = formateo.filter(r => r != null).sort()
    .join().split(", ").join().split(",")
    // se borran los temperamentos duplicados
    let resultado = uniendo.reduce((a, e) => {
      if(!a.find(d => d == e)) a.push(e)
      return a
    }, []);

    resultado = resultado.map(t => {return{name: t}})

    await Temperament.bulkCreate(resultado)

    res.send({msg: "Datos agregados correctamente"})

  } catch (error) {
    next(error)
  }
})




router.post('/dogs', async(req, res, next) => {
  const {name, height, weight, temperament} = req.body;

  if(!name || !height || !weight) {
    return res
      .status(400)
      .send({msg: "Falta enviar datos obligatorios"})
  }

  try {
    const dog = await Dog.create(req.body)

    let tempDb = await Temperament.findAll({
      where: {name : temperament}
    })

    await dog.addTemperament(tempDb)

    return res
      .status(201)
      .send({msg: "Perro creado correctamente"})
  } catch (error) {
    next(error)
  }
})

module.exports = router;
