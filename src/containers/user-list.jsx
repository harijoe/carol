import { Link } from 'react-router'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectUser, getUsersList } from '../actions/index'

class UserList extends Component {
  renderList() {
    if (!this.props.users) {
      return (
        <p>Aucun utilisateur</p>
      )
    }
    return this.props.users.map((user) => {
      return (
        <li
          key={user.id}
        >
          <p
            onClick={() => {
              this.props.selectUser(user)
            }}
          >
            {user.first} {user.last}
          </p>
          <Link
            onClick={() => {
              this.props.selectUser(user)
            }}
            to={('users/').concat(user.id)}
          >
            Voir détail
          </Link>
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
        <span
          onClick={() => {
            this.props.getUsersList()
          }}
        >
          Reload
        </span>
      </div>
    )
  }
}

UserList.propTypes = {
  users: React.PropTypes.any,
  selectUser: React.PropTypes.func,
  getUsersList: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser, getUsersList }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList)
