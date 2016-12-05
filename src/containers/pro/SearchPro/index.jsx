import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import InputText from '../../../ui/form/input/Text/index'
import Button from '../../../ui/form/input/Button'
import Form from '../../../ui/form/Form'

class SearchPro extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.onClickButtonSearch = this.onClickButtonSearch.bind(this)
    this.state = {
      searchProValue: ''
    }
  }

  onClickButtonSearch() {
    const { dispatch } = this.props
    const tradeQueryParam = this.state.searchProValue ? `?trade=${this.state.searchProValue}` : ''

    dispatch(push(`/search-pro${tradeQueryParam}`))
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
        <Form onSubmit={this.onClickButtonSearch}>
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
  dispatch: React.PropTypes.func.isRequired
}

export default connect()(SearchPro)

