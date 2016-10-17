import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as profileActions from '../../actions/user/profile'
import InputPhone from '../../components/form/Input/InputPhone'
import Form from '../../components/form/Form'
import Button from '../../components/form/Button'

class Profile extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      phone: ''
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
      phone: this.state.phone,
    }, this.props.user['@id'])
  }

  setFields(data) {
    this.setState({
      phone: data.phone
    })
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
            checkPattern={false}
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
  user: React.PropTypes.shape({
    phone: React.PropTypes.string,
    '@id': React.PropTypes.string
  }),
  auth: React.PropTypes.shape({
    grantType: React.PropTypes.string
  })
}

Profile.contextTypes = {
  router: React.PropTypes.object
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProfile: profileActions.getProfile,
    updateProfile: profileActions.updateProfile
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    user: state.user,
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
