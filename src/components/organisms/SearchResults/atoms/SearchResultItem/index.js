import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Icon } from 'components'

const StyledListItem = styled.li`
  background: white;
  height: 7rem;
  margin: 9px;
  padding: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

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

const SearchResultItem = ({ name, _highlightResult: { name: { value } } }) => (
  <StyledListItem>
    <StyledIcon size={70} icon="quotatis" />
    { value != null ? <StyledLabel dangerouslySetInnerHTML={{ __html: value }} /> : <StyledLabel>{name}</StyledLabel> }
  </StyledListItem>
)

SearchResultItem.propTypes = {
  name: PropTypes.string,
  _highlightResult: PropTypes.any,
}

export default SearchResultItem
