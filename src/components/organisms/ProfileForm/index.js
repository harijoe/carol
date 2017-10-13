import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, ifThen, breakpoint, breakpointMax } from 'utils/style'
import { normalize, format } from 'utils/transformPhone'
import cloudinary from 'utils/cloudinary'

import {
  RenderField,
  AnimatedLabelField,
  Heading,
  Button,
  RadioGroup,
  HeroSection,
  Section,
  Grid,
  ProfileImage,
  BorderBox,
  Icon,
  Loading,
  BirthdateInput,
  NotificationBox,
  List,
} from 'components'
import { GenderBlock } from 'containers'
import ValidatedInfo from './atoms/ValidatedInfo'

const Form = styled.form`width: 100%;`

const StyledHeroSection = styled(HeroSection)`
  padding-top: ${theme('spaces.xxl')};
  min-height: 11.5rem;

  ${breakpoint('m')`
    padding-top: ${theme('spaces.xxxl')};
    min-height: 22rem;
  `}

  > section {
    display: flex;

    > :not(figure) {
      order: 2;
    }

    ${breakpointMax('l')`
      flex-direction: column;
      align-content: center;
      padding: 0;
    `}

    ${breakpoint('l')`
      margin-bottom: -8rem;
      max-width: 80rem;
    `}
  }

  .qs-Hero-title {
    display: none;
  }
`

const ProfileContentWrapper = styled.div`
  .qs-Profil-titleName {
    margin-bottom: ${theme('spaces.s')};
  }

  p {
    margin: 0;

    span {
      vertical-align: middle;

      &:first-child {
        margin-right: ${theme('spaces.m')};
      }
    }

    path {
      fill: ${theme('colors.grayscale.medium')};

      ${breakpoint('l')`
        fill: ${theme('colors.white')};
      `};
    }
  }

  ${breakpointMax('l')`
    margin: -${theme('spaces.xxl')} 0 0 0;
    padding: calc(${theme('spaces.xxl')} + ${theme('spaces.m')}) ${theme('spaces.m')} ${theme('spaces.xl')} ${theme('spaces.m')};
    background: ${theme('colors.grayscale.lightest')};
    text-align: center;

    .qs-Profil-titleName {
      color: ${theme('colors.black')};
    }

    p {
      color: ${theme('colors.grayscale.darker')};
    }
  `} ${breakpoint('l')`
    .qs-Profil-titleName, p {
      color: ${theme('colors.white')};
    }
  `};
`

const StyledSection = styled(Section)`
  &:not(:first-of-type) {
    padding-top: 0;
  }

  &:last-child > div div {
    display: flex;
    align-items: flex-start;
  }
`

const StyledGrid = styled(Grid)`
  margin-left: auto;
  margin-right: auto;
  max-width: 55rem;

  .qs-Infos-wrapper {
    ${breakpoint('m')`
      padding-left: ${theme('spaces.m')};
      padding-right: ${theme('spaces.m')};
    `}

    ${breakpoint('l')`
      padding-left: ${theme('spaces.l')};
      padding-right: ${theme('spaces.l')};
    `}
  }
`

const StyledProfileImage = styled(ProfileImage)`
  order: 1;
  height: 9rem;
  width: 9rem;

  ${breakpointMax('l')`
    margin-left: auto;
    margin-right: auto;
  `}

  ${breakpoint('m')`
    height: 15rem;
    width: 15rem;
  `}

  ${breakpoint('l')`
    margin-right: ${theme('spaces.xxl')};
  `}

`

