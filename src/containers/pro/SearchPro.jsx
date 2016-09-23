import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Input from '../../components/form/Input'
import searchPro from '../../actions/pro/searchPro'
import Button from '../../components/form/Button'
import Form from '../../components/form/Form'

class SearchPro extends Component {
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
        <Form onSubmit={this.onClickSearchPro}>
          <Input
            type="text"
            attr={attrSearchPro}
            handleChange={this.handleChange}
            value={this.state.searchProValue}
          />
          <Button type="submit" value="Recherche" />
        </Form>
      </div>
    )
  }
}

SearchPro.propTypes = {
  searchPro: React.PropTypes.func,
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ searchPro }, dispatch)
}

export default connect(null, matchDispatchToProps)(SearchPro)
