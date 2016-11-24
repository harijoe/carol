import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProfile, updateProfile } from './ducks'
import InputText from '../../../ui/form/input/Text'
import InputRadio from '../../../ui/form/input/Radio'
import InputPhone from '../../../ui/form/input/Phone'
import InputPostal from '../../../ui/form/input/Postal'
import Form from '../../../ui/form/Form'
import Button from '../../../ui/form/input/Button'
import FormatError from '../../../ui/Errors'

class Profile extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      gender: '',
      firstName: '',
      lastName: '',
      mobilePhone: '',
      fixedPhone: '',
      address: '',
      zipCode: ''
    }
  }

  componentWillMount() {
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
      gender: this.state.gender,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mobilePhone: this.state.mobilePhone,
      fixedPhone: this.state.fixedPhone,
      address: this.state.address,
      zipCode: this.state.zipCode,
    }, this.props.user.get('id'))
  }

  setFields(data) {
    this.setState({
      gender: data.get('gender'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      mobilePhone: data.get('mobilePhone'),
      fixedPhone: data.get('fixedPhone'),
      address: data.get('address'),
      zipCode: data.get('zipCode')
    })
  }

  handleChange(e) {
    switch (e.target.name) {
      case 'gender':
        this.setState({
          gender: e.target.value
        })

        break
      case 'firstName':
        this.setState({
          firstName: e.target.value
        })

        break
      case 'lastName':
        this.setState({
          lastName: e.target.value
        })

        break
      case 'mobilePhone':
        this.setState({
          mobilePhone: e.target.value
        })

        break
      case 'fixedPhone':
        this.setState({
          fixedPhone: e.target.value
        })

        break
      case 'address':
        this.setState({
          address: e.target.value
        })

        break
      case 'zipCode':
        this.setState({
          zipCode: e.target.value
        })

        break
      default:
        return
    }
  }

  render() {
    const attrGender1 = {
      className: 'gender',
      id: 'gender1',
      name: 'gender',
      required: 'required'
    }

    const attrGender2 = {
      className: 'gender',
      id: 'gender2',
      name: 'gender',
      required: 'required'
    }

    const attrFirstName = {
      className: 'firstName',
      id: 'firstName',
      placeholder: 'user.first_name',
      name: 'firstName',
      required: 'required'
    }

    const attrLastName = {
      className: 'lastName',
      id: 'lastName',
      placeholder: 'user.last_name',
      name: 'lastName',
      required: 'required'
    }

    const attrMobilePhone = {
      className: 'mobilePhone',
      id: 'mobilePhone',
      placeholder: 'user.mobile_phone',
      name: 'mobilePhone',
      required: 'required'
    }

    const attrFixedPhone = {
      className: 'fixedPhone',
      id: 'fixedPhone',
      placeholder: 'user.fixed_phone',
      name: 'fixedPhone'
    }

    const attrAddress = {
      className: 'address',
      id: 'address',
      placeholder: 'user.address',
      name: 'address'
    }

    const attrZipCode = {
      className: 'zipCode',
      id: 'zipCode',
      placeholder: 'user.zip_code',
      name: 'zipCode',
      required: 'required'
    }

    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <div className="error">
            <FormatError errors={this.props.user.get('errors')} />
          </div>
          <div className="form-group">
            <InputRadio
              attr={attrGender1}
              value="Mr"
              text="user.mr"
              checked={'Mr' === this.state.gender}
              onChange={this.handleChange}
            />
            <InputRadio
              attr={attrGender2}
              value="Mrs"
              text="user.mrs"
              checked={'Mrs' === this.state.gender}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <InputText
              attr={attrFirstName}
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <InputText
              attr={attrLastName}
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <InputPhone
              attr={attrMobilePhone}
              value={this.state.mobilePhone}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <InputPhone
              attr={attrFixedPhone}
              value={this.state.fixedPhone}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <InputText
              attr={attrAddress}
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <InputPostal
              attr={attrZipCode}
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <Button type="submit" value="user.update" />
          </div>
        </Form>
      </div>
    )
  }
}

Profile.propTypes = {
  getProfile: React.PropTypes.func,
  updateProfile: React.PropTypes.func,
  user: React.PropTypes.object
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
