import React from 'react'
import PropTypes from 'prop-types'
import translations from 'translations'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'

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
