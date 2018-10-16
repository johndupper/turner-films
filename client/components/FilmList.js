import React from 'react'

import Film from './Film'
import FilmNotFound from './FilmNotFound'

const FilmList = props => (
  props.data && props.data.length
    ? <ul>{ props.data.map(film => <Film data={film} />) }</ul>
    : <FilmNotFound />
)

export default FilmList
