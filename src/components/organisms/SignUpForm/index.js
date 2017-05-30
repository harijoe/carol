import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { theme, breakpointMax, breakpoint } from 'utils/style'

import {
  RenderField,
  Button,
  FacebookLogin,
  GoogleLogin,
  CarouselPageTemplate,
  AnimatedLabelField,
  Row,
  Col,
} from 'components'
import messages from 'utils/messages'

const StyledRow = styled(Row)`
  ${breakpoint('m')`
    flex-wrap: nowrap;
    padding-right: ${theme('spaces.xl')};
  `}
`

const LeftColumn = styled(Col)`
  border-right: 1px solid ${theme('colors.grayscale.light')};
  
  ${breakpointMax('m')`
    width: 100%;
    border-right: none;
  `}
`

const RightColumn = styled(Col)`
  width: 100%;
  
  ${breakpointMax('m')`
    border-top: 1px solid ${theme('colors.grayscale.light')};
    padding-top: ${theme('spaces.l')};
    margin: ${theme('spaces.l')} 0;
  `}
`

const Form = styled.form`
  width: 100%;

  ${breakpointMax('m')`
    padding: 0;
  `}

  div[type="checkbox"] label {
    width: 90%;
  }

  strong {
    color: ${theme('colors.danger')};
  }
`

const StyledButton = styled(Button)`
  margin-top: 15px;
`

class SignUpForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    intl: intlShape.isRequired,
  }

  state = {
    passwordInputType: 'password',
    passwordIcon: 'eye',
  }

  togglePassword = () => {
    this.setState({
      passwordInputType: this.state.passwordInputType === 'password' ? 'text' : 'password',
      passwordIcon: this.state.passwordIcon === 'eye' ? 'opened-eye' : 'eye',
    })
  }

  render() {
    const { handleSubmit, loading, intl: { formatMessage } } = this.props

    return (
      <CarouselPageTemplate
        heading={formatMessage(messages('user.sign_up.heading').label)}
        description={formatMessage(messages('user.sign_up.description').label)}
      >
        <StyledRow>
          <LeftColumn m={6} s={12}>
            <Form onSubmit={handleSubmit}>
              <AnimatedLabelField
                name="email"
                type="email"
                icon="mail-login"
                label={formatMessage(messages('user.email').label)}
              />
              <AnimatedLabelField
                name="password"
                type={this.state.passwordInputType}
                icon={this.state.passwordIcon}
                label={formatMessage(messages('user.password').label)}
                onIconClick={this.togglePassword}
              />
              <Field
                name="newsletterSubscription"
                type="checkbox"
                label={formatMessage(messages('user.newsletter_subscription').label)}
                hideBorder
                lightFont
                inline
                component={RenderField}
              />
              <StyledButton type="submit" loading={loading}>
                <FormattedMessage id="user.sign_up" />
              </StyledButton>
            </Form>
          </LeftColumn>
          <RightColumn m={6} s={12}>
            <FacebookLogin />
            <GoogleLogin />
          </RightColumn>
        </StyledRow>
      </CarouselPageTemplate>
    )
  }
}

export default injectIntl(SignUpForm)
