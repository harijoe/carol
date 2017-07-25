import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, ifThen, breakpoint } from 'utils/style'

import { RenderField, Icon, PopinMenu, PopinMenuButton } from 'components'

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

  div:nth-child(2) {
    flex-grow: 1;
    margin: 0 20px 0 0;
    padding: 0;
    border: none;
    max-width: none;
  }

  button {
    background: transparent;
  }
`

const BackButton = styled.button`
  display: block;
  align-self: flex-end;
  min-width: 7rem;
  margin: ${theme('spaces.m')} ${theme('spaces.m')} ${theme('spaces.m')} 0 ;
  padding: ${theme('spaces.s')} ${theme('spaces.m')};
  font-size: ${theme('fonts.size.s')};
  line-height: 1;
  background: ${theme('colors.grayscale.lightest')};
  border: 1px solid ${theme('colors.grayscale.lighter')};
  border-radius: 6rem;
  color: ${theme('colors.grayscale.dark')};
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

  svg {
    overflow: auto;
  }

  &:disabled {
    opacity: 0.4;

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

  .cls-1 {
     fill: ${theme('colors.grayscale.dark')};
  }
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
    css`border: none;`
  )};
  padding-left: ${theme('spaces.m')};
  width: 100%;
  background: transparent;
  border-radius: 0.2rem;
  color: ${theme('colors.grayscale.darker')};
  transition: all 0.3s;
  border-bottom: white 1px solid;

  &:disabled {
    opacity: 0.4;
  }

  &:focus, &:-webkit-autofill {
    outline: 0;
    border-bottom: ${theme('colors.primary')} 1px solid;
  }
`}`

class Form extends Component {

  componentDidUpdate() {
    if (this.props.disabled) {
      this.getInput().blur()
    } else {
      this.getInput().focus()
    }
  }

  onSubmit = submitHandler => (...args) => {
    submitHandler(...args)
  }

  // eslint-disable-next-line react/no-find-dom-node
  getInput = () => ReactDOM.findDOMNode(this.field).querySelector('input')

  render() {
    const {
      reply,
      translate,
      handleSubmit,
      reset,
      pristine,
      submitting,
      disabled,
      enableBack,
    } = this.props

    const submit = (values) => {
      reply(values.answer)
      reset()
    }

    const SubMenuReset = () => (
      <PopinMenuButton onClick={() => submit({ answer: 'new_project.reset' })}>
        <FormattedMessage id="project.elaboration.reset" />
      </PopinMenuButton>
    )

    const scrollToBottom = () => {
      //  Android bug reference : https://goo.gl/W4uu8i
      const conversation = document.querySelector('.conversation')

      conversation.scrollTop = conversation.scrollHeight
    }

    const submitBack = () => {
      scrollToBottom()
      submit({ answer: 'new_project.back' })
    }

    return (
      <StyledForm onSubmit={this.onSubmit(handleSubmit(submit))}>
        <BackButton
          type="button"
          onClick={submitBack}
          style={{ visibility: enableBack ? 'visible' : 'hidden' }}
        >
          <BackIcon icon="back" />
          <FormattedMessage id="project.elaboration.back" />
        </BackButton>
        <BottomBar>
          <PopinMenu menu={[<SubMenuReset />]}>
            <VerticalDotsButton>
              <VerticalDotsIcon icon="vertical-dots" />
            </VerticalDotsButton>
          </PopinMenu>
          <StyledField
            disabled={disabled}
            name="answer"
            component={RenderField}
            placeholder={translate('project.elaboration.answer')}
            autoFocus
            onFocus={scrollToBottom}
            innerRef={(field) => { this.field = field }}
          />
          <SubmitButton disabled={pristine || submitting} type="submit">
            <SubmitIcon icon="send" />
            <FormattedMessage id="project.elaboration.submit" />
          </SubmitButton>
        </BottomBar>
      </StyledForm>
    )
  }
}

Form.propTypes = {
  reply: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  disabled: PropTypes.bool,
  enableBack: PropTypes.bool,
}

export default reduxForm({ form: 'ProjectElaboration' })(injectTranslate(Form))
