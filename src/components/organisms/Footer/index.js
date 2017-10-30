import React from 'react'
import PropTypes from 'prop-types'

import { MainWrapper } from 'components'
import FooterAdvices from './organisms/FooterAdvices'
import FooterCorporate from './organisms/FooterCorporate'
import FooterSocialNetworks from './organisms/FooterSocialNetworks'

const Footer = ({ locale }) =>
  <MainWrapper resetState className="footer">
    <FooterAdvices locale={locale} />
    <FooterCorporate locale={locale} />
    <FooterSocialNetworks locale={locale} />
  </MainWrapper>

Footer.propTypes = {
  locale: PropTypes.string,
}

export default Footer
