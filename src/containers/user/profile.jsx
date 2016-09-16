import React, { Component } from 'react'
import profile from '../../actions/user/profile'

class Profile extends Component {
  componentWillMount() {
    profile()
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
