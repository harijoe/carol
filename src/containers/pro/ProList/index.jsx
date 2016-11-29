import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pro from '../Pro'

class ProList extends Component {
  renderList() {
    return this.props.pros.map((pro) => {
      return (
        <li key={pro.get('id')}>
          <Pro pro={pro} display="pros_search_result" />
        </li>
      )
    })
  }

  render() {
    if (!this.props.pros.getIn([0, 'id'])) {
      return null
    }

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
  pros: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    pros: state.pros
  }
}

export default connect(mapStateToProps)(ProList)
