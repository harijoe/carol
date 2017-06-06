import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectIntl, intlShape } from 'react-intl'

import { IntlProvider, GoogleTagManager } from 'containers'

const Head = ({ intl: { formatMessage } }) =>
  <Helmet titleTemplate={formatMessage({ id: 'pages.default.titleTemplate' })}>
    <title>{formatMessage({ id: 'pages.default.title' })}</title>
    <meta name="description" content={formatMessage({ id: 'pages.default.meta.description' })} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:site_name" content="Quotatis" />
    <meta property="og:title" content={formatMessage({ id: 'pages.default.meta.og.title' })} />
    <meta property="og:image" content="https://lh5.googleusercontent.com/-H8MZCl-4zME/UI-VaVpuRjI/AAAAAAAAAAc/rc9uPeRIwsc/w851-h315-no/Quotatis-fond-googleplus.jpg" />
    <meta property="og:image:type" content="image/jpg" />
    <meta property="og:url" content="https://quotatis.fr" />
  </Helmet>

Head.propTypes = {
  intl: intlShape.isRequired,
}

const IntlHead = injectIntl(Head)

class App extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { children } = this.props

    return (
      <IntlProvider>
        <div>
          <IntlHead />
          {children}
          <GoogleTagManager />
        </div>
      </IntlProvider>
    )
  }
}

export default App
