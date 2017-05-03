import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import styled, { css } from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { theme, ifThen, breakpoint } from 'utils/style'
import messages from 'utils/messages'

import { RenderField, Icon, PopinMenu, PopinMenuLink, PopinMenuButton } from 'components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  ${breakpoint('l')`
    padding-left: ${theme('spaces.l')};
    padding-right: ${theme('spaces.l')};
  `}

  ${breakpoint('xl')`
    padding-left: ${theme('spaces.xxl')};
    padding-right: ${theme('spaces.xxl')};
  `}
`

const BottomBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  padding: ${theme('spaces.m')};
  background-color: ${theme('colors.white')};
  border-top: 0.1rem solid ${theme('colors.grayscale.light')};

  div:nth-child(2) {
    flex-grow: 1;
    margin: 0;
    border: none;
  }

  ${breakpoint('l')`
    border-left: 0.1rem solid ${theme('colors.grayscale.light')};
    border-right: 0.1rem solid ${theme('colors.grayscale.light')};
  `}
`

const BackButton = styled.button`
  display: block;
  align-self: flex-end;
  min-width: 7rem;
  margin: ${theme('spaces.m')} ${theme('spaces.m')} ${theme('spaces.m')} 0 ;
  padding: ${theme('spaces.s')} ${theme('spaces.m')};
  font-size: ${theme('fonts.size.s')};
  line-height: 1;
  background: transparent;
  border: 0.1rem solid ${theme('colors.grayscale.medium')};
  border-radius: 6rem;
  color: ${theme('colors.grayscale.medium')};
  text-align: center;
  white-space: nowrap;
`

const SubmitButton = styled.button`
  display: block;
  box-sizing: content-box;
  height: ${theme('icons.size.m')};
  width: ${theme('icons.size.l')};
  padding: ${theme('spaces.xs')};
  overflow: hidden;
  line-height: 1;
  background: transparent;
  transition: all 0.3s;

  &:disabled {
    opacity: 0.2;

    span svg path {
      fill: ${theme('colors.grayscale.medium')};
    }
  }

  span svg path {
    fill: ${theme('colors.secondary')};
  }
`

const VerticalDotsButton = styled.div`
  display: block;
  box-sizing: content-box;
  height: ${theme('icons.size.m')};
  width: ${theme('icons.size.m')};
  padding: ${theme('spaces.xs')};
  overflow: hidden;
  line-height: 1;
  background: transparent;
`

const BackIcon = styled(Icon)`
  display: inline-block;
  margin-right: ${theme('spaces.s')};
  vertical-align: text-bottom;
`

const SubmitIcon = styled(Icon)`
  display: block;
  height: ${theme('icons.size.m')};
  width: ${theme('icons.size.l')};
  margin-bottom: ${theme('spaces.s')};
  vertical-align: middle;
`

const VerticalDotsIcon = styled(Icon)`
  display: block;
  height: ${theme('icons.size.m')};
  width: 0.4rem;
  margin-bottom: ${theme('spaces.s')};
  vertical-align: middle;
`

const StyledField = styled(Field)`${({ disabled }) => css`
  ${ifThen(disabled,
    'border: none',
    css`border: 1px solid ${theme('colors.primary')}`
  )};
  background: transparent;
  border-radius: 0.2rem;
  color: ${theme('colors.grayscale.darker')};
  transition: all 0.3s;

  &:disabled {
    opacity: 0.2;
  }

  &:focus {
    outline: 0;
    background: ${theme('colors.grayscale.lightest')};
  }
`}`

class Form extends Component {
  componentDidUpdate() {
    this.field.focus()
  }

  render() {
    const {
      reply,
      intl: { formatMessage },
      handleSubmit,
      reset,
      pristine,
      submitting,
      disabled,
    } = this.props

    const submit = (values) => {
      reply(values.response)
      reset()
    }

    const SubMenuReset = () => (
      <PopinMenuButton onClick={() => submit({ response: 'new_project.reset' })}>
        <FormattedMessage id="project.elaboration.reset" tagName="span" />
      </PopinMenuButton>
    )

    const SubMenuHelp = () => (
      <PopinMenuLink to="help">
        <FormattedMessage id="help" tagName="span" />
      </PopinMenuLink>
    )

    return (
      <StyledForm onSubmit={handleSubmit(submit)}>
        <BackButton type="button" onClick={() => submit({ response: 'new_project.back' })}>
          <BackIcon icon="back" />
          <FormattedMessage id="project.elaboration.back" tagName="span" />
        </BackButton>
        <BottomBar>
          <PopinMenu menu={[<SubMenuReset />, <SubMenuHelp />]}>
            <VerticalDotsButton>
              <VerticalDotsIcon icon="vertical-dots" />
            </VerticalDotsButton>
          </PopinMenu>
          <StyledField
            disabled={disabled}
            name="response"
            component={RenderField}
            placeholder={formatMessage(messages('project.elaboration.response').label)}
            autoFocus
            innerRef={(field) => { this.field = field }}
          />
          <SubmitButton disabled={pristine || submitting} type="submit">
            <SubmitIcon icon="send" />
            <FormattedMessage id="project.elaboration.submit" tagName="span" />
          </SubmitButton>
        </BottomBar>
      </StyledForm>
    )
  }
}

Form.propTypes = {
  reply: PropTypes.func.isRequired,
  intl: intlShape,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default reduxForm({ form: 'ProjectElaboration' })(injectIntl(Form))
