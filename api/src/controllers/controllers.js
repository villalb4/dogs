module.exports = {
  formateoDb : async function(dogDb) {

    const dbFormateo = dogDb.map(dog => {
      return {
        id: dog.id,
        image: dog.image,
        name: dog.name,
        weight_min: dog.weight_min,
        weight_max: dog.weight_max,
        temperament: dog.temperaments,
        creadoEnDB: dog.creadoEnDB
      }
    })

    const validandoDogsDb = dbFormateo.map(d => {
      if(!d.image) {
        d.image = "https://www.postable.com/blog/wp-content/uploads/2018/06/puppy2.jpg"
      }
      if(Array.isArray(d.temperament)) {
        d.temperament = d.temperament.map(t => t.name)
        d.temperament = d.temperament.join(", ")
      }
      return d
    })
    return validandoDogsDb
  },

  formateoApi : async function(dogApi) {

    const apiFormateo = dogApi.map(dog => {
      return {
        id: dog.id,
        image: dog.image.url,
        name: dog.name,
        weight_min: dog.weight.metric.slice(0, 2).trim(),
        weight_max: dog.weight.metric.slice(-2).trim(),
        temperament: dog.temperament
      }
    })

    const validandoDogsApi = await apiFormateo.map(d => {
      if(!d.weight_min || d.weight_min === "Na") {
        if(!d.weight_max || d.weight_max === "Na") {
          d.weight_min = "8"
        } else {
          d.weight_min = (d.weight_max - 2).toString();
        }
      }
      
      if(!d.weight_max || d.weight_max === "Na") {
        if(!d.weight_min || d.weight_min === "Na") {
          d.weight_max = "12"
        } else {
          d.weight_max = (parseInt(d.weight_min) + 7).toString();
        }
      }

      if(!d.temperament) {
        d.temperament = "Stubborn, Active, Happy, Dutiful, Confident"
      }

      return d
    })
    return validandoDogsApi 
  }
}