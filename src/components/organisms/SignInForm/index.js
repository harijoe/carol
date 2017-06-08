import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import messages from 'utils/messages'
import { theme, breakpointMax, breakpoint } from 'utils/style'

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

  strong {
    display: block;
    margin-bottom: ${theme('spaces.s')};
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

const SignInForm = ({ error, handleSubmit, loading, intl: { formatMessage }, className, carousel, redirectTo }) => (
  <div>
    {
      carousel &&
      <CarouselPageTemplate
        heading={formatMessage(messages('login.coming_back').label)}
        description={formatMessage(messages('user.sign_in.introduction').label)}
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
              <Link kind="black" to="/forgot-password" highlight>
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
        <br />
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
          <Link kind="black" to="/forgot-password" highlight><FormattedMessage id="user.forgot_password.heading" /></Link>
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
