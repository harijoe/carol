import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'
import translations from '../i18n'

const IntlProviderContainer = props => (
  <IntlProvider {...props}>{props.children}</IntlProvider>
)

IntlProviderContainer.propTypes = {
  children: PropTypes.any,
}

const mapStateToProps = state => ({
  locale: state.context.lang,
  messages: translations[state.context.lang],
})

export default connect(mapStateToProps)(IntlProviderContainer)
