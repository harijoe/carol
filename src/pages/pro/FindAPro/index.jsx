import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProList from '../../../containers/pro/ProList'
import { loadSearchPros } from '../../../containers/pro/ProList/ducks'

class FindAPro extends Component {
  componentWillMount() {
    if (this.props.location && this.props.location.query && this.props.location.query.trade) {
      this.props.loadSearchPros(this.props.location.query.trade)
    }
  }

  render() {
    return (
      <div>
        <ProList />
      </div>
    )
  }
}

FindAPro.propTypes = {
  loadSearchPros: PropTypes.func,
  location: React.PropTypes.object
}

export default connect(null, { loadSearchPros })(FindAPro)
