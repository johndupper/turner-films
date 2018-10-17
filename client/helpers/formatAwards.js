import React from 'react'

const formatAwards = film => {
  if (!film.Awards) return

  /** @namespace award.AwardWon */
  /** @namespace award.Award */
  /** @namespace award.AwardCompany */
  return (
    <div>
      {
        film.Awards.map(award => (
          <p>
            {award.AwardWon ? 'Winner: ' : 'Nominated: '}
            <strong>{award.Award}</strong> ({award.AwardCompany})
          </p>
        ))
      }
    </div>
  )
}

export default formatAwards
