import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import profile from '../../actions/user/profile'
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
    this.props.profile()
  }

  onSubmit() {}

  get(fieldName) {
    const user = this.props.user
    let field = ''

    if (this.state[fieldName]) {
      field = this.state[fieldName]
    } else if (user) {
      field = user[fieldName]
    }

    return field
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
      type: 'text'
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
          <Input attr={attrUsername} value={this.get('username')} handleChange={this.handleChange} /><br />
          <Input attr={attrEmail} value={this.get('email')} handleChange={this.handleChange} />
          <Button type="submit" value="Profile" />
        </Form>
      </div>
    )
  }
}

Profile.propTypes = {
  profile: React.PropTypes.func,
  user: React.PropTypes.shape({
    email: React.PropTypes.string,
    username: React.PropTypes.string
  })
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ profile }, dispatch)
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile)
