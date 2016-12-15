import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { getProfile, updateProfile } from './ducks'
import InputText from '../../../ui/form/input/Text'
import InputRadio from '../../../ui/form/input/Radio'
import InputPhone from '../../../ui/form/input/Phone'
import InputPostal from '../../../ui/form/input/Postal'
import Form from '../../../ui/form/Form'
import Button from '../../../ui/form/input/Button'
import FormatError from '../../../ui/Errors'
import InputFileImage from '../../../ui/form/input/File/Image'
import InputCheckbox from '../../../ui/form/input/Checkbox'
import DatePicker from '../../../ui/DatePicker'

class Profile extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      id: null,
      facebookId: '',
      googleId: '',
      gender: '',
      firstName: '',
      lastName: '',
      address: '',
      postalCode: '',
      city: '',
      region: '',
      countryCode: '',
      mobilePhone: '',
      fixedPhone: '',
      birthday: '',
      imageBase64: '',
      preferedLanguage: '',
      newsletterSubscription: false,
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
    if (this.state.birthday) {
      const splitDate = this.state.birthday.split('/')

      this.setState({
        birthday: `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
      })
    }

    const data = {
      facebookId: this.state.facebookId,
      googleId: this.state.googleId,
      gender: this.state.gender,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      postalCode: this.state.postalCode,
      city: this.state.city,
      region: this.state.region,
      countryCode: this.state.countryCode,
      mobilePhone: this.state.mobilePhone,
      fixedPhone: this.state.fixedPhone,
      birthday: this.state.birthday,
      imageBase64: this.state.imageBase64,
      preferedLanguage: this.state.preferedLanguage,
      newsletterSubscription: this.state.newsletterSubscription
    }

    if (this.props.user.get('imageUrl') === data.imageBase64) {
      delete data.imageBase64
    }

    this.props.updateProfile(data, this.props.user.get('id'))
  }

  setFields(data) {
    this.setState({
      facebookId: data.get('facebookId'),
      googleId: data.get('googleId'),
      gender: data.get('gender'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      address: data.get('address'),
      postalCode: data.get('postalCode'),
      city: data.get('city'),
      region: data.get('region'),
      countryCode: data.get('countryCode'),
      mobilePhone: data.get('mobilePhone'),
      fixedPhone: data.get('fixedPhone'),
      birthday: data.get('birthday'),
      imageBase64: data.get('imageUrl'),
      preferedLanguage: data.get('preferedLanguage'),
      newsletterSubscription: data.get('newsletterSubscription')
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
      case 'postalCode':
        this.setState({
          postalCode: e.target.value
        })

        break
      case 'imageBase64':
        this.setState({
          imageBase64: e.target.src
        })

        break
      case 'newsletterSubscription':
        this.setState({
          newsletterSubscription: e.target.checked
        })

        break
      case 'preferedLanguage':
        this.setState({
          preferedLanguage: e.target.value
        })

        break
      case 'countryCode':
        this.setState({
          countryCode: e.target.value
        })

        break
      case 'region':
        this.setState({
          region: e.target.value
        })

        break
      case 'city':
        this.setState({
          city: e.target.value
        })

        break
      case 'birthday':
        this.setState({
          birthday: e.target.value
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
      className: 'postalCode',
      id: 'postalCode',
      placeholder: 'user.postal_code',
      name: 'postalCode',
      required: 'required'
    }
    const attrImage = {
      className: 'imageBase64',
      placeholder: 'Photo',
      id: 'imageBase64',
      name: 'imageBase64'
    }

    const attrPreview = {
      className: 'imagePreview',
      id: 'imagePreview',
      name: 'imagePreview',
      height: '100',
      alt: 'image review',
      src: this.state.imageBase64
    }

    const attrPreferedLanguage = {
      className: 'preferedLanguage',
      id: 'preferedLanguage',
      placeholder: 'user.prefered_language',
      name: 'preferedLanguage'
    }

    const attrCountry = {
      className: 'countryCode',
      id: 'countryCode',
      placeholder: 'user.country_code',
      name: 'countryCode',
      required: 'required'
    }

    const attrRegion = {
      className: 'region',
      id: 'region',
      placeholder: 'user.region',
      name: 'region'
    }

    const attrCity = {
      className: 'city',
      id: 'city',
      placeholder: 'user.city',
      name: 'city',
      required: 'required'
    }

    const attrNewsletterSubscription = {
      className: 'newsletterSubscription',
      id: 'newsletterSubscription',
      placeholder: 'user.newsletter_subscription',
      name: 'newsletterSubscription'
    }

    const attrBirthday = {
      className: 'birthday',
      placeholder: 'user.birthday',
      id: 'birthday',
      name: 'birthday'
    }

    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <div className="error">
            <FormatError errors={this.props.user.get('errors')} />
          </div>
          <FormattedMessage id="user.profile_info" tagName="p" />
          <div className="form-group">
            <InputFileImage
              attr={attrImage}
              attrPreview={attrPreview}
              preview
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <FormattedMessage id="user.gender" />: <InputRadio
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
            <FormattedMessage id="user.first_name" />: <InputText
              attr={attrFirstName}
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <FormattedMessage id="user.last_name" />: <InputText
              attr={attrLastName}
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <FormattedMessage id="user.birthday" />: <DatePicker
              attr={attrBirthday}
              value={this.state.birthday}
              dateFormat="DD/MM/YYYY"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <FormattedMessage id="user.prefered_language" />: <InputText
              attr={attrPreferedLanguage}
              value={this.state.preferedLanguage}
              onChange={this.handleChange}
            />
          </div>
          <FormattedMessage id="user.contact_info" tagName="p" />
          <div className="form-group">
            <FormattedMessage id="user.mobile_phone" />: <InputPhone
              attr={attrMobilePhone}
              value={this.state.mobilePhone}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <FormattedMessage id="user.fixed_phone" />: <InputPhone
              attr={attrFixedPhone}
              value={this.state.fixedPhone}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <FormattedMessage id="user.address" />: <InputText
              attr={attrAddress}
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <FormattedMessage id="user.postal_code" />: <InputPostal
              attr={attrZipCode}
              value={this.state.postalCode}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <FormattedMessage id="user.country_code" />: <InputText
              attr={attrCountry}
              value={this.state.countryCode}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <FormattedMessage id="user.region" />: <InputText
              attr={attrRegion}
              value={this.state.region}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <FormattedMessage id="user.city" />: <InputText
              attr={attrCity}
              value={this.state.city}
              onChange={this.handleChange}
            />
          </div>
          <FormattedMessage id="user.social_network" tagName="p" />
          <ul>
            <li>Facebook Id : {this.state.facebookId}</li>
            <li>Google Id : {this.state.googleId}</li>
          </ul>
          <div className="form-group">
            <InputCheckbox
              attr={attrNewsletterSubscription}
              text="user.newsletter_subscription"
              value={this.state.newsletterSubscription}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <Button type="submit" value="user.update" name="profile" />
          </div>
        </Form>
      </div>
    )
  }
}

Profile.propTypes = {
  getProfile: React.PropTypes.func,
  updateProfile: React.PropTypes.func,
  user: React.PropTypes.object,
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, { getProfile, updateProfile })(Profile)
