import React, { Component } from 'react'

export default class SearchForm extends Component {
  constructor (props) {
    super(props)
    this.state = { searchText: '' }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    const searchText = event.target.value
    this.setState(prev => ({ ...prev, searchText }))
  }

  onSubmit (event) {
    event.preventDefault()
    this.props.onSearch(this.state.searchText)
    event.currentTarget.reset()
    this.setState(prev => ({ ...prev, searchText: '' }))
  }

  render () {
    return (
      <form onSubmit={this.onSubmit} className='search-form'>
        <label>Search</label>
        <input type='text' value={this.state.value} onChange={this.onChange} />
        <input type='submit' value='Search/Reset' />
      </form>
    )
  }
}
