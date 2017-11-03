import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { Heading, Link } from 'components'

const StyledWrapper = styled.article`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  background-color: ${theme('colors.grey')};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(19, 19, 19, 0.25);
  }
`

const StyledImage = styled.figure`
  ${({ imageUrl }) => css`
    flex-grow: 1;
    min-height: 8rem;
    width: 8rem;
    max-width: 8rem;
    background-image: url(${imageUrl});
    background-size: cover;
  `};
`

const StyledHeading = styled(Heading)`
  position: relative;
  flex-grow: 1;
  margin: 0;
  min-height: 8rem;
  width: calc(100% - 8rem);
  overflow: hidden;
  text-overflow: ellipsis;
  padding: ${theme('spaces.m')};
  font-size: ${theme('fonts.size.m')};
  transition: color 0.3s ease;

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.l')};
  `}
  
  &:hover {
    color: ${theme('colors.primary')};
  }   
  
`

const StyledLink = styled(Link)`
  display: block;
  margin-bottom: ${theme('spaces.m')};
`

const SearchResultContentItem = ({ title, image, link }) => (
    <StyledLink to={link}>
      <StyledWrapper>
        {image &&
          <StyledImage imageUrl={image} />
        }
        <StyledHeading level={3}>{title}</StyledHeading>
      </StyledWrapper>
    </StyledLink>
  )

SearchResultContentItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
}

export default SearchResultContentItem
