import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import cloudinary from 'utils/cloudinary'

import { Grid, Row, Col, ThumbnailPoster, Heading, Link, Icon, Divider, SearchSuggestions } from 'components'

const WrapperResults = styled.div`
  max-width: 110rem;
  margin: ${theme('spaces.xxl')} auto 0 auto;
  padding-left: ${theme('spaces.m')};
  padding-right: ${theme('spaces.m')};

  ${breakpoint('xl')`
    padding-left: 0;
    padding-right: 0;
  `}
`

const StyledThumbnailPoster = styled(ThumbnailPoster)`
  transform: translateY(0);
  transition: all 0.3s ease;

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

const StyledGrid = styled(Grid)`
  max-width: 110rem;
`

const ColGrid = styled(Col)`
  max-width: 20rem;
  padding: ${theme('spaces.xs')};

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
    animation: 1s hide linear, 0.3s fade ease-in 1s;

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

    .circle-arrow {
      fill: ${theme('colors.primary')};
    }
  `}

  ${breakpoint('xl')`
    padding-top: ${theme('spaces.xxl')};
  `}
`

const StyledDivider = styled(Divider)`
  ${breakpointMax('m')`
    display: none;
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

const Wrapper = styled.div``

const SearchResultsModal = ({ translate, results, query, nbHits, featureSearchSuggestionsEnabled }) =>
  <WrapperResults>
    {(!results || results.length === 0) &&
      <Wrapper>
        {results &&
          results.length === 0 &&
          <ResultsHeading level={3}>
            {translate('search_page.no_result_title')}
          </ResultsHeading>}
        {featureSearchSuggestionsEnabled && <div>
          <ResultsHeading level={3}>
            {translate('search_page.result_section_title.projects_default')}
          </ResultsHeading>
          <SearchSuggestions />
        </div>}
      </Wrapper>}
    {!results &&
      featureSearchSuggestionsEnabled &&
      <Wrapper>
        {translate('search_page.see_more_projects')}
        <Link>cross project 1</Link>
      </Wrapper>}
    {results &&
      results.length > 0 &&
      <Wrapper>
        <ResultsHeading level={3}>
          {translate('search_page.your_search')}
        </ResultsHeading>
        <StyledGrid narrow>
          <Row>
            {results.filter((el, index) => index < 5).map(({ name, slug, id, _highlightResult }) =>
              <ColGrid xs={6} m={4} l={3} key={id} x>
                <StyledThumbnailPoster
                  isHtml
                  image={{ src: cloudinary('/icons/placeholder-logo.png'), alt: name }}
                  title={_highlightResult.name.value}
                  height="m"
                  className="result"
                >
                  <Link to={`/project-elaboration?slug=${slug}`}>
                    <StyledIcon icon="circle-arrow" className="qs-icon" />
                  </Link>
                </StyledThumbnailPoster>
              </ColGrid>,
            )}
          </Row>
        </StyledGrid>
      </Wrapper>}
    {results &&
      results.length > 0 &&
      nbHits > 5 &&
      <Wrapper>
        <MoreResultsBlock>
          <StyledDivider />
          <LinkBlock to={`search-result?q=${query}`}>
            <p>
              {translate('search_page.see_all_results')} <span>({nbHits})</span>
            </p>
            <MoreResultsIcon icon="circle-arrow" />
          </LinkBlock>
        </MoreResultsBlock>
      </Wrapper>}
  </WrapperResults>

SearchResultsModal.propTypes = {
  translate: PropTypes.func.isRequired,
  results: PropTypes.array,
  query: PropTypes.string.isRequired,
  nbHits: PropTypes.number,
  featureSearchSuggestionsEnabled: PropTypes.bool,
}

export default injectTranslate(SearchResultsModal)
