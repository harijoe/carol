import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { Field } from 'redux-form'
import messages from 'utils/messages'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import {
  Heading,
  Paragraph,
  Button,
  AnimatedLabelField,
  ReinsuranceCarousel,
  MainWrapper,
  Row,
  Col,
} from 'components'

const StyledMainWrapper = styled(MainWrapper)`
  background: white;
  padding-top: 5.7rem;
`

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  
  ${breakpoint('m')`
    width: 50%;
  `}
`

const StyledHeading = styled(Heading)`
  ${breakpoint('m')`
    font-size: ${theme('fonts.size.xxxl')};
    margin-top: ${theme('grid.outerMargin.l')}rem;
  `}
`

const StyledParagraph = styled(Paragraph)`
  margin-top: ${theme('spaces.m')};
  margin-bottom: ${theme('spaces.xl')};
`

const LeftCol = styled(Col)`
  ${breakpointMax('m')`
    display: none;
  `}
`

const RightCol = styled(Col)`
  width: 100%;
  padding: 1em;
  margin-top: ${theme('spaces.xxl')};
`

const StyledButton = styled(Button)`
  margin-top: 40px;
`

const ForgotPasswordForm = ({ error, handleSubmit, submitting, intl }) => (
  <StyledMainWrapper>
    <Row>
      <LeftCol m={4}>
        <ReinsuranceCarousel />
      </LeftCol>
      <RightCol m={8} s={12}>
        <StyledHeading level={2}><FormattedMessage id="user.forgot_password.heading" /></StyledHeading>
        <StyledParagraph><FormattedMessage id="user.forgot_password.description" /></StyledParagraph>
        <Form onSubmit={handleSubmit}>
          <Field name="_csrf" type="hidden" component="input" />
          {error && <FormattedMessage id={error} tagName="strong" />}
          <AnimatedLabelField
            name="email"
            type="email"
            icon="mail-login"
            label={intl.formatMessage(messages('user.email').label)}
          />
          <StyledButton type="submit" disabled={submitting}><FormattedMessage id="user.send" /></StyledButton>
        </Form>
      </RightCol>
    </Row>
  </StyledMainWrapper>
)

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(ForgotPasswordForm)
