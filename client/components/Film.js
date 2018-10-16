import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-modal'

export default class Film extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal () {
    this.setState(ps => ({ ...ps, isModalOpen: true }))
  }

  closeModal () {
    this.setState(ps => ({ ...ps, isModalOpen: false }))
  }

  render () {
    const film = this.props.data
    console.log('film detail: ', film)
    return (
      <li>
        <p>{film.TitleName} ({film.ReleaseYear})</p>

        <Button
          bsStyle='info' bsSize='small'
          onClick={this.openModal}>
          <span className='glyphicon glyphicon-edit' />
        </Button>

        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel={film.TitleName}
          className='Modal'>

          {/* todo: modal detail */}

          <h1>{film.TitleName}</h1>
          <h4>{film.ReleaseYear}</h4>

          {/* todo: modal detail */}
        </Modal>
      </li>
    )
  }
}
