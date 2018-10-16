import React, { Component } from 'react'
import axios from 'axios'

import SearchForm from './SearchForm'
import FilmList from './FilmList'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { films: null }
    this.getFilms = this.getFilms.bind(this)
  }

  componentDidMount () {
    this.getFilms()
  }

  getFilms (title = '') {
    const url = title ? `/films/${title}` : '/films'

    axios.get(url)
      .then(response => {
        const films = response.data
        this.setState(ps => ({ ...ps, films }))
      })
      .catch(error => {
        console.error(error)
        this.setState(ps => ({ ...ps, films: [] }))
      })
  }

  render () {
    return (
      <div className='app'>
        <SearchForm onSearch={this.getFilms} />
        {
          (this.state.films)
            ? <FilmList data={this.state.films} />
            : ''
        }
      </div>
    )
  }
}

export default App
