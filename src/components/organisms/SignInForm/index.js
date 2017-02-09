import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { RenderField, Button, Link } from 'components'
import { DropDownMenu, AccountMenu } from 'containers'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
`
Form.displayName = 'Form'

const StyledLink = styled(Link)`
  margin-left: 10px;
`

const SignInForm = ({ location, isAuthenticated, handleSubmit, submitting }) => {
  if (location && location.pathname && (location.pathname === '/login')) {
    return null
  }

  if (!isAuthenticated) {
    return (
      <DropDownMenu label="login">
        <Form onSubmit={handleSubmit}>
          <Field name="email" type="text" component={RenderField} label="Email" />
          <Field name="password" type="password" component={RenderField} label="Password" />
          <Button type="submit" disabled={submitting}><FormattedMessage id="user.sign_in" tagName="span" /></Button>
          <StyledLink to="/signup"><FormattedMessage id="user.create_account" /></StyledLink>
        </Form>
        <Link to="/forgot-password">
          <FormattedMessage id="user.forgot_password.heading" />
        </Link>
      </DropDownMenu>
    )
  }

  return (
    <DropDownMenu label="user.my_account">
      <AccountMenu />
    </DropDownMenu>
  )
}

SignInForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitting: React.PropTypes.bool,
  isAuthenticated: React.PropTypes.bool,
  location: React.PropTypes.object,
}

export default SignInForm
