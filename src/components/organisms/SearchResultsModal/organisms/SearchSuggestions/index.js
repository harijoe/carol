import React from 'react'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import { Row, Col, Grid, ThumbnailPoster, Link, Icon, Tag } from 'components'

const StyledGrid = styled(Grid)`
  max-width: 110rem;
`

const ColGrid = styled(Col)`

  max-width: 22.5rem;

  ${breakpointMax('m')`
    padding: ${theme('spaces.xs')};
  `}

  ${breakpoint('m')`
    padding-bottom: calc(${theme('spaces.l')} / 2);
    padding-top: calc(${theme('spaces.l')} / 2);
  `}
`

const StyledThumbnailPoster = styled(ThumbnailPoster)`
  box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, 0.15);
  transform: translateY(0);
  transition: all 0.3s ease;

  &::before {
    transition: all 0.3s ease;
  }

  h3 {
    transform: translateY(0);
    transition: all 0.6s 0.1s ease;
  }

  em {
    color: ${theme('colors.white')};
    background-color: ${theme('colors.primary')};
    font-style: normal;
  }

  &:hover {
    box-shadow: 4px 10px 40px 0 rgba(19, 19, 19, 0.4);

    &, h3 {
      transform: translateY(-${theme('spaces.l')});
    }

    &::before {
      background: ${theme('colors.primary')};
      opacity: 0.85;
    }

    .qs-icon {
      margin-bottom: 0;
      opacity: 1;
      transform: translateY(-${theme('spaces.m')});
    }
  }
`

const StyledIcon = styled(Icon)`
  position: relative;
  z-index: 2;
  height: ${theme('icons.size.xxl')};
  width: ${theme('icons.size.xxl')};
  margin-top: ${theme('spaces.m')};
  margin-bottom: -6.4rem;
  opacity: 0;
  transform: translateY(${theme('spaces.m')});
  transition: all 0.6s 0.1s ease;
`

const WrapperTag = styled.div`
  position: absolute;
  left: 1rem;
  bottom: 1rem;
`

const StyledTag = styled(Tag)`
  position: absolute;
  left: 2.5rem;
  bottom: 2.5rem;
`

const SearchSuggestions = () =>
  <StyledGrid narrow>
    <Row>
      <ColGrid xs={6} m={4} l={2.5} x>
        <StyledThumbnailPoster>
          Project 1
          <Link>
            <StyledIcon icon="circle-arrow" className="qs-icon" />
          </Link>
          <WrapperTag>
            <StyledTag label={'Sample Label'} />
          </WrapperTag>
        </StyledThumbnailPoster>
      </ColGrid>
      <ColGrid xs={6} m={4} l={2.5} x>
        <StyledThumbnailPoster>
          Project 2
          <Link>
            <StyledIcon icon="circle-arrow" className="qs-icon" />
          </Link>
          <WrapperTag>
            <StyledTag label={'Sample Label'} />
          </WrapperTag>
        </StyledThumbnailPoster>
      </ColGrid>
      <ColGrid xs={6} m={4} l={2.5} x>
        <StyledThumbnailPoster>
          Project 3
          <Link>
            <StyledIcon icon="circle-arrow" className="qs-icon" />
          </Link>
          <WrapperTag>
            <StyledTag label={'Sample Label'} />
          </WrapperTag>
        </StyledThumbnailPoster>
      </ColGrid>
      <ColGrid xs={6} m={4} l={2.5} x>
        <StyledThumbnailPoster>
          Project 4
          <Link>
            <StyledIcon icon="circle-arrow" className="qs-icon" />
          </Link>
          <WrapperTag>
            <StyledTag label={'Sample Label'} />
          </WrapperTag>
        </StyledThumbnailPoster>
      </ColGrid>
      <ColGrid xs={6} m={4} l={2.5} x>
        <StyledThumbnailPoster>
          Project 5
          <Link>
            <StyledIcon icon="circle-arrow" className="qs-icon" />
          </Link>
          <WrapperTag>
            <StyledTag label={'Sample Label'} />
          </WrapperTag>
        </StyledThumbnailPoster>
      </ColGrid>
    </Row>
  </StyledGrid>

SearchSuggestions.propTypes = {}

export default SearchSuggestions
