import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class ProList extends Component {
  renderList() {
    return this.props.pros.map((pro) => {
      return (
        <li key={pro.get('id')}>
          <ul>
            <li>Name: {pro.get('name')}</li>
            <li>Trade: {pro.get('trade')}</li>
            <li><Link to={`/artisan/${pro.get('guid')}`}>See details</Link></li>
          </ul><br />
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
