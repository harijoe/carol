import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as profileActions from '../../actions/user/profile'
import Input from '../../components/form/Input'
import Form from '../../components/form/Form'
import Button from '../../components/form/Button'

class Profile extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      email: '',
      username: ''
    }
  }

  componentWillMount() {
    if (!this.props.auth || 'password' !== this.props.auth.grantType) {
      this.context.router.push({ pathname: '/login' })
    }

    this.props.getProfile()

    const user = this.props.user

    if (user) {
      this.setFields(user)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setFields(nextProps.user)
  }

  onSubmit() {
    this.props.updateProfile({
      email: this.state.email,
      username: this.state.username
    }, this.props.user['@id'])
  }

  setFields(data) {
    this.setState({
      email: data.email,
      username: data.username
    })
  }


  handleChange(e) {
    switch (e.target.id) {
      case 'email':
        this.setState({
          email: e.target.value
        })

        break
      case 'username':
        this.setState({
          username: e.target.value
        })

        break
      default:
        return
    }
  }

  render() {
    const attrEmail = {
      className: 'email',
      placeholder: 'Email',
      id: 'email',
      name: 'email',
      type: 'email'
    }
    const attrUsername = {
      className: 'username',
      placeholder: 'Username',
      id: 'username',
      name: 'username',
      type: 'text'
    }

    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Input attr={attrUsername} value={this.state.username} onChange={this.handleChange} /><br />
          <Input attr={attrEmail} value={this.state.email} onChange={this.handleChange} />
          <Button type="submit" value="Profile" />
        </Form>
      </div>
    )
  }
}

Profile.propTypes = {
  getProfile: React.PropTypes.func,
  updateProfile: React.PropTypes.func,
  user: React.PropTypes.shape({
    email: React.PropTypes.string,
    username: React.PropTypes.string,
    '@id': React.PropTypes.string,
  }),
  auth: React.PropTypes.shape({
    grantType: React.PropTypes.string,
  })
}

Profile.contextTypes = {
  router: React.PropTypes.object
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getProfile: profileActions.getProfile,
    updateProfile: profileActions.updateProfile,
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    user: state.user,
    auth: state.auth,
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile)