const RadioBlock = styled.div`
  margin-bottom: ${theme('spaces.m')};
  padding-bottom: ${theme('spaces.m')};

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

const VerifiedFieldWrapper = styled.div`
  position: relative;
  display: flex;

  div:nth-child(2) {
    flex: 1 1 auto;
  }

  ${breakpointMax('m')`
    flex-direction: column;
    align-items: baseline;

    [class*="qs-Field--"]{
      position: absolute;
      top: -0.6rem;
      left: 0;
      padding: 0;
    }

    label {
      padding-left: ${theme('spaces.l')};
    }

    div:nth-child(2) {
      width: 100%;
    }
  `} ${breakpoint('m')`
    align-items: center;

    [class*="qs-Field--"]{
      margin-bottom: 1.2rem;
    }
  `};
`

const StyledNotificationBox = styled(NotificationBox)`
  ${({ notificationBoxIsOpen }) => css`
    position: relative;
    margin-bottom: ${theme('spaces.m')};
    height: auto;        
  
    h4 {
      padding: ${theme('spaces.s')} ${theme('spaces.l')} ${theme('spaces.s')} 3.7rem;
      background: url(${cloudinary('/icons/default-primary-logo.svg')}) no-repeat 1rem 0.6rem;
      background-size: ${theme('icons.size.m')};

      &:hover {
        cursor: pointer;
      }
         
      &::after {
        position: absolute;
        right: ${theme('spaces.s')};
        top: ${theme('spaces.m')};
        margin-left: -0.2rem;
        width: 0;
        height: 0;
        border-left: 0.4rem solid transparent;
        border-right: 0.4rem solid transparent;
        border-top: 0.4rem solid currentColor;
        content: '';
        transition-property: transform;
        transition-duration: 0.3s;
        transform: rotate(180deg);        
        
        ${ifThen(
          !notificationBoxIsOpen,
          css`
            transform: rotate(0deg);
          `,
        )}
      }

      ${breakpointMax('m')`
        background-position: 0 0.6rem;
      `};
  
      ${breakpoint('m')`
        margin-left: -${theme('spaces.xxl')};
        padding-left: ${theme('spaces.xxl')};
      `};
    }
  
    ${breakpoint('m')`
      margin-bottom: ${theme('spaces.l')};
      padding-left: ${theme('spaces.xxl')};
    `};
    
    ${ifThen(
      !notificationBoxIsOpen,
      css`
        height: 8rem;
        overflow: hidden;

        ${breakpoint('m')`
          height: 7rem;
        `};
      `,
    )};
  `};
`

const StyledList = styled(List)`
  padding: 0;
  list-style: none;

  span:first-child {
    height: ${theme('icons.size.s')};
    width: ${theme('icons.size.s')};
    margin-right: ${theme('spaces.s')};
  }

  span {
    vertical-align: middle;
  }

  [class*="qs-Data"] {
    font-size: ${theme('fonts.size.s')};

    ${breakpoint('m')`
      display: inline-block;
      width: 50%;
    `};
  }

  .qs-Data--verified {
    color: ${theme('colors.success')};
  }

  .qs-Data--notVerified {
    color: ${theme('colors.danger')};
  }
`

const ButtonWrapper = styled.div`
  width: 100%;

  ${breakpointMax('m')`
    margin-top: -2rem;
    margin-bottom: ${theme('spaces.l')};
  `};

  ${breakpoint('m')`
    max-width: 19rem;
    margin-bottom: 1.3rem;
    padding-left: ${theme('spaces.m')};
    border-bottom: 0.1rem solid ${theme('colors.grayscale.light')};
  `};
`

const StyledButton = styled(Button)`
  width: 100%;
  margin: 0;
  padding: ${theme('spaces.s')} ${theme('spaces.l')};
