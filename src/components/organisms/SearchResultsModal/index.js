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

const ResultsHeading = styled(Heading)`
  font-family: ${theme('fonts.family.montserrat')};
  font-weight: bold;
`

const MoreResultsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${theme('spaces.l')};
  .circle-arrow {
    fill: ${theme('colors.primary')};
  }
`

const LinkBlock = styled(Link)`
  position: relative;
  width: 100%;
  text-align: right;
  font-weight: bold;
  font-size: ${theme('fonts.size.l')};
  color: ${theme('colors.primary')};
  > span {
    margin-top: 20px;
    color: ${theme('colors.grayscale.medium')};
  }
`

const MoreResultsIcon = styled(Icon)`
  z-index: 2;
  height: ${theme('icons.size.xxl')};
  width: ${theme('icons.size.xxl')};
  margin-top: ${theme('spaces.m')};
  margin-bottom: calc(${theme('spaces.xl')} * 2);
  margin-left: ${theme('spaces.m')};
  transform: translateY(${theme('icons.size.m')});
`

const Wrapper = styled.div``

const SearchResultsModal = ({ translate, results, query, nbHits }) =>
  <WrapperResults>
    {(!results || results.length === 0) &&
      <Wrapper>
        {results &&
          results.length === 0 &&
          <ResultsHeading level={3}>
            {translate('search_page.no_result')}
          </ResultsHeading>}
        <ResultsHeading level={3}>
          {translate('search_page.result_section_title.projects_default')}
        </ResultsHeading>
        <SearchSuggestions />
      </Wrapper>}
    {!results &&
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
        <Divider />
        <MoreResultsBlock>
          <LinkBlock to={`search-result?q=${query}`}>
            {translate('search_page.see_all_results')} <span>({nbHits})</span>
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
}

export default injectTranslate(SearchResultsModal)
