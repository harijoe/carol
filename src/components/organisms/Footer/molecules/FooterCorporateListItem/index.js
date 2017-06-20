import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'
import { locales } from 'config'
import { FormattedMessage } from 'react-intl'
import { Link, ListItem } from 'components'

const StyledListItem = styled(ListItem)`
  margin: 0;
  padding-left: 0;
  padding-top: ${theme('spaces.s')};

  &:first-child {
    padding-top: 0;
  }
`

const StyledLink = styled(Link)`
  color: ${theme('colors.white')};
  text-decoration: none;
`

const FooterCorporateListItem = ({ id, locale, forceRedirect, target, contentSite }) => {
  if (locales[locale].footer.corporate[id] == null) {
    return null
  }

  const url = contentSite ?
    `${locales[locale].contentSiteUrl}${locales[locale].footer.corporate[id]}` :
    locales[locale].footer.corporate[id]

  return (
    <StyledListItem id="window">
      <StyledLink
        to={url}
        forceRedirect={forceRedirect}
        target={target}
      >
        <FormattedMessage id={`footer.corporate.${id}`} />
      </StyledLink>
    </StyledListItem>
  )
}

FooterCorporateListItem.propTypes = {
  id: PropTypes.string,
  locale: PropTypes.string,
  forceRedirect: PropTypes.bool,
  target: PropTypes.string,
  contentSite: PropTypes.string,
}

export default FooterCorporateListItem
