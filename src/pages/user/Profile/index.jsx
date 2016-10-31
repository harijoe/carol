import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProfile, updateProfile } from './ducks'
import InputPhone from '../../../ui/form/input/Phone'
import Form from '../../../ui/form/Form'
import Button from '../../../ui/form/input/Button'

class Profile extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.checkAccess = this.checkAccess.bind(this)
    this.state = {
      phone: ''
    }
  }

  componentWillMount() {
    this.checkAccess(this.props.auth)
    this.props.getProfile()

    const user = this.props.user

    if (user) {
      this.setFields(user)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.checkAccess(nextProps.auth)
    this.setFields(nextProps.user)
  }

  onSubmit() {
    this.props.updateProfile({
      phone: this.state.phone,
    }, this.props.user.get('id'))
  }

  setFields(data) {
    this.setState({
      phone: data.get('phone')
    })
  }

  isLogged(auth) {
    return 'password' === auth.get('grantType')
  }

  checkAccess(auth) {
    if (!this.isLogged(auth)) {
      this.context.router.push({ pathname: '/login' })
    }
  }

  handleChange(e) {
    this.setState({
      phone: e.target.value
    })
  }

  render() {
    const attrPhone = {
      className: 'phone',
      placeholder: 'Phone',
      id: 'phone',
      name: 'phone'
    }

    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <InputPhone
            attr={attrPhone}
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <Button type="submit" value="Profile" />
        </Form>
      </div>
    )
  }
}

Profile.propTypes = {
  getProfile: React.PropTypes.func,
  updateProfile: React.PropTypes.func,
  user: React.PropTypes.object,
  auth: React.PropTypes.object
}

Profile.contextTypes = {
  router: React.PropTypes.object
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProfile,
    updateProfile
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    user: state.user,
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
