import React from 'react'
import PropTypes from 'prop-types'

import { FooterAdvices, FooterCorporate, FooterSocialNetworks, MainWrapper } from 'components'

const Footer = ({ locale }) => (
  <MainWrapper>
    <FooterAdvices locale={locale} />
    <FooterCorporate locale={locale} />
    <FooterSocialNetworks locale={locale} />
  </MainWrapper>
)

Footer.propTypes = {
  locale: PropTypes.string,
}

export default Footer
