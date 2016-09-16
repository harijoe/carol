import React, { Component } from 'react'
import Input from '../components/input'

class Home extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      searchProValue: ''
    }
  }

  handleChange(event) {
    this.setState({
      searchProValue: event.target.value
    })
  }

  render() {
    const attrSearchPro = {
      className: 'search-pro',
      id: 'search-pro',
      placeholder: '',
      type: 'text',
      name: 'search-pro'
    }

    return (
      <div>
        <img
          alt=""
          src="https://ssl.gstatic.com/onebox/media/olympics/photos/o16/live/RIOEC8C1QFE71_768x432.JPG"
        />
        <br />
        <Input
          type="text"
          attr={attrSearchPro}
          handleChange={this.handleChange}
          value={this.state.searchProValue}
        />
      </div>
    )
  }
}

export default Home
