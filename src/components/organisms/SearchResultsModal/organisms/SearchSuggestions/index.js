import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import { locales } from 'config'

import { Row, Col, Grid, SearchResultItem } from 'components'

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

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    max-width: 22.49rem;
  }
`

const SearchSuggestions = ({ locale }) => {

  const suggestions = locales[locale].searchSuggestions.primary

  return (
    <StyledGrid narrow>
      <Row>
        {suggestions.map(({ title, imageUrl, tag, slug }, index) =>
          <ColGrid key={index} xs={6} m={4} l={3} order={index} x>
            <SearchResultItem
              slug={slug}
              image={imageUrl}
              alt={title}
              title={title}
              tag={tag}
              className="result"
            />
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
