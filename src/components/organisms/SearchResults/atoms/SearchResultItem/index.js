import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Icon } from 'components'

const StyledLink = styled.a`
  background: white;
  height: 7rem;
  margin: 9px;
  padding: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  color: ${theme('colors.grayscale.darkest')};
  text-decoration: none;
  transition: all 0.3s ease;

  :hover {
    background-color: ${theme('colors.grayscale.light')}
  }

  em {
      background-color: ${theme('colors.secondary')};
      font-style: normal;
  }
`

const StyledIcon = styled(Icon)`
  width: 20%;
`

const StyledLabel = styled.span`
  width: 80%;
`

const SearchResultItem = ({ name, slug, _highlightResult: { name: { value } } }) => (
  <li>
    <StyledLink href={`/project-elaboration/?slug=${slug}`}>
      <StyledIcon size={70} icon="quotatis" />
      { value != null ? <StyledLabel dangerouslySetInnerHTML={{ __html: value }} /> : <StyledLabel>{name}</StyledLabel> }
    </StyledLink>
  </li>
)

SearchResultItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  _highlightResult: PropTypes.any,
}

export default SearchResultItem
