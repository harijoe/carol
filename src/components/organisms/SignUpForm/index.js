import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
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
  Paragraph,
  Link,
  Divider,
  RadioGroup,
} from 'components'

const StyledRow = styled(Row)`
  flex-wrap: nowrap;
  flex-direction: column;
  margin: auto;
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
`

const Footer = styled.footer`
  margin-top: ${theme('spaces.xl')};
  margin-bottom: ${theme('spaces.xxl')};

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.xxxl')};
  `} 
`

const StyledParagraph = styled(Paragraph)`
  margin: 0;
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
    redirectPathname: PropTypes.string,
    loading: PropTypes.bool,
    onSwitch: PropTypes.func,
    translate: PropTypes.func.isRequired,
  }

  state = {
    passwordInputType: 'password',
    passwordIcon: 'eye',
  }

  componentDidMount() {
    if (this.props.redirectPathname.indexOf('/project-prevalidate') === 0) {
      pushGtmEvent({ event: 'AccountCreation' })
    }
  }

  togglePassword = () => {
    this.setState({
      passwordInputType: this.state.passwordInputType === 'password' ? 'text' : 'password',
      passwordIcon: this.state.passwordIcon === 'eye' ? 'opened-eye' : 'eye',
    })
  }

  render() {
    const { handleSubmit, loading, redirectTo, translate, onSwitch } = this.props

    return (
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
          <Footer>
            <StyledParagraph>
              <FormattedMessage id="user.account_question" />
            </StyledParagraph>
            <StyledParagraph>
              <StyledLink highlight kind="black" onClick={() => onSwitch ? onSwitch() : redirectTo('/login')}>
                <FormattedMessage id="user.sign_in" />
              </StyledLink>
            </StyledParagraph>
          </Footer>
        </StyledRow>
      </CarouselPageTemplate>
    )
  }
}

export default injectTranslate(SignUpForm)
