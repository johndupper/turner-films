import React from 'react'
import { ListGroup } from 'react-bootstrap'

import Film from './Film'
import FilmNotFound from './FilmNotFound'

const FilmList = props => {
  if (!props.data || !props.data.length) {
    return (
      <ListGroup>
        <FilmNotFound />
      </ListGroup>
    )
  }

  return (
    <ListGroup>
      { props.data.map(film => <Film data={film} />) }
    </ListGroup>
  )
}

export default FilmList
