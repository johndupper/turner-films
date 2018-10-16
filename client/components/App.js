import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      films: []
    }

    this.getFilms = this.getFilms.bind(this)
  }

  componentDidMount () {
    this.getFilms()
  }

  getFilms () {
    axios.get('/films')
      .then(response => {
        const films = response.data
        this.setState({ films })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    return (
      <div className='App'>
        {
          this.state.films.map(film => (
            <p>{film.TitleName}</p>
          ))
        }
      </div>
    )
  }
}

export default App
