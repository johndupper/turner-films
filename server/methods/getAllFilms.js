const Film = require('../../models/Film')

const getAllFilms = () => {
  return new Promise((resolve, reject) => {
    Film.find({}, (error, films) => {
      return error ? reject(error) : resolve(films)
    })
  })
}

module.exports = getAllFilms
