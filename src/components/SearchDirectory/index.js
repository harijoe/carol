import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { FormattedMessage } from 'react-intl'

import RenderField from 'components/RenderField'
import Button from 'components/Button'
import Icon from 'components/Icon'

const FormWrapper = styled.form`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-color: ${theme('colors.white')};
  box-shadow: 0 0 20px 0 rgba(19, 19, 19, 0.2);

  ${breakpointMax('m')`
    flex-direction: column;
  `};
`

const FormCell = styled.div`
  margin: 0;
  border: none;

  > div{
    margin-bottom: 0;
    padding: 0;
  }

  label {
    margin-bottom: ${theme('spaces.s')};
    font-size: ${theme('fonts.size.s')};
    line-height: 1;
  }

  ${breakpointMax('m')`
    padding: ${theme('spaces.m')};

    &:first-child {
      box-shadow: inset 0 -1px ${theme('colors.grey')};
    }

    input, select {
      border: none;
    }
  `};

  ${breakpoint('m')`
    padding: ${theme('spaces.m')} ${theme('spaces.l')} 0 ${theme('spaces.l')};
    width: calc((100% - 75px) / 2);

    &:first-child {
      box-shadow: inset -1px 0  ${theme('colors.grey')};
    }

    fieldset {
      margin-left: -${theme('spaces.l')};
      margin-right: -${theme('spaces.l')};
    }

    input, select {
      padding-bottom: ${theme('spaces.m')};
      padding-left: ${theme('spaces.l')};
      padding-right: ${theme('spaces.l')};
      height: auto;
    }
  `};
`

const SubmitForm = styled(Button)`
  margin: 0;

  > span:first-child {
    margin-right: ${theme('spaces.s')};
  }

  span {
    vertical-align: middle;
  }

  ${breakpoint('m')`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    max-width: 75px;

    > span:first-child {
      display: none;
    }
  `};
`

const SearchIcon = styled(Icon)`
  height: ${theme('icons.size.m')};
  width: ${theme('icons.size.m')};

  path {
    fill: ${theme('colors.white')};
  }
`

const SearchDirectory = ({ translate }) =>
  <FormWrapper>
    <FormCell>
      <Field
        name="project"
        component={RenderField}
        label={translate('directory.form.project.label')}
        placeholder={translate('directory.form.project.placeholder')}
        type="select"
      >
        {[
          {
            value: '',
            id: 'directory.form.project.placeholder',
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
    </FormCell>
    <FormCell>
      <Field
        name="localisation"
        component={RenderField}
        label={translate('directory.form.zone.label')}
        placeholder={translate('directory.form.zone.placeholder')}
        type="text"
      />
    </FormCell>
    <SubmitForm state="secondary">
      <span>{translate('directory.form.button.label')}</span>
      <SearchIcon icon="search" />
    </SubmitForm>
  </FormWrapper>

SearchDirectory.propTypes = {
  translate: PropTypes.func,
}

export default reduxForm({ form: 'searchDirectory' })(injectTranslate(SearchDirectory))
