import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import InputText from '../../../ui/form/input/Text/index'
import { loadSearchPros } from '../ProList/ducks'
import Button from '../../../ui/form/input/Button'
import Form from '../../../ui/form/Form'

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
    this.props.loadSearchPros(this.state.searchProValue)
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
      name: 'search-pro'
    }

    return (
      <div>
        <Form onSubmit={this.onClickSearchPro}>
          <InputText
            attr={attrSearchPro}
            onChange={this.handleChange}
            value={this.state.searchProValue}
          />
          <Button type="submit" value="search" />
        </Form>
      </div>
    )
  }
}

SearchPro.propTypes = {
  loadSearchPros: PropTypes.func,
}

export default connect(null, { loadSearchPros })(SearchPro)
