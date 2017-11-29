import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field } from 'redux-form'

import injectTranslate from 'i18n/hoc/injectTranslate'
import RadioGroup from 'components/RadioGroup'
import { theme } from 'utils/style'

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

const genders = {
  mr: { value: 'Mr', id: 'mr', translation: 'user.mr' },
  mrs: { value: 'Mrs', id: 'mrs', translation: 'user.mrs' },
  miss: { value: 'Miss', id: 'miss', translation: 'user.miss' },
}

export const optionsFor = language => [genders.mr, genders.mrs, ...(language === 'en' ? [genders.miss] : [])]

const GenderBlock = ({ language, translate }) =>
  <RadioBlock>
    <div>
      <strong>
        {translate('user.gender')}
      </strong>
    </div>
    <Field component={RadioGroup} name="gender" options={optionsFor(language)} />
  </RadioBlock>

GenderBlock.propTypes = {
  language: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(GenderBlock)
