const express = require('express')
const Film = require('../../models/Film')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

// get all titles
router.get('/films', (req, res) => {
  Film.find({}, (err, films) => {
    if (err) {
      const error = { message: 'Could not return films', error: err }
      return res.status(500).json(error)
    }

    console.log('successfully retrieved films', films.length)
    res.status(200).json(films)
  })
})

router.get('/films/:title', (req, res) => {
  const { title } = req.params

  if (!title) {
    const error = { message: 'No title provided for query' }
    console.error(error)
    return res.status(500).json(error)
  }

  // todo: format string for caps
  // todo: include searching other object keys

  const query = {
    TitleName: { $eq: title }
  }

  Film.find(query, (err, films) => {
    if (err) {
      const error = { message: 'Could not return films', error: err }
      console.error(error)
      return res.status(500).json(error)
    }

    console.log('successfully retrieved matching films', films.length)
    res.status(200).json(films)
  })
})

module.exports = router
