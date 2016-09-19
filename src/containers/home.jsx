import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Input from '../components/input'
import searchPro from '../actions/pro/searchPro'
import ProList from './pro/ProList'

class Home extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.onClickSearchPro = this.onClickSearchPro.bind(this)
    this.state = {
      searchProValue: ''
    }
  }

  onClickSearchPro() {
    this.props.searchPro(this.state.searchProValue)
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
        <button onClick={this.onClickSearchPro}>Rechercher</button>
        <ProList />
      </div>
    )
  }
}

Home.propTypes = {
  searchPro: React.PropTypes.func,
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ searchPro }, dispatch)
}

export default connect(null, matchDispatchToProps)(Home)
