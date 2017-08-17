import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpointMax, breakpoint } from 'utils/style'

import { CarouselPageTemplate, AnimatedLabelField, Heading, Button, Link, FacebookLogin, GoogleLogin, Row, Divider } from 'components'

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
  `} strong {
    display: block;
    font-weight: normal;
    color: ${theme('colors.danger')};
  }
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

const Wrapper = styled.div`
  ${breakpointMax('xl')`
    margin-top: ${theme('spaces.xl')};
  `};
`

const StyledButton = styled(Button)`
  ${breakpointMax('m')`
    margin-bottom: ${theme('spaces.m')};
  `}
`

const Footer = styled.footer`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${theme('spaces.l')};
  border-top: 1px solid ${theme('colors.grayscale.light')};
  background-color: ${theme('colors.grayscale.lightest')};

  ${breakpointMax('m')`
    position: absolute;
    bottom: 0;
    width: 100vw;
    margin-left: -${theme('spaces.m')};
    margin-right: -${theme('spaces.m')};
  `} ${breakpoint('m')`
    margin-left: -${theme('spaces.l')};
    margin-right: -${theme('spaces.l')};
    margin-bottom: -${theme('spaces.l')};
  `} ${breakpoint('xl')`
    margin-left: -${theme('spaces.xxl')};
    margin-right: -${theme('spaces.xxl')};
    margin-bottom: -${theme('spaces.xxl')};
  `};
`

const SignInForm = ({ error, handleSubmit, loading, translate, className, carousel, redirectTo, onSwitch }) =>
  <div>
    {carousel &&
      <CarouselPageTemplate heading={translate('login.coming_back')} description={translate('user.sign_in.introduction')}>
        <StyledRow>
          <FacebookLogin />
          <GoogleLogin />
          <StyledDivider or />
          <Form onSubmit={handleSubmit}>
            <AnimatedLabelField name="email" type="email" icon="mail-login" label={translate('user.email')} />
            <AnimatedLabelField name="password" type="password" icon="pwd-login" label={translate('user.password')} />
            {error && <FormattedMessage id={error} tagName="strong" />}
            <Link kind="black" to="/forgot-password" highlight>
              <FormattedMessage id="user.forget_password" />
            </Link>
            <Button type="submit" block loading={loading}>
              <FormattedMessage id="user.sign_in" />
            </Button>
          </Form>
        </StyledRow>
        <div className="footer">
          <div>
            <FormattedMessage id="user.no_account_question" />
          </div>
          <div>
            <StyledLink highlight kind="black" onClick={() => (onSwitch ? onSwitch() : redirectTo('/signup'))}>
              <FormattedMessage id="user.create_account" />
            </StyledLink>
          </div>
        </div>
      </CarouselPageTemplate>}
    {!carousel &&
      <Wrapper className={className}>
        <Heading level={2}>
          <FormattedMessage id="login.coming_back" />
        </Heading>
        <FacebookLogin />
        <GoogleLogin />
        <br />
        <Form onSubmit={handleSubmit}>
          <AnimatedLabelField name="email" type="email" icon="mail-login" label={translate('user.email')} />
          <AnimatedLabelField name="password" type="password" icon="pwd-login" label={translate('user.password')} />
          {error && <FormattedMessage id={error} tagName="strong" />}
          <Link kind="black" to="/forgot-password" highlight>
            <FormattedMessage id="user.forgot_password.heading" />
          </Link>
          <StyledButton type="submit" block loading={loading}>
            <FormattedMessage id="user.sign_in" />
          </StyledButton>
        </Form>
        <Footer>
          <FormattedMessage id="user.no_account_question" />
          <StyledLinkPopIn highlight kind="black" onClick={() => (onSwitch ? onSwitch() : redirectTo('/signup'))}>
            <FormattedMessage id="user.create_account" />
          </StyledLinkPopIn>
        </Footer>
      </Wrapper>}
  </div>

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