`

class ProfileForm extends Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func,
    loading: PropTypes.bool,
    updating: PropTypes.bool,
    error: PropTypes.object,
    togglePhoneValidationPopin: PropTypes.func,
    toggleEmailValidationPopin: PropTypes.func,
    syncErrors: PropTypes.object,
    translate: PropTypes.func.isRequired,
    emailVerified: PropTypes.bool,
    mobilePhoneVerified: PropTypes.bool,
    details: PropTypes.shape({
      email: PropTypes.string,
      facebookId: PropTypes.string,
      googleId: PropTypes.string,
    }),
    initialValues: PropTypes.shape({
      country: PropTypes.string,
      imageBase64: PropTypes.string,
    }),
    invalid: PropTypes.bool,
  }

  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      imageBase64: '',
      notificationBoxIsOpen: false,
    }
  }

  componentDidMount() {
    this.setImage(this.props.initialValues.imageBase64)
  }

  componentWillReceiveProps(nextProps) {
    this.setImage(nextProps.initialValues.imageBase64)
    const { emailVerified, mobilePhoneVerified } = nextProps
    if (emailVerified && mobilePhoneVerified) this.setState({ notificationBoxIsOpen: false })
    else this.setState({ notificationBoxIsOpen: true })
  }

  setImage(img) {
    this.setState({
      imageBase64: this.state.imageBase64 || img,
    })
  }

  handleChange({ target }) {
    const { name, value } = target

    this.setState({ [name]: value })

    if (target === 'imageBase64') {
      this.setState({ imageBase64: target.src })
    }
  }

  handleSubmitClick = () => {
    if (this.props.invalid) {
      this.form.scrollIntoView()
    }
  }

  handleToggleNotificationBox = () => {
    this.setState({
      notificationBoxIsOpen: !this.state.notificationBoxIsOpen,
    })
  }

  render() {
    const {
      initialValues,
      handleSubmit,
      loading,
      updating,
      translate,
      details,
      language,
      error,
      syncErrors,
      togglePhoneValidationPopin,
      toggleEmailValidationPopin,
      emailVerified,
      mobilePhoneVerified,
      invalid,
    } = this.props
    const birthdateError =
      (error && error.birthdate && error.birthdate.id) || (syncErrors && syncErrors.birthdate && syncErrors.birthdate.id)
    const { imageBase64, firstName } = initialValues
    const { notificationBoxIsOpen } = this.state

    return (
      <div
        ref={ref => {
          this.form = ref
        }}
      >
        <Loading loading={loading}>
          {!loading &&
            <Form onSubmit={handleSubmit}>
              <StyledHeroSection imageLink={cloudinary('/hero-fullscreen_image.jpg')}>
                <StyledProfileImage imageLink={imageBase64} />
                <ProfileContentWrapper>
                  <Heading level={1} className="qs-Profil-titleName">
                    {translate('user.profile.hello', { firstName })}
                  </Heading>
                  <p>
                    <Icon icon="mail-login" />
                    <span>
                      {details.email}
                    </span>
                  </p>
                </ProfileContentWrapper>
              </StyledHeroSection>
              <StyledSection title={translate('user.profile_info')}>
                <StyledGrid>
                  <div className="qs-Infos-wrapper">
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
                    <BirthdateInput error={birthdateError} />
                  </div>
                  <BorderBox grey mediumBorder title={translate('user.contact_info')}>
                    <StyledNotificationBox
                      notificationBoxIsOpen={notificationBoxIsOpen}
                      primary
                      title={translate('auto_validation.notification.title')}
                      text={translate('auto_validation.notification.description')}
                      clickTitleHandler={this.handleToggleNotificationBox}
                    >
                      <StyledList>
                        <li className="qs-Data--verified">
                          <Icon icon="validated" />
                          <FormattedMessage id={`user.profile.data.validated`} />
                        </li>
                        <li className="qs-Data--notVerified">
                          <Icon icon="not-validated" />
                          <FormattedMessage id={`user.profile.data.not-validated`} />
                        </li>
                      </StyledList>
                    </StyledNotificationBox>
                    <VerifiedFieldWrapper className="verified-field-wrapper">
                      <ValidatedInfo
                        validated={emailVerified}
                        field="email"
                        onClick={() => {
                          if (!emailVerified) {
                            toggleEmailValidationPopin()
                          }
                        }}
                      />
                      <Field
                        name="email"
                        type="email"
                        icon="mail-login"
                        component={RenderField}
                        label={translate('user.email')}
                        placeholder={translate('user.email')}
                        disabled
                      />
                      {!emailVerified &&
                        <ButtonWrapper>
                          <StyledButton
                            onClick={() => {
                              toggleEmailValidationPopin()
                            }}
                          >
                            {translate('auto_validation.notification.verify')}
                          </StyledButton>
                        </ButtonWrapper>}
                    </VerifiedFieldWrapper>
                    <VerifiedFieldWrapper className="verified-field-wrapper">
                      <ValidatedInfo
                        validated={mobilePhoneVerified}
                        field="mobile"
                        onClick={() => {
                          if (!mobilePhoneVerified) {
                            togglePhoneValidationPopin()
                          }
                        }}
                      />
                      <Field
                        name="mobilePhone"
                        component={RenderField}
                        label={translate('user.mobile_phone')}
                        placeholder={translate('user.mobile_phone')}
                        format={format(language)}
                        normalize={normalize(language)}
                        icon="phone"
                      />
                      {!mobilePhoneVerified &&
                        <ButtonWrapper>
                          <StyledButton
                            onClick={() => {
                              togglePhoneValidationPopin()
                            }}
                          >
                            {translate('auto_validation.notification.verify')}
                          </StyledButton>
                        </ButtonWrapper>}
                    </VerifiedFieldWrapper>
                    <Field
                      name="fixedPhone"
                      component={RenderField}
                      label={translate('user.fixed_phone')}
                      placeholder={translate('user.fixed_phone')}
                      format={format(language)}
                      normalize={normalize(language)}
                    />
                  </BorderBox>
                </StyledGrid>
              </StyledSection>
              <StyledSection title={translate('user.contact_preferences')}>
                <StyledGrid>
                  <div className="qs-Infos-wrapper">
                    <RadioBlock>
                      <strong>
                        <FormattedMessage id="user.contactPreference" tagName="div" />
                      </strong>
                      <Field
                        component={RadioGroup}
                        name="contactPreference"
                        options={[
                          { value: 'email', id: 'contactPreference.email', translation: 'user.contactPreference.email' },
                          { value: 'phone', id: 'contactPreference.phone', translation: 'user.contactPreference.phone' },
                        ]}
                      />
                    </RadioBlock>
                    <Field name="contactComment" component={RenderField} type="select" label={translate('user.contactComment')}>
                      {[
                        {
                          value: 'no_preferences',
                          id: 'user.contactComment.no_preferences',
                        },
                        {
                          value: 'during_business_hours',
                          id: 'user.contactComment.during_business_hours',
                        },
                        {
                          value: 'outside_business_hours',
                          id: 'user.contactComment.outside_business_hours',
                        },
                      ].map(({ value, id }, key) =>
                        <FormattedMessage {...{ key, id }}>
                          {formattedMessage =>
                            <option {...{ value }}>
                              {formattedMessage}
                            </option>}
                        </FormattedMessage>,
                      )}
                    </Field>
                  </div>
                </StyledGrid>
              </StyledSection>

              <StyledSection title={translate('user.profile_other')}>
                <StyledGrid>
                  <Field
                    name="newsletterSubscription"
                    type="checkbox"
                    component={RenderField}
                    label={translate('user.newsletter_subscription')}
                    placeholder={translate('user.newsletter_subscription')}
                    lightFont
                    inline
                    normalize={v => !!v} // https://goo.gl/9vmQJm
                  />
                  <Button
                    type="submit"
                    loading={updating}
                    center
                    maxWidth
                    onClick={this.handleSubmitClick}
                    disabled={invalid || birthdateError}
                  >
                    <FormattedMessage id="user.update" />
                  </Button>
                </StyledGrid>
              </StyledSection>
            </Form>}
        </Loading>
      </div>
    )
  }
}

export default injectTranslate(ProfileForm)
