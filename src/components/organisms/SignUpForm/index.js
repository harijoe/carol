import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpointMax, breakpoint } from 'utils/style'

import {
  RenderField,
  Button,
  FacebookLogin,
  GoogleLogin,
  CarouselPageTemplate,
  AnimatedLabelField,
  Row,
  Paragraph,
  Link,
  Divider,
  RadioGroup,
  Heading,
} from 'components'

const StyledRow = styled(Row)`
  flex-wrap: nowrap;
  flex-direction: column;
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
  `}

  div[type="checkbox"] label {
    width: calc( 100% - 18px );
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${theme('spaces.l')};
  border-top: 1px solid ${theme('colors.grayscale.light')};
  background-color: ${theme('colors.grayscale.lightest')};
  
  ${breakpointMax('m')`
    width: 100vw;
    margin-left: -${theme('spaces.m')};
    margin-right: -${theme('spaces.m')};
    margin-bottom: -${theme('spaces.m')};
  `}

  ${breakpoint('m')`
    margin-left: -${theme('spaces.l')};
    margin-right: -${theme('spaces.l')};
    margin-bottom: -${theme('spaces.l')};
  `}

  ${breakpoint('xl')`
    margin-left: -${theme('spaces.xxl')};
    margin-right: -${theme('spaces.xxl')};
    margin-bottom: -${theme('spaces.xxl')};
  `}
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
  `}
`

const RadioBlock = styled.div`
  margin-bottom: ${theme('spaces.xs')};
  padding-bottom: ${theme('spaces.m')};
  font-weight: normal;

  strong {
    display: block;
    margin-bottom: ${theme('spaces.m')};
    font-weight: bold;
    font-size: ${theme('fonts.size.base')};
    line-height: 1rem;
    color: ${theme('colors.black')};
  }

  fieldset {
    display: inline-block;
    margin: 0;
    margin-right: ${theme('spaces.xl')};
    padding: 0;
    border: none;
    outline: none;
  }
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
        {
          carousel &&
          <CarouselPageTemplate
            heading={translate('user.sign_up.heading')}
            description={translate('user.sign_up.description')}
          >
            <StyledRow>
              <FacebookLogin />
              <GoogleLogin />
              <StyledDivider or />
              <Form onSubmit={handleSubmit}>
                <RadioBlock>
                  <strong><FormattedMessage id="user.gender" tagName="div" /></strong>
                  <Field
                    component={RadioGroup}
                    name="gender"
                    required
                    options={[
                      { value: 'Mr', id: 'mr', translation: 'user.mr' },
                      { value: 'Mrs', id: 'mrs', translation: 'user.mrs' },
                    ]}
                  />
                </RadioBlock>
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
                <AnimatedLabelField
                  name="email"
                  type="email"
                  icon="mail-login"
                  label={translate('user.email')}
                />
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
                  hideBorder
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
                  <StyledLink highlight kind="black" onClick={() => onSwitch ? onSwitch() : redirectTo('/login')}>
                    <FormattedMessage id="user.sign_in" />
                  </StyledLink>
                </div>
              </div>
            </StyledRow>
          </CarouselPageTemplate>
        }
        {
          !carousel &&
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
              <RadioBlock>
                <strong><FormattedMessage id="user.gender" tagName="div" /></strong>
                <Field
                  component={RadioGroup}
                  name="gender"
                  required
                  options={[
                    { value: 'Mr', id: 'mr', translation: 'user.mr' },
                    { value: 'Mrs', id: 'mrs', translation: 'user.mrs' },
                  ]}
                />
              </RadioBlock>
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
              <AnimatedLabelField
                name="email"
                type="email"
                icon="mail-login"
                label={translate('user.email')}
              />
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
                hideBorder
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
              <StyledLinkPopIn highlight kind="black" onClick={() => onSwitch ? onSwitch() : redirectTo('/login')}>
                <FormattedMessage id="user.sign_in" />
              </StyledLinkPopIn>
            </Footer>
          </Wrapper>
        }
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
