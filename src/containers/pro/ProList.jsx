import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import searchPro from '../../actions/pro/searchPro'

class ProList extends Component {
  renderList() {
    if (!this.props.pros) {
      return null
    }
    return this.props.pros.map((pro) => {
      return (
        <li key={pro.id}>
          <ul>
            <li>Name: {pro.name}</li>
            <li>Trade: {pro.trade}</li>
          </ul><br />
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

ProList.propTypes = {
  pros: React.PropTypes.array,
  searchPro: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    pros: state.pros
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ searchPro }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProList)
