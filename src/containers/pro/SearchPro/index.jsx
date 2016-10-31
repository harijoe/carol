import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InputText from '../../../ui/form/input/Text/index'
import { searchPro } from '../ducks'
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
    console.log(this.props.searchPro(this.state.searchProValue))
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
          <Button type="submit" value="Recherche" />
        </Form>
      </div>
    )
  }
}

SearchPro.propTypes = {
  searchPro: React.PropTypes.func,
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchPro }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchPro)
