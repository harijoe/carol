import React, { Component } from 'react'
import * as actions from '../actions/auth'

class Profile extends Component {
  componentWillMount() {
    console.log('mounted')
    actions.profile()
  }

  render() {
    return (
      <div>
        me
      </div>
    )
  }
}

export default Profile
