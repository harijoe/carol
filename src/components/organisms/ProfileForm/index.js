import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { normalize, format } from 'utils/transformPhone'

import messages from 'utils/messages'
import { List, RenderField, Heading, Button, RenderDropzone, RadioGroup, RenderDatePicker } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid #000;
`

class ProfileForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    loading: PropTypes.bool,
    intl: intlShape.isRequired,
    details: PropTypes.shape({
      email: PropTypes.string,
      facebookId: PropTypes.string,
      googleId: PropTypes.string,
    }),
    initialValues: PropTypes.shape({
      country: PropTypes.string,
      imageBase64: PropTypes.string,
    }),
  }

  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      imageBase64: '',
    }
  }

  componentDidMount() {
    this.setImage(this.props.initialValues.imageBase64)
  }

  componentWillReceiveProps(nextProps) {
    this.setImage(nextProps.initialValues.imageBase64)
  }

  setImage(img) {
    this.setState({
      imageBase64: this.state.imageBase64 || img,
    })
  }

  handleChange(e) {
    const target = e.target.name
    const value = e.target.value
    const inputs = ['birthday']

    if (inputs.indexOf(target) !== -1) {
      this.setState({ [target]: value })
    }

    if (target === 'imageBase64') {
      this.setState({ imageBase64: e.target.src })
    }
  }

  render() {
    const { initialValues, handleSubmit, loading, intl, details } = this.props
    const formatMessage = intl.formatMessage

    return (
      <Form onSubmit={handleSubmit}>
        <Heading level={2}><FormattedMessage id="user.profile_info" tagName="p" /></Heading>
        <FormattedMessage id="user.contact_info" tagName="p" />
        <p><FormattedMessage id="user.email" />: {details.email}</p>
        <FormattedMessage id="user.social_network" tagName="p" />
        <List>
          <li>Facebook Id : {details.facebookId}</li>
          <li>Google Id : {details.googleId}</li>
        </List>
        <Field
          preview={{
            initialValue: this.state.imageBase64,
            width: 300,
          }}
          id="imageBase64"
          name="imageBase64"
          accept="image/png, image/jpeg, image/jpg"
          component={RenderDropzone}
        />
        <div>
          <strong><FormattedMessage id="user.gender" tagName="div" /></strong>
          <Field
            component={RadioGroup}
            name="gender" required
            options={[
              { value: 'Mr', id: 'mr', translation: 'user.mr' },
              { value: 'Mrs', id: 'mrs', translation: 'user.mrs' },
            ]}
          />
        </div>
        <Field
          name="firstName"
          component={RenderField}
          label={formatMessage(messages('user.first_name').label)}
          placeholder={formatMessage(messages('user.first_name').label)}
        />
        <Field
          name="lastName"
          component={RenderField}
          label={formatMessage(messages('user.last_name').label)}
          placeholder={formatMessage(messages('user.last_name').label)}
        />
        <Field
          name="birthday"
          placeholder={formatMessage(messages('user.birthday').label)}
          dateFormat="DD/MM/YYYY"
          lang={initialValues.country}
          component={RenderDatePicker}
          label={formatMessage(messages('user.birthday').label)}
        />
        <Field
          name="preferedLanguage"
          component={RenderField}
          label={formatMessage(messages('user.prefered_language').label)}
          placeholder={formatMessage(messages('user.prefered_language').label)}
        />
        <Field
          name="mobilePhone"
          component={RenderField}
          label={formatMessage(messages('user.mobile_phone').label)}
          placeholder={formatMessage(messages('user.mobile_phone').label)}
          {...{ format, normalize }}
        />
        <Field
          name="fixedPhone"
          component={RenderField}
          label={formatMessage(messages('user.fixed_phone').label)}
          placeholder={formatMessage(messages('user.fixed_phone').label)}
        />
        <Field
          name="address"
          component={RenderField}
          label={formatMessage(messages('user.address').label)}
          placeholder={formatMessage(messages('user.address').label)}
        />
        <Field
          name="postalCode"
          component={RenderField}
          label={formatMessage(messages('user.postal_code').label)}
          placeholder={formatMessage(messages('user.postal_code').label)}
        />
        <Field
          name="countryCode"
          component={RenderField}
          label={formatMessage(messages('user.country_code').label)}
          placeholder={formatMessage(messages('user.country_code').label)}
        />
        <Field
          name="region"
          component={RenderField}
          label={formatMessage(messages('user.region').label)}
          placeholder={formatMessage(messages('user.region').label)}
        />
        <Field
          name="city"
          component={RenderField}
          label={formatMessage(messages('user.city').label)}
          placeholder={formatMessage(messages('user.city').label)}
        />
        <Field
          name="newsletterSubscription"
          type="checkbox"
          component={RenderField}
          label={formatMessage(messages('user.newsletter_subscription').label)}
          placeholder={formatMessage(messages('user.newsletter_subscription').label)}
        />
        <Button type="submit" loading={loading}>
          <FormattedMessage id="user.update" />
        </Button>
      </Form>
    )
  }
}

export default injectIntl(ProfileForm)
