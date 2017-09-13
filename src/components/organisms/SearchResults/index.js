import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import { locales } from 'config'
import shuffle from 'lodash/shuffle'

import { Grid, Row, Col, Section, Heading, Paragraph, SearchSuggestions, SearchResultItem } from 'components'

import { SearchTerm } from 'containers'

const WrapperResults = styled.div``

const Header = styled(Section)`
  border-bottom: 0.1rem solid ${theme('colors.grey')};

  ${breakpoint('l')`
    padding-bottom: ${theme('spaces.xxl')};
  `}
`

const StyledGrid = styled(Grid)`
  max-width: 85rem;
`

const StyledRow = styled(Row)`
  align-items: flex-end;
`
const animationDelay = props => `${props.order * 0.125}s`

const ColGrid = styled(Col)`
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

const StyledHeading = styled(Heading)`
  font-size:  ${theme('fonts.size.xxl')};
`

const SubHeading = styled(Paragraph)`
  font-family:  ${theme('fonts.family.andesLight')};
  font-size:  ${theme('fonts.size.xl')};
`

const ResultsHeading = styled(Heading)`
  font-family: ${theme('fonts.family.montserrat')};
  font-weight: bold;

  ${breakpoint('l')`
    padding-left: calc(${theme('spaces.l')} / 2);
    padding-right: calc(${theme('spaces.l')} / 2);
  `}
`

const SearchResults = ({ translate, results, query, locale }) => {
  const hasResults = !results || results.length === 0

  const shuffledImages = shuffle(locales[locale].genericProjectImages)

  return <WrapperResults>
    <Header>
      <StyledGrid narrow>
        <StyledRow>
          <Col xs={12} l={9}>
            <SearchTerm term={query} />
          </Col>
        </StyledRow>
      </StyledGrid>
    </Header>
    {results &&
    <Section
      light
      title={translate('search_page.result_section_title.projects')}
      subtitle={`${!hasResults ? ` (${translate('search_page.result_section_title.results', {resultsCount: results.length})})` : ''}`}
    >
      <StyledGrid narrow>
        <Row>
          {results.map(({name, slug, id, image, _highlightResult}, i) =>
            <ColGrid xs={6} m={4} l={3} key={id} x>
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
    </Section>}
    {results && results.length === 0 &&
    <Section light>
      <StyledGrid narrow>
        <Row column>
          <StyledHeading level={3}>
            {translate('search_page.no_result_title')}
          </StyledHeading>
          <SubHeading>
            {translate('search_page.no_result_subtitle')}
          </SubHeading>
        </Row>
      </StyledGrid>
    </Section>}
      { !results &&
        <Section light>
          <StyledGrid narrow>
            <Row column>
              <ResultsHeading level={3}>
                {translate('search_page.result_section_title.projects_default')}
              </ResultsHeading>
              <SearchSuggestions locale={locale} />
            </Row>
          </StyledGrid>
        </Section>
      }
  </WrapperResults>
}

SearchResults.propTypes = {
  translate: PropTypes.func.isRequired,
  results: PropTypes.array,
  query: PropTypes.string,
  locale: PropTypes.string,
}

export default injectTranslate(SearchResults)
