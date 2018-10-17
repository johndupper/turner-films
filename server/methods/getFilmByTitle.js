const Film = require('../../models/Film')

const getFilmByTitle = title => {
  return new Promise((resolve, reject) => {
    if (!title) {
      const error = { message: 'No title provided for query' }
      return reject(error)
    }

    const query = {
      TitleName: { $regex: new RegExp(title, 'i') }
    }

    // todo: include searching other object keys

    Film.find(query, (error, films) => {
      return error ? reject(error) : resolve(films)
    })
  })
}

module.exports = getFilmByTitle
