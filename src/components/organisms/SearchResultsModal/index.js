import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import { locales } from 'config'
import shuffle from 'lodash/shuffle'
import wordpressContentCategories from 'constants/wordpress-content-categories'

import { Grid, Row, Col, Link, Icon, Divider, SearchSuggestions, SearchSuggestionsText, SearchResultItem, SearchResultContentItem, ResultsHeading, IconLink } from 'components'

const WrapperResults = styled.div`
  max-width: 110rem;
  margin: ${theme('spaces.l')} auto 0 auto;
  padding-left: ${theme('spaces.m')};
  padding-right: ${theme('spaces.m')};
  padding-bottom: ${theme('spaces.m')}; 

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

const ColContent = styled(Col)`
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

`

const MoreResultsBlock = styled.div`
  display: flex;
  flex-direction: column; 
  .circle-arrow {
    fill: ${theme('colors.primary')};
  }
  ${breakpoint('m')`
    padding-top: ${theme('spaces.l')};
    .circle-arrow {
      fill: ${theme('colors.primary')};
    }
  `}; 

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
  justify-content: flex-end;
  flex-wrap: nowrap;
  align-items: center;  
  font-size: ${theme('fonts.size.base')};
  font-weight: bold;
  position: relative;
  margin: ${theme('spaces.l')} 0;
  width: 100%;
  font-size: ${theme('fonts.size.l')};
  text-align: right;
  color: ${theme('colors.primary')};  

  p{
    margin: 0;

    span {
      display: block;
      color: ${theme('colors.grayscale.medium')};
    }
  }
`

const MoreResultsIcon = styled(Icon)`
  z-index: 2;
  height: ${theme('icons.size.xl')};
  width: ${theme('icons.size.xl')};
  margin-left: ${theme('spaces.m')};

  ${breakpointMax('m')`
    margin-top: ${theme('spaces.m')};
  `}
  
  ${breakpoint('m')`
    margin-left: ${theme('spaces.m')};
    height: ${theme('icons.size.xxl')};
    width: ${theme('icons.size.xxl')};
  `}
`

const StyledIconLink = styled(IconLink)`
  line-height: ${theme('spaces.m')};
  transition: all 0.2s ease;
  display: block;
  margin-bottom: ${theme('spaces.m')};
  color: ${theme('colors.grayscale.dark')};
  
  span {
    vertical-align: top;

    &:first-child {
      margin-right: ${theme('spaces.m')};
      height: 9px;
      width: 23px;
    }
  }

  &:hover {
    color: ${theme('colors.secondary')};

    path {
      fill: ${theme('colors.secondary')};
    }
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  margin-top: ${theme('spaces.m')};

  ${breakpoint('m')`
    margin-top: calc(${theme('spaces.l')} / 2);
  `} 
`

const ContentItem = styled.div`
  ${breakpoint('m')`
    a:last-child {
      margin-bottom: 0;
    }
  `} 
`

const SearchResultsModal = ({ locale, translate, projectFlowResults, query, isWordpressContentEnabled, wordpressContentResultsByType }) => {

  const shuffledImages = shuffle(locales[locale].genericProjectImages)
  let nbHitsTotal = 0

  return (
    <WrapperResults>
    {(!projectFlowResults || projectFlowResults.hits.length === 0) &&
      <div>
        {projectFlowResults &&
          projectFlowResults.hits.length === 0 &&
          <ResultsHeading level={3}>
            {translate('search_page.no_result_title')}
          </ResultsHeading>}
        <SearchSuggestions locale={locale} />
      </div>}
    {!projectFlowResults &&
      <SearchSuggestionsText locale={locale} />}
    {projectFlowResults &&
      projectFlowResults.hits.length > 0 &&
      <div>
        <StyledIconLink right to={`search-result?q=${query}&category=project`} icon="front_arrow">
          {translate('search_page.see_sample_result')} <strong>{projectFlowResults.hits.length}</strong> {translate('search_page.category.project.title', { contentNumber: projectFlowResults.hits.length })}
        </StyledIconLink>
        <StyledGrid narrow>
          <Row>
            {projectFlowResults.hits.filter((el, index) => index < 5).map(({ name, slug, id, image, _highlightResult }, i) =>
              <ColGrid xs={6} m={4} l={3} order={i} key={id} >
                <SearchResultItem
                  slug={slug}
                  image={image || shuffledImages[i % shuffledImages.length]}
                  alt={name}
                  title={<div dangerouslySetInnerHTML={{ __html: _highlightResult.name.value }} />}
                />
              </ColGrid>
            )}
          </Row>
        </StyledGrid>
      </div>}
      {isWordpressContentEnabled && wordpressContentResultsByType &&
      <div>
        <ContentWrapper>
          <Grid>
            <Row>
              {Object.keys(wordpressContentCategories).map(key => {

                const nbHits = wordpressContentCategories[key].reduce((acc, type) => {

                  const results = wordpressContentResultsByType[type]
                  return acc + (results ? results.length : 0) || 0
                }, 0)

                nbHitsTotal += nbHits

                if (!nbHits) return null

                const wordpressContentResultsByCategories = wordpressContentCategories[key].reduce((acc, type) => {

                  const results = wordpressContentResultsByType[type]
                  return acc.concat(results)
                }, [])

                return <ColContent xs={12} m={6} l={4} order={key} key={key}>
                  <ContentItem>
                    <StyledIconLink right to={`search-result?q=${query}&category=${key}`} icon="front_arrow">
                      {translate('search_page.see_sample_result')} <strong>{nbHits}</strong> {translate(`search_page.category.${key}.title`, { contentNumber: nbHits })}
                    </StyledIconLink>
                    {wordpressContentResultsByCategories.slice(0, 2).map((el, i) =>
                      <SearchResultContentItem key={i} title={el.title} image={el.image} link={el.link} />
                    )}
                  </ContentItem>
                </ColContent>
              })}
            </Row>
          </Grid>
        </ContentWrapper>
      </div>
      }
      {projectFlowResults &&
      projectFlowResults.hits.length > 0 &&
      projectFlowResults.nbHits > 5 &&
      <div>
        <MoreResultsBlock>
          <StyledDivider />
          <LinkBlock to={`search-result?q=${query}`}>
            <p>
              {translate('search_page.see_all_results')} <span>({ projectFlowResults.nbHits + nbHitsTotal})</span>
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
  projectFlowResults: PropTypes.object,
  query: PropTypes.string.isRequired,
  isWordpressContentEnabled: PropTypes.bool,
  wordpressContentResultsByType: PropTypes.object,
}

export default injectTranslate(SearchResultsModal)
