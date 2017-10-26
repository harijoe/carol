import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import { locales } from 'config'
import shuffle from 'lodash/shuffle'

import { Row, Col, Section, SearchResultItem, DefaultSearchResultsSection, ResultsGrid, NoResultsSection } from 'components'

import { SearchTerm, SearchCategories } from 'containers'

const WrapperResults = styled.div``

const Header = styled(Section)`
  border-bottom: 0.1rem solid ${theme('colors.grey')};

  ${breakpoint('l')`
    padding-bottom: ${theme('spaces.xxl')};
  `}
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

  ${breakpoint('l')`
    max-width: 22.5rem;
  `}
`

const SearchResults = ({ translate, projectFlowResults, wordpressContentResultsByType, wpContentGuides, wpContentFaqs, searchCategory, query, locale, isWordpressContentEnabled }) => {
  const hasResults = !projectFlowResults || projectFlowResults.length === 0

  const shuffledImages = shuffle(locales[locale].genericProjectImages)
  const projectFlowSectionEnabled = projectFlowResults && (!isWordpressContentEnabled || (!searchCategory || searchCategory === 'projects')) && projectFlowResults.hits.length !== 0
  const weGuideYouSectionEnabled = isWordpressContentEnabled && wordpressContentResultsByType && (!searchCategory || ['guides', 'faqs'].includes(searchCategory)) && ((wordpressContentResultsByType.guides && wordpressContentResultsByType.guides.length !== 0) || (wordpressContentResultsByType.faqs && wordpressContentResultsByType.faqs.length !== 0))
  const articlesSectionEnabled = isWordpressContentEnabled && wordpressContentResultsByType && (!searchCategory || searchCategory === 'articles') && wordpressContentResultsByType.inspirations && wordpressContentResultsByType.inspirations.length !== 0

  return <WrapperResults>
    <Header>
      <ResultsGrid narrow>
        <StyledRow>
          <Col xs={12}>
            <SearchTerm term={query} />
          </Col>
        </StyledRow>
      </ResultsGrid>
    </Header>
    {isWordpressContentEnabled && <SearchCategories />}
    {projectFlowSectionEnabled && <Section
      light
      title={translate('search_page.result_section_title.projects')}
      subtitle={`${!hasResults ? ` (${translate('search_page.result_section_title.results', { resultsCount: projectFlowResults.hits.length })})` : ''}`}
    >
      <ResultsGrid narrow>
        <Row>
          {projectFlowResults.hits.slice(0, 8).map(({ name, slug, id, image }, i) =>
            <ColGrid xs={6} m={4} l={3} key={id} x>
              <SearchResultItem
                slug={slug}
                image={image || shuffledImages[i % shuffledImages.length]}
                alt={name}
                title={name}
                query={query}
              />
            </ColGrid>,
          )}
        </Row>
      </ResultsGrid>
    </Section>}
    {weGuideYouSectionEnabled && <Section
      title={translate('search_page.result_section_title.we_guide_you')}
      subtitle={`<em>${wpContentGuides.length}</em> ${translate('search_page.category.project_page.title', { contentNumber: wpContentGuides.length })} et <em>${wpContentFaqs.length}</em> ${translate('search_page.category.faqs.title', { contentNumber: wpContentFaqs.length })}`}
    >
      <ResultsGrid narrow>
        <Row>
          {(!searchCategory || searchCategory === 'guides') && <div>
            Guides: (keys available : title, image, description, type)
            {wpContentGuides.slice(0, 2).map(({ title }) => <div key={title}>{title}</div>)}
          </div>}
        </Row>
        <Row>
          {(!searchCategory || searchCategory === 'faqs') && <div>
            Faqs:
            {wpContentFaqs.slice(0, 4).map(({ title }) => <div key={title}>{title}</div>)}
          </div>}
        </Row>
      </ResultsGrid>
    </Section>}
    {articlesSectionEnabled && <Section
      title={translate('search_page.result_section_title.articles')}
    >
      <ResultsGrid narrow>
        <Row>
          {wordpressContentResultsByType.inspirations.map(({ title }) => <div key={title}>{title}</div>)}
        </Row>
      </ResultsGrid>
    </Section>}
    {projectFlowResults && projectFlowResults.hits.length === 0 &&
    <NoResultsSection />}
    {!projectFlowResults && <DefaultSearchResultsSection locale={locale} />}
  </WrapperResults>
}

SearchResults.propTypes = {
  translate: PropTypes.func.isRequired,
  projectFlowResults: PropTypes.object,
  query: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  wordpressContentResultsByType: PropTypes.object,
  wpContentGuides: PropTypes.array,
  wpContentFaqs: PropTypes.array,
  searchCategory: PropTypes.func,
  isWordpressContentEnabled: PropTypes.bool,
}

export default injectTranslate(SearchResults)
