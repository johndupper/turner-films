import React from 'react'

import Film from './Film'
import FilmNotFound from './FilmNotFound'

const FilmList = props => (
  props.data && props.data.length
    ? <ul>{ props.data.map(film => <Film data={film} />) }</ul>
    : <FilmNotFound />
)

// const ListItem = props => {
//   const film = props.data
//   return (
//     <li>
//       <p>{film.TitleName} ({film.ReleaseYear})</p>
//     </li>
//   )
// }

export default FilmList
