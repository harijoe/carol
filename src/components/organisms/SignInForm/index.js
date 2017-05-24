import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import messages from 'utils/messages'
import { theme, breakpointMax } from 'utils/style'

import {
  CarouselPageTemplate,
  AnimatedLabelField,
  Heading,
  Button,
  Link,
  FacebookLogin,
  GoogleLogin,
  Paragraph,
  Row,
  Col,
} from 'components'

const StyledRow = styled(Row)`
  padding-right: 20px;
`

const LeftColumn = styled(Col)`
  border-right: 1px solid ${theme('colors.grayscale.light')};
  
  ${breakpointMax('m')`
    width: 100%;
    border-right: none;
  `}
`

const RightColumn = styled(Col)`
  ${breakpointMax('m')`
    width: 100%;
    border-top: 1px solid ${theme('colors.grayscale.light')};
    padding-top: ${theme('spaces.l')};
    margin: ${theme('spaces.l')} 0;
  `}
`

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  
  ${breakpointMax('m')`
    padding: 0;
  `}

  strong {
    color: ${theme('colors.danger')};
  }
`

Form.displayName = 'Form'

const StyledLink = styled(Link)`
  display: block;
  width: 80px;
  margin: 10px auto;
  font-weight: bold;
  line-height: 1;
`

const Footer = styled(Row)`
  width: 99%;
  margin-top: ${theme('spaces.xxl')};
  padding: ${theme('spaces.xl')};
  border-top: 1px solid ${theme('colors.grayscale.light')};
  background-color: ${theme('colors.grayscale.lightest')};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  ${breakpointMax('m')`
    padding: ${theme('spaces.m')};
  `}
`

const StyledParagraph = styled(Paragraph)`
  margin: 0;
`

const SignInForm = ({ error, handleSubmit, loading, intl: { formatMessage }, className, carousel, redirectTo }) => (
  <div>
    {
      carousel &&
      <CarouselPageTemplate
        heading={formatMessage(messages('login.coming_back').label)}
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
                type="password"
                icon="pwd-login"
                label={formatMessage(messages('user.password').label)}
              />
              {error && <FormattedMessage id={error} tagName="strong" />}
              <Link kind="black" to="/forgot-password">
                <FormattedMessage id="user.forget_password" />
              </Link>
              <Button type="submit" block loading={loading}>
                <FormattedMessage id="user.sign_in" />
              </Button>
            </Form>
          </LeftColumn>
          <RightColumn m={6} s={12}>
            <FacebookLogin />
            <GoogleLogin />
          </RightColumn>
        </StyledRow>
        <Footer>
          <StyledParagraph>
            <FormattedMessage id="user.no_account_question" />
          </StyledParagraph>
          <StyledParagraph>
            <StyledLink highlight kind="black" onClick={() => redirectTo('/signup')}>
              <FormattedMessage id="user.create_account" />
            </StyledLink>
          </StyledParagraph>
        </Footer>
      </CarouselPageTemplate>
    }
    {
      !carousel &&
      <div className={className}>
        <Heading level={2}><FormattedMessage id="login.coming_back" /></Heading>
        <FacebookLogin />
        <GoogleLogin />
        <Form onSubmit={handleSubmit}>
          {error && <FormattedMessage id={error} tagName="strong" />}
          <AnimatedLabelField
            name="email"
            type="email"
            icon="mail-login"
            label={formatMessage(messages('user.email').label)}
          />
          <AnimatedLabelField
            name="password"
            type="password"
            icon="pwd-login"
            label={formatMessage(messages('user.password').label)}
          />
          <Link kind="black" to="/forgot-password"><FormattedMessage id="user.forgot_password.heading" /></Link>
          <Button type="submit" block loading={loading}><FormattedMessage id="user.sign_in" /></Button>
        </Form>
        <div className="footer">
          <FormattedMessage id="user.no_account_question" />
          <StyledLink highlight kind="black" onClick={() => redirectTo('/signup')}>
            <FormattedMessage id="user.create_account" />
          </StyledLink>
        </div>
      </div>
    }
  </div>
)

SignInForm.propTypes = {
  handleSubmit: PropTypes.func,
  className: PropTypes.string,
  carousel: PropTypes.bool,
  error: PropTypes.string,
  loading: PropTypes.bool,
  intl: intlShape.isRequired,
  redirectTo: PropTypes.func,
}

export default injectIntl(SignInForm)
