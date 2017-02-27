import React, { PropTypes } from 'react'
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
  locale: state.locale.lang,
  messages: translations[state.locale.lang],
})

export default connect(mapStateToProps)(IntlProviderContainer)
