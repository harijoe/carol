import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'
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

const StyledError = styled.strong`
  display: block;
  font-weight: normal;
  color: ${theme('colors.danger')};
`

const VerifiedFieldWrapper = styled.div`
  display: flex;

  ${breakpointMax('m')`
    flex-direction: column;
    align-items: baseline;

    div:first-child {
      width: 100%;
    }


    [class*="qs-Field--"]{
      margin-bottom: ${theme('spaces.m')};
      margin-top: -${theme('spaces.m')};
    }
  `} ${breakpoint('m')`
    align-items: center;

    div {
      &:first-child {
        width: 50%;
      }

      &[class*="qs-Field--"] {
        margin-left: ${theme('spaces.m')};
      }
    }
  `};
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
    }
  }

  componentDidMount() {
    this.setImage(this.props.initialValues.imageBase64)
  }

  componentWillReceiveProps(nextProps) {
    this.setImage(nextProps.initialValues.imageBase64)
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
      togglePhoneValidationPopin,
      toggleEmailValidationPopin,
      emailVerified,
      mobilePhoneVerified,
    } = this.props
    const { imageBase64, firstName } = initialValues

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
                    {error &&
                      error.birthdate &&
                      <StyledError>
                        {translate(error.birthdate.id)}
                      </StyledError>}
                    <BirthdateInput />
                  </div>
                  <BorderBox grey mediumBorder title={translate('user.contact_info')}>
                    <VerifiedFieldWrapper>
                      <Field
                        name="email"
                        type="email"
                        icon="mail-login"
                        component={RenderField}
                        label={translate('user.email')}
                        placeholder={translate('user.email')}
                        disabled
                      />
                      <ValidatedInfo
                        validated={emailVerified}
                        field="email"
                        onClick={() => {
                          if (!emailVerified) {
                            toggleEmailValidationPopin()
                          }
                        }}
                      />
                    </VerifiedFieldWrapper>
                    <VerifiedFieldWrapper>
                      <Field
                        name="mobilePhone"
                        component={RenderField}
                        label={translate('user.mobile_phone')}
                        placeholder={translate('user.mobile_phone')}
                        format={format(language)}
                        normalize={normalize(language)}
                      />
                      <ValidatedInfo
                        validated={mobilePhoneVerified}
                        field="mobile"
                        onClick={() => {
                          if (!mobilePhoneVerified) {
                            togglePhoneValidationPopin()
                          }
                        }}
                      />
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
                    hideBorder
                    lightFont
                    inline
                    normalize={v => !!v} // https://goo.gl/9vmQJm
                  />
                  <Button type="submit" loading={updating} center maxWidth onClick={this.handleSubmitClick}>
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
