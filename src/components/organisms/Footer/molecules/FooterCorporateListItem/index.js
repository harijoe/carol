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

const FooterCorporateListItem = ({ id, locale }) => {

  const itemConfig = locales[locale].footer.corporate[id]

  if (itemConfig == null) {
    return null
  }

  const { src, key, forceRedirect, target, contentSite } = itemConfig

  const url = contentSite
    ? `${locales[locale].contentSiteUrl}${src}`
    : src

  return (
    <StyledListItem>
      <StyledLink to={`${url}`} forceRedirect={forceRedirect} target={target}>
        <FormattedMessage id={`footer.corporate.${key}`} />
      </StyledLink>
    </StyledListItem>
  )
}

FooterCorporateListItem.propTypes = {
  id: PropTypes.string,
  locale: PropTypes.string,
}

export default FooterCorporateListItem
