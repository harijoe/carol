import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpointMax, breakpoint } from 'utils/style'

import CarouselPageTemplate from 'templates/CarouselPageTemplate'
import AnimatedLabelField from 'components/AnimatedLabelField'
import AnimatedPasswordField from 'components/AnimatedPasswordField'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Link from 'components/Link'
import FacebookLogin from 'components/FacebookLogin'
import GoogleLogin from 'components/GoogleLogin'
import Row from 'components/Row'
import Divider from 'components/Divider'

const StyledRow = styled(Row)`
  flex-direction: column;
  margin: 0;
  margin-bottom: ${theme('spaces.m')};
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

const StyledLinkPopIn = styled(Link)`
  display: inline-block;
  margin: 10px auto;
  font-weight: bold;
  line-height: 1;

  &::after {
    content: ' →';
  }
`

const Container = styled.div`
  ${breakpointMax('m')`
    height: calc(100% - ${theme('spaces.m')});
  `};
`

const Wrapper = styled.div`
  ${breakpointMax('xl')`
    margin-top: ${theme('spaces.xl')};
  `};
  ${breakpointMax('m')`
    margin-bottom: ${theme('spaces.xxl')};
  `};
`

const StyledButton = styled(Button)`
  ${breakpointMax('m')`
    margin-bottom: ${theme('spaces.m')};
  `}
`

const Footer = styled.footer`
  text-align: center;
  padding: ${theme('spaces.l')};
  border-top: 1px solid ${theme('colors.grayscale.light')};
  background-color: ${theme('colors.grayscale.lightest')};

  > span:first-child {
    display: block;
  }

  ${breakpointMax('m')`
    width: 100vw;
    margin-top: auto;
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
  <Container>
    {carousel &&
      <CarouselPageTemplate heading={translate('login.coming_back')} description={translate('user.sign_in.introduction')}>
        <StyledRow>
          <FacebookLogin />
          <GoogleLogin />
          <StyledDivider or />
          <Form onSubmit={handleSubmit}>
            <AnimatedLabelField name="email" type="email" icon="mail-login" label={translate('user.email')} />
            <AnimatedPasswordField name="password" label={translate('user.password')} />
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
            <StyledLinkPopIn highlight kind="black" onClick={() => (onSwitch ? onSwitch() : redirectTo('/signup'))}>
              <FormattedMessage id="user.create_account" />
            </StyledLinkPopIn>
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
        <StyledDivider or />
        <Form onSubmit={handleSubmit}>
          <AnimatedLabelField name="email" type="email" icon="mail-login" label={translate('user.email')} />
          <AnimatedPasswordField name="password" label={translate('user.password')} />
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
  </Container>

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
