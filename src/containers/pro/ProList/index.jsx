import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProList extends Component {
  renderList() {
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
    if (!this.props.pros[0].id) {
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
  pros: React.PropTypes.array
}

function mapStateToProps(state) {
  return {
    pros: state.pros
  }
}

export default connect(mapStateToProps)(ProList)
