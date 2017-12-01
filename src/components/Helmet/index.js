import React from 'react'
import ReactHelmet from 'react-helmet'
import PropTypes from 'prop-types'
import injectTranslate from 'i18n/hoc/injectTranslate'

const Helmet = ({ translate }) =>
  <ReactHelmet titleTemplate={translate('pages.default.titleTemplate')}>
    <title>
      {translate('pages.default.title')}
    </title>
    <meta name="description" content={translate('pages.default.meta.description')} />
    <meta property="og:site_name" content="Quotatis" />
    <meta property="og:title" content={translate('pages.default.meta.og.title')} />
    <meta
      property="og:image"
      content="https://lh5.googleusercontent.com/-H8MZCl-4zME/UI-VaVpuRjI/AAAAAAAAAAc/rc9uPeRIwsc/w851-h315-no/Quotatis-fond-googleplus.jpg"
    />
    <meta property="og:image:type" content="image/jpg" />
    <meta property="og:url" content="https://quotatis.fr" />
  </ReactHelmet>

Helmet.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(Helmet)
