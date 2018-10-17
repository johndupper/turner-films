import React, { Component } from 'react'
import { Button, ListGroupItem, Modal } from 'react-bootstrap'

import formatStoryline from '../helpers/formatStoryline'
import formatAwards from '../helpers/formatAwards'

export default class Film extends Component {
  constructor (props) {
    super(props)
    this.state = { showModal: false }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal () {
    this.setState(ps => ({ ...ps, showModal: true }))
  }

  closeModal () {
    this.setState(ps => ({ ...ps, showModal: false }))
  }

  render () {
    // maintain prop immutability
    const film = { ...this.props.data }

    // remove empty key/value pairs
    Object.keys(film).forEach(key => {
      if (!film[key]) delete film[key]
    })

    return (
      <ListGroupItem
        header={film.TitleName}
        className='modal-container'>
        <div>
          <strong>Released: </strong>{film.ReleaseYear} <br />
          <strong>Genres: </strong>{film.Genres.join(', ')}
          <br />

          {/* modal button */}
          <Button
            bsStyle='primary'
            bsSize='small'
            onClick={this.openModal}>
            Details
          </Button>
        </div>

        {/* modal */}
        <Modal
          show={this.state.showModal}
          onHide={this.closeModal}>

          <Modal.Header closeButton>
            <Modal.Title>{film.TitleName}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h4>Synopsis</h4>
            {formatStoryline(film)}

            <h4>Awards</h4>
            {formatAwards(film)}
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>

        </Modal>
      </ListGroupItem>
    )
  }
}
