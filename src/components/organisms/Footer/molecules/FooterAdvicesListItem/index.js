import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'
import { locales } from 'config'
import { FormattedMessage } from 'react-intl'
import { Link, ListItem } from 'components'

const StyledLink = styled(Link)`
  color: ${theme('colors.white')};
  text-decoration: none;
`

const StyledListItem = styled(ListItem)`
  margin: 0;
  padding-left: 0;
  padding-bottom: ${theme('spaces.s')};
`

const FooterAdvicesListItem = ({ id, locale }) => {
  const itemConfig = locales[locale].footer.advices[id]

  if (itemConfig == null) {
    return null
  }

  const { src, key } = itemConfig

  return (
    <StyledListItem>
      <StyledLink to={`${locales[locale].contentSiteUrl}${src}`}>
        <FormattedMessage id={`footer.advices.${key}`} />
      </StyledLink>
    </StyledListItem>
  )
}

FooterAdvicesListItem.propTypes = {
  id: PropTypes.string,
  locale: PropTypes.string,
}

export default FooterAdvicesListItem
