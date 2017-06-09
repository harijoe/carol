import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { theme, breakpointMax, breakpoint } from 'utils/style'
import pushGtmEvent from 'utils/gtm'

import {
  RenderField,
  Button,
  FacebookLogin,
  GoogleLogin,
  CarouselPageTemplate,
  AnimatedLabelField,
  Row,
  Col,
  Paragraph,
  Link,
} from 'components'
import messages from 'utils/messages'

const StyledRow = styled(Row)`
  ${breakpoint('m')`
    flex-wrap: nowrap;
  `}
`

const LeftColumn = styled(Col)`
  ${breakpointMax('m')`
    order: 2;
    width: 100%;
    border-top: 1px solid ${theme('colors.grayscale.light')};
    padding: 0;
  `}

  ${breakpoint('m')`
    border-right: 1px solid ${theme('colors.grayscale.light')};
  `}
`

const RightColumn = styled(Col)`
  ${breakpointMax('m')`
    order: 1;
    width: 100%;
    padding: 0;
    padding-bottom: ${theme('spaces.l')};
  `}

  > div:first-child {
    margin-bottom:  ${theme('spaces.m')}; 
  }
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

const Footer = styled.footer`
  margin-top: auto;
  padding: ${theme('spaces.xl')};
  border-top: 1px solid ${theme('colors.grayscale.light')};
  background-color: ${theme('colors.grayscale.lightest')};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  ${breakpointMax('m')`
    margin-left: -${theme('spaces.m')};
    margin-right: -${theme('spaces.m')};
    padding: ${theme('spaces.m')};
  `}

  ${breakpoint('m')`
    margin-left: -${theme('spaces.l')};
    margin-right: -${theme('spaces.l')};
  `}

  ${breakpoint('l')`
    margin-left: -${theme('spaces.xxl')};
    margin-right: -${theme('spaces.xxl')};
  `}
`

const StyledParagraph = styled(Paragraph)`
  margin: 0;
`

const StyledLink = styled(Link)`
  display: block;
  width: 80px;
  margin: 10px auto;
  font-weight: bold;
  line-height: 1;
`

class SignUpForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    redirectTo: PropTypes.func,
    loading: PropTypes.bool,
    intl: intlShape.isRequired,
  }

  state = {
    passwordInputType: 'password',
    passwordIcon: 'eye',
  }

  componentDidMount() {
    pushGtmEvent({ event: 'AccountCreation' })
  }

  togglePassword = () => {
    this.setState({
      passwordInputType: this.state.passwordInputType === 'password' ? 'text' : 'password',
      passwordIcon: this.state.passwordIcon === 'eye' ? 'opened-eye' : 'eye',
    })
  }

  render() {
    const { handleSubmit, loading, redirectTo, intl: { formatMessage } } = this.props

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
        <Footer>
          <StyledParagraph>
            <FormattedMessage id="user.account_question" />
          </StyledParagraph>
          <StyledParagraph>
            <StyledLink highlight kind="black" onClick={() => redirectTo('/login')}>
              <FormattedMessage id="user.sign_in" />
            </StyledLink>
          </StyledParagraph>
        </Footer>
      </CarouselPageTemplate>
    )
  }
}

export default injectIntl(SignUpForm)
