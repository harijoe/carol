import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { reduxForm } from 'redux-form'
import { remove as removeDiacritics } from 'diacritics'

import { createValidator, required } from 'services/validation'
import { fromForm } from 'store/selectors'
import { firmList } from 'store/actions'
import { FirmSearchForm } from 'components'

const FirmSearchFormContainer = props => (
  <FirmSearchForm {...props} />
)

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  const queryParams = []

  if (data.trade) { queryParams.push(`trade=${removeDiacritics(data.trade)}`) }
  if (data.workingCityCode) { queryParams.push(`working-city-code=${removeDiacritics(data.workingCityCode)}`) }

  dispatch(firmList.request(queryParams, resolve, reject))
  dispatch(push(`/search-firm?${queryParams.join('&')}`))
})

const validate = createValidator({
  workingCityCode: [required],
})

const mapStateToProps = state => ({
  initialValues: {
    _csrf: fromForm.getCsrfToken(state),
  },
})

export const config = {
  form: 'FirmSearchForm',
  fields: ['trade', 'workingCityCode'],
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(reduxForm(config)(FirmSearchFormContainer))
