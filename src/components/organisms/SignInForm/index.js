import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
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
  Divider,
} from 'components'

const StyledRow = styled(Row)`
  flex-direction: column;
  margin: 0;
`

const StyledDivider = styled(Divider)`
  margin-top: ${theme('spaces.m')};
  margin-bottom: ${theme('spaces.l')};
`

const Form = styled.form`
  width: 100%;
  
  ${breakpointMax('m')`
    padding: 0;
  `}
`

Form.displayName = 'Form'

const StyledLink = styled(Link)`
  display: block;
  width: 110px;
  margin-top: ${theme('spaces.s')};
  font-weight: bold;
  line-height: 1;

  &::after {
    content: ' →';
  }
`

const StyledLinkPopIn = styled(Link)`
  display: block;
  width: 105px;
  margin: 10px auto;
  font-weight: bold;
  line-height: 1;

  &::after {
    content: ' →';
  }
`

const Footer = styled.footer`
  margin-top: ${theme('spaces.s')};
  margin-bottom: ${theme('spaces.xxl')};

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.xxxl')};
  `} 
`

const StyledParagraph = styled(Paragraph)`
  margin: 0;
`

const SignInForm = ({ error, handleSubmit, loading, translate, className, carousel, redirectTo, onSwitch }) => (
  <div>
    {
      carousel &&
      <CarouselPageTemplate
        heading={translate('login.coming_back')}
        description={translate('user.sign_in.introduction')}
      >
        <StyledRow>
          <FacebookLogin />
          <GoogleLogin />
          <StyledDivider or />
          <Form onSubmit={handleSubmit}>
            <AnimatedLabelField
              name="email"
              type="email"
              icon="mail-login"
              label={translate('user.email')}
            />
            <AnimatedLabelField
              name="password"
              type="password"
              icon="pwd-login"
              label={translate('user.password')}
            />
            {error && <FormattedMessage id={error} tagName="strong" />}
            <Link kind="black" to="/forgot-password" highlight>
              <FormattedMessage id="user.forget_password" />
            </Link>
            <Button type="submit" block loading={loading}>
              <FormattedMessage id="user.sign_in" />
            </Button>
          </Form>
        </StyledRow>
        <Footer>
          <StyledParagraph>
            <FormattedMessage id="user.no_account_question" />
          </StyledParagraph>
          <StyledParagraph>
            <StyledLink highlight kind="black" onClick={() => onSwitch ? onSwitch() : redirectTo('/signup')}>
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
            label={translate('user.email')}
          />
          <AnimatedLabelField
            name="password"
            type="password"
            icon="pwd-login"
            label={translate('user.password')}
          />
          {error && <FormattedMessage id={error} tagName="strong" />}
          <Link kind="black" to="/forgot-password" highlight><FormattedMessage id="user.forgot_password.heading" /></Link>
          <Button type="submit" block loading={loading}><FormattedMessage id="user.sign_in" /></Button>
        </Form>
        <div className="footer">
          <FormattedMessage id="user.no_account_question" />
          <StyledLinkPopIn highlight kind="black" onClick={() => onSwitch ? onSwitch() : redirectTo('/signup')}>
            <FormattedMessage id="user.create_account" />
          </StyledLinkPopIn>
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
  translate: PropTypes.func.isRequired,
  redirectTo: PropTypes.func,
  onSwitch: PropTypes.func,
}

export default injectTranslate(SignInForm)
