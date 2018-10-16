import React from 'react'

const Film = props => {
  const film = props.data
  return (
    <li>
      <p>{film.TitleName} ({film.ReleaseYear})</p>
    </li>
  )
}

export default Film
