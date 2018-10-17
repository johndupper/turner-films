import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

const FilmNotFound = () => {
  return (
    <ListGroupItem>
      I couldn't find the title you're looking for...<br />
      (Hint: Your options are quite limited. May I advise you
      take a gander at the full list instead?)
    </ListGroupItem>
  )
}

export default FilmNotFound
