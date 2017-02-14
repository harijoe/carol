import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { reduxForm } from 'redux-form'

import { createValidator, required } from 'services/validation'
import { fromForm } from 'store/selectors'
import { firmList } from 'store/actions'
import { FirmSearchForm } from 'components'

const FirmSearchFormContainer = props => (
  <FirmSearchForm {...props} />
)

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  const queryParams = []

  if (data.homeImprovementId) { queryParams.push(`home-improvement-id=${data.homeImprovementId}`) }
  if (data.servedAreaCityCode) { queryParams.push(`served-area-city-code=${data.servedAreaCityCode}`) }

  dispatch(firmList.request(queryParams, resolve, reject))
  dispatch(push(`/search-firm?${queryParams.join('&')}`))
})

const validate = createValidator({
  servedAreaCityCode: [required],
})

const mapStateToProps = state => ({
  initialValues: {
    _csrf: fromForm.getCsrfToken(state),
  },
})

export const config = {
  form: 'FirmSearchForm',
  fields: ['homeImprovementId', 'servedAreaCityCode'],
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(reduxForm(config)(FirmSearchFormContainer))
