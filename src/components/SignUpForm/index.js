import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpointMax, breakpoint } from 'utils/style'

import RenderField from 'components/RenderField'
import Button from 'components/Button'
import FacebookLogin from 'components/FacebookLogin'
import GoogleLogin from 'components/GoogleLogin'
import CarouselPageTemplate from 'templates/CarouselPageTemplate'
import AnimatedLabelField from 'components/AnimatedLabelField'
import AnimatedPasswordField from 'components/AnimatedPasswordField'
import Row from 'components/Row'
import Paragraph from 'components/Paragraph'
import Link from 'components/Link'
import Divider from 'components/Divider'
import Heading from 'components/Heading'

import GenderBlock from 'containers/GenderBlock'

const StyledRow = styled(Row)`
  flex-flow: column nowrap;
  margin: auto;
  width: 100%;
`

const StyledDivider = styled(Divider)`
  margin-top: ${theme('spaces.m')};
  margin-bottom: ${theme('spaces.l')};
`

const Form = styled.form`
  width: 100%;

  ${breakpointMax('m')`
    padding: 0;
  `} div[type="checkbox"] label {
    width: calc(100% - 19px);
  }
`

const StyledButton = styled(Button)`
  margin-top: 15px;
`

const UseConditions = styled(Paragraph)`
  font-size: ${theme('fonts.size.s')};
  margin-bottom: ${theme('spaces.l')};
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
    margin-left: -${theme('spaces.m')};
    margin-right: -${theme('spaces.m')};
    margin-bottom: -${theme('spaces.m')};
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

const StyledParagraph = styled(Paragraph)`
  margin-bottom: ${theme('spaces.l')};
`

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
  display: inline-block;
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

class SignUpForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    redirectTo: PropTypes.func,
    loading: PropTypes.bool,
    onSwitch: PropTypes.func,
    translate: PropTypes.func.isRequired,
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
    const { handleSubmit, loading, redirectTo, translate, className, carousel, onSwitch } = this.props

    return (
      <div>
        {carousel &&
          <CarouselPageTemplate heading={translate('user.sign_up.heading')} description={translate('user.sign_up.description')}>
            <StyledRow>
              <FacebookLogin />
              <GoogleLogin />
              <StyledDivider or />
              <Form onSubmit={handleSubmit}>
                <GenderBlock />
                <AnimatedLabelField
                  name="firstName"
                  component={RenderField}
                  label={translate('user.first_name')}
                  placeholder={translate('user.first_name')}
                  icon="login"
                />
                <AnimatedLabelField
                  name="lastName"
                  component={RenderField}
                  label={translate('user.last_name')}
                  placeholder={translate('user.last_name')}
                  icon="login"
                />
                <AnimatedLabelField name="email" type="email" icon="mail-login" label={translate('user.email')} />
                <AnimatedPasswordField name="password" label={translate('user.password')} />
                <Field
                  name="newsletterSubscription"
                  type="checkbox"
                  label={translate('user.newsletter_subscription')}
                  lightFont
                  inline
                  component={RenderField}
                />
                <StyledButton type="submit" loading={loading}>
                  <FormattedMessage id="user.sign_up" />
                </StyledButton>
                <UseConditions>
                  <FormattedMessage id="user.conditions_of_use" />
                </UseConditions>
              </Form>
              <div className="footer">
                <div>
                  <FormattedMessage id="user.account_question" />
                </div>
                <div>
                  <StyledLink highlight kind="black" onClick={() => (onSwitch ? onSwitch() : redirectTo('/login'))}>
                    <FormattedMessage id="user.sign_in" />
                  </StyledLink>
                </div>
              </div>
            </StyledRow>
          </CarouselPageTemplate>}
        {!carousel &&
          <Wrapper className={className}>
            <Heading level={2}>
              <FormattedMessage id="user.sign_up.heading" />
            </Heading>
            <StyledParagraph>
              <FormattedMessage id="user.sign_up.description" />
            </StyledParagraph>
            <FacebookLogin />
            <GoogleLogin />
            <StyledDivider or />
            <Form onSubmit={handleSubmit}>
              <GenderBlock />
              <AnimatedLabelField
                name="firstName"
                component={RenderField}
                label={translate('user.first_name')}
                placeholder={translate('user.first_name')}
                icon="login"
              />
              <AnimatedLabelField
                name="lastName"
                component={RenderField}
                label={translate('user.last_name')}
                placeholder={translate('user.last_name')}
                icon="login"
              />
              <AnimatedLabelField name="email" type="email" icon="mail-login" label={translate('user.email')} />
              <AnimatedLabelField
                name="password"
                type={this.state.passwordInputType}
                icon={this.state.passwordIcon}
                label={translate('user.password')}
                onIconClick={this.togglePassword}
              />
              <Field
                name="newsletterSubscription"
                type="checkbox"
                label={translate('user.newsletter_subscription')}
                lightFont
                inline
                component={RenderField}
              />
              <StyledButton type="submit" loading={loading}>
                <FormattedMessage id="user.sign_up" />
              </StyledButton>
              <UseConditions>
                <FormattedMessage id="user.conditions_of_use" />
              </UseConditions>
            </Form>
            <Footer>
              <FormattedMessage id="user.account_question" />
              <StyledLinkPopIn highlight kind="black" onClick={() => (onSwitch ? onSwitch() : redirectTo('/login'))}>
                <FormattedMessage id="user.sign_in" />
              </StyledLinkPopIn>
            </Footer>
          </Wrapper>}
      </div>
    )
  }
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func,
  className: PropTypes.string,
  carousel: PropTypes.bool,
  loading: PropTypes.bool,
  translate: PropTypes.func.isRequired,
  redirectTo: PropTypes.func,
  onSwitch: PropTypes.func,
}

export default injectTranslate(SignUpForm)
