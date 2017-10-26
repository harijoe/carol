import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { Grid, Row, Col, Heading, Link } from 'components'

const StyledWrapper = styled.div`
  position: relative;
  background-color: ${theme('colors.grey')};
  height: 10rem;
  margin-bottom: 1em;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${theme('colors.primary')};
  }  
  
`

const StyledImage = styled.div`
  ${({ imageUrl }) => css`
    height: 10rem;
    background-image: url(${imageUrl});
    background-size: cover;
  `};
`

const StyledHeading = styled(Heading)`
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 10rem;
  overflow: hidden;
  color: ${theme('colors.black')};
  text-overflow: ellipsis;
  z-index: 2;
  padding: ${theme('spaces.l')};
  font-size: ${theme('fonts.size.m')};

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.l')};
  `}
  
  &:hover {
    color: ${theme('colors.white')};
  }   
  
`

const StyledLink = styled(Link)`
`

const SearchResultContentItem = ({ title, image, link }) => (
    <StyledLink to={link}>
      <StyledWrapper>
        <Grid>
          <Row>
            {image && <Col xs={3} m={3} l={3}>
              <StyledImage imageUrl={image} />
            </Col>}
            <Col xs={image ? 9 : 12} m={image ? 9 : 12} l={image ? 9 : 12}>
              <StyledHeading>{title}</StyledHeading>
            </Col>
          </Row>
        </Grid>
      </StyledWrapper>
    </StyledLink>
  )

SearchResultContentItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
}

export default SearchResultContentItem
