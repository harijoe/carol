import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { mocking } from 'config'

import { IntlProvider, GoogleTagManager } from 'containers'

const Head = ({ translate }) => (
  <Helmet titleTemplate={translate('pages.default.titleTemplate')}>
    <title>{translate('pages.default.title')}</title>
    <meta name="description" content={translate('pages.default.meta.description')} />
    <meta property="og:site_name" content="Quotatis" />
    <meta property="og:title" content={translate('pages.default.meta.og.title')} />
    <meta property="og:image" content="https://lh5.googleusercontent.com/-H8MZCl-4zME/UI-VaVpuRjI/AAAAAAAAAAc/rc9uPeRIwsc/w851-h315-no/Quotatis-fond-googleplus.jpg" />
    <meta property="og:image:type" content="image/jpg" />
    <meta property="og:url" content="https://quotatis.fr" />
  </Helmet>
)

Head.propTypes = {
  translate: PropTypes.func.isRequired,
}

const HeadWithTranslate = injectTranslate(Head)

class App extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    if (mocking) {
      window.dataLayer = []
    }
  }

  render() {
    const { children } = this.props

    return (
      <IntlProvider>
        <div>
          <HeadWithTranslate />
          {children}
          { !mocking && <GoogleTagManager /> }
        </div>
      </IntlProvider>
    )
  }
}

export default App
