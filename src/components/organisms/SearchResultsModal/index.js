import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import { locales } from 'config'
import shuffle from 'lodash/shuffle'

import { Grid, Row, Col, Heading, Link, Icon, Divider, SearchSuggestions, SearchSuggestionsText, SearchResultItem } from 'components'

const WrapperResults = styled.div`
  max-width: 110rem;
  margin: ${theme('spaces.xxl')} auto 0 auto;
  padding-left: ${theme('spaces.m')};
  padding-right: ${theme('spaces.m')};

  ${breakpoint('xl')`
    padding-left: 0;
    padding-right: 0;
  `};
`

const StyledGrid = styled(Grid)`
  max-width: 110rem;
`
const animationDelay = props => `${props.order * 0.125}s`
const ColGrid = styled(Col)`
  max-width: 20rem;
  padding: ${theme('spaces.xs')};
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

  ${breakpoint('l')`
    padding-left: calc(${theme('spaces.l')} / 2);
    padding-right: calc(${theme('spaces.l')} / 2);

    &:first-child {
      padding-left: ${theme('spaces.l')};
    }

    &:last-child {
      padding-right: ${theme('spaces.l')};
    }
  `}

  ${breakpoint('xl')`
    max-width: 22.5rem;
  `}

  ${breakpoint('m')`
    padding-bottom: calc(${theme('spaces.l')} / 2);
    padding-top: calc(${theme('spaces.l')} / 2);
  `}

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    max-width: 22.49rem;
  }
`

const ResultsHeading = styled(Heading)`
  font-family: ${theme('fonts.family.montserrat')};
  font-weight: bold;

  ${breakpoint('l')`
    padding-left: calc(${theme('spaces.l')} / 2);
    padding-right: calc(${theme('spaces.l')} / 2);
  `}
`

const MoreResultsBlock = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpointMax('m')`
    position: relative;
    margin-left: calc(50% + ${theme('spaces.xs')});
    margin-top: -25.4rem;
    height: 25rem;
    width: calc(50% - ${theme('spaces.s')});
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: ${theme('spaces.s')};
    background-color: ${theme('colors.primary')};

    .circle-arrow {
      fill: ${theme('colors.white')};
    }
  `} 

  ${breakpoint('m')`
    padding-top: ${theme('spaces.l')};

    > a{
      animation: 0.25s hide linear, 0.5s fade ease-in 0.25s;

      @keyframes hide {
        from {
          opacity: 0;
        }
        to {
          opacity: 0;
        }
      }

      @keyframes fade {
        0% {
          opacity: 0;
          transform: translateY(50%);
        }

        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    .circle-arrow {
      fill: ${theme('colors.primary')};
    }
  `} 

  ${breakpoint('xl')`
    padding-top: ${theme('spaces.xxl')};
  `};
`

const StyledDivider = styled(Divider)`
  ${breakpointMax('m')`
    display: none;
  `}

  ${breakpoint('m')`
    transform-origin: 100% 50%;
    animation: 0.25s hide linear, 0.3s scale ease-in 0.25s;

    @keyframes hide {
      from {
        opacity: 0;
      }
      to {
        opacity: 0;
      }
    }

    @keyframes scale {
      0% {
        transform: scale(0);
      }

      100% {
        transform: scale(1);
      }
    }
  `}
`

const LinkBlock = styled(Link)`
  display: flex;
  font-size: ${theme('fonts.size.base')};
  font-weight: bold;

  p{
    margin: 0;

    span {
      display: block;
      color: ${theme('colors.grayscale.medium')};
    }
  }

  ${breakpointMax('m')`
    flex-direction: column;
    align-items: center;
    color: ${theme('colors.white')};
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.38);
    text-align: center;
  `}
  
  ${breakpoint('m')`
    position: relative;
    margin: ${theme('spaces.l')} 0;
    justify-content: flex-end;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    font-size: ${theme('fonts.size.l')};
    text-align: right;
    color: ${theme('colors.primary')};
  `}
`

const MoreResultsIcon = styled(Icon)`
  z-index: 2;
  height: ${theme('icons.size.xl')};
  width: ${theme('icons.size.xl')};

  ${breakpointMax('m')`
    margin-top: ${theme('spaces.m')};
  `}
  
  ${breakpoint('m')`
    margin-left: ${theme('spaces.m')};
    height: ${theme('icons.size.xxl')};
    width: ${theme('icons.size.xxl')};
  `}
`

const SearchResultsModal = ({ locale, translate, results, query, nbHits }) => {

  const shuffledImages = shuffle(locales[locale].genericProjectImages)

  return(
    <WrapperResults>
    {(!results || results.length === 0) &&
      <div>
        {results &&
          results.length === 0 &&
          <ResultsHeading level={3}>
            {translate('search_page.no_result_title')}
          </ResultsHeading>}
          <div>
            <ResultsHeading level={3}>
              {translate('search_page.result_section_title.projects_default')}
            </ResultsHeading>
            <SearchSuggestions locale={locale} />
          </div>
      </div>}
    {!results &&
      <SearchSuggestionsText locale={locale} />}
    {results &&
      results.length > 0 &&
      <div>
        <ResultsHeading level={3}>
          {translate('search_page.your_search')}
        </ResultsHeading>
        <StyledGrid narrow>
          <Row>
            {results.filter((el, index) => index < 5).map(({ name, slug, id, image, _highlightResult }, i) =>
              <ColGrid xs={6} m={4} l={3} order={i} key={id} x>
                <SearchResultItem
                  slug={slug}
                  image={image || shuffledImages[i % shuffledImages.length]}
                  alt={name}
                  title={<div dangerouslySetInnerHTML={{ __html: _highlightResult.name.value }} />}
                />
              </ColGrid>,
            )}
          </Row>
        </StyledGrid>
      </div>}
    {results &&
      results.length > 0 &&
      nbHits > 5 &&
      <div>
        <MoreResultsBlock>
          <StyledDivider />
          <LinkBlock to={`search-result?q=${query}`}>
            <p>
              {translate('search_page.see_all_results')} <span>({nbHits})</span>
            </p>
            <MoreResultsIcon icon="circle-arrow" />
          </LinkBlock>
        </MoreResultsBlock>
      </div>}
  </WrapperResults>
  )
}

SearchResultsModal.propTypes = {
  locale: PropTypes.string,
  translate: PropTypes.func.isRequired,
  results: PropTypes.array,
  query: PropTypes.string.isRequired,
  nbHits: PropTypes.number,
}

export default injectTranslate(SearchResultsModal)
