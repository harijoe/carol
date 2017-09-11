import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import { locales } from 'config'

import { Row, Col, Grid, ThumbnailPoster, Link, Icon, Tag } from 'components'

const StyledGrid = styled(Grid)`
  max-width: 110rem;
`
const animationDelay = props => `${props.order * 0.125}s`

const ColGrid = styled(Col)`
  max-width: 22.5rem;
  animation: ${animationDelay} hide ease, 0.3s suggestions ease ${animationDelay};

  @keyframes hide {
    from {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes suggestions {
    0% {
      opacity: 0;
      transform: translateY(15%);
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateY(0);
    }
  }

  ${breakpointMax('m')`
    padding: ${theme('spaces.xs')};
  `}

  ${breakpoint('m')`
    padding-bottom: calc(${theme('spaces.l')} / 2);
    padding-top: calc(${theme('spaces.l')} / 2);
  `}
`

const StyledThumbnailPoster = styled(ThumbnailPoster)`
  transform: translateY(0);
  transition: all 0.3s ease;
  box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, 0.15);

  &::before {
    transition: all 0.3s ease;
  }

  h3 {
    margin-bottom: -6.4rem;
    transform: translateY(0);
    transition: all 0.6s 0.1s ease;
  }

  em {
    color: ${theme('colors.white')};
    background-color: ${theme('colors.primary')};
    font-style: normal;
  }

  &:hover {
    ${breakpoint('xl')`
      box-shadow: 4px 10px 40px 0 rgba(19, 19, 19, 0.4);

      &, h3 {
        margin-bottom: 0;
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
    `};
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
  transform: translateY(150%);
  transition: all 0.6s 0.1s ease;
`

const WrapperTag = styled.div`
  position: absolute;
  z-index: 10;
  left: ${theme('spaces.s')};
  bottom: ${theme('spaces.s')};
`

const StyledTag = styled(Tag)`
  position: absolute;
  left: 2.5rem;
  bottom: 2.5rem;
`

const SearchSuggestions = ({ locale }) => {

  const suggestions = locales[locale].searchSuggestions.primary

  return(
  <StyledGrid narrow>
    <Row>
      {suggestions.map(({ title, imageUrl, tag, slug }, index) =>
        <ColGrid key={index} xs={6} m={4} l={3} order={index} x>
          <StyledThumbnailPoster
            image={{
              src: imageUrl,
              alt: title,
            }}
            height="m"
            title={title}
            className="result"
          >
            <Link to={`/project-elaboration?slug=${slug}`}>
              <StyledIcon icon="circle-arrow" className="qs-icon" />
            </Link>
            <WrapperTag>
              <StyledTag label={tag} />
            </WrapperTag>
          </StyledThumbnailPoster>
        </ColGrid>
      )}
    </Row>
  </StyledGrid>
  )
}

SearchSuggestions.propTypes = {
  locale: PropTypes.string,
}

export default SearchSuggestions
