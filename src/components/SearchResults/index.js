/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import { locales } from 'config'
import shuffle from 'lodash/shuffle'
import SearchTerm from 'containers/SearchTerm'
import SearchCategories from 'containers/SearchCategories'

import Row from 'components/Row'
import Col from 'components/Col'
import Section from 'components/Section'
import SearchResultItem from 'components/SearchResultItem'
import FaqCard from 'components/FaqCard'
import GuideCard from 'components/GuideCard'
import WpCard from 'components/WpCard'
import ResultsHeading from './atoms/ResultsHeading'
import DefaultSearchResultsSection from './molecules/DefaultSearchResultsSection'
import ResultsGrid from './atoms/ResultsGrid'

const WrapperResults = styled.div``

const StyledSection = styled(Section)`
  &:nth-child(2n) {
    background: ${theme('colors.grayscale.lightest')};
  }
`

const Header = styled(Section)`
  padding-bottom: 0;
  border-bottom: 0.1rem solid ${theme('colors.grey')};
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

  &.qs-ColGrid--medium {
    ${breakpointMax('m')`
      padding: ${theme('spaces.s')} ${theme('spaces.xs')};
    `}
  }
`
const StyledFaqCard = styled(FaqCard)`
  ${breakpoint('l')`
    max-width: 22.5rem;
  `}
`

const NoResultWrapper = styled.div`
  background: ${theme('colors.grayscale.lightest')};
`

const NoResultsHeading = styled(ResultsHeading)`
  margin: 0;
  padding: ${theme('spaces.xl')} ${theme('spaces.m')} 0 ${theme('spaces.m')};

  ${breakpoint('m')`
    padding-left: ${theme('spaces.l')};
    padding-right: ${theme('spaces.l')};
    padding-top: ${theme('spaces.xxl')};
  `}

  ${breakpoint('l')`
    padding-left: 0;
    padding-right: 0;
  `}
`

const SearchResults = ({ translate, projectFlowResults, wordpressContentResultsByType, wpContentGuides, wpContentFaqs, searchCategory, query, locale }) => {
  const hasResults = projectFlowResults && projectFlowResults.hits.length !== 0

  const shuffledImages = shuffle(locales[locale].genericProjectImages)
  const projectFlowSectionEnabled = projectFlowResults && (!searchCategory || searchCategory === 'projects') && projectFlowResults.hits.length !== 0
  const weGuideYouSectionEnabled = wordpressContentResultsByType && (!searchCategory || ['guides', 'faqs'].includes(searchCategory)) && ((wordpressContentResultsByType.guides && wordpressContentResultsByType.guides.length !== 0) || (wordpressContentResultsByType.faqs && wordpressContentResultsByType.faqs.length !== 0))
  const articlesSectionEnabled = wordpressContentResultsByType && (!searchCategory || searchCategory === 'articles') && wordpressContentResultsByType.inspirations && wordpressContentResultsByType.inspirations.length !== 0

  return <WrapperResults>
    <Header>
      <ResultsGrid narrow>
        <StyledRow>
          <Col xs={12}>
            <SearchTerm term={query} />
          </Col>
          <Col xs={12}>
            {hasResults && <SearchCategories />}
          </Col>
        </StyledRow>
      </ResultsGrid>
    </Header>
    {projectFlowSectionEnabled && <StyledSection
      title={translate('search_page.result_section_title.projects')}
      subtitle={`${hasResults ? ` (${translate('search_page.result_section_title.results', { resultsCount: projectFlowResults.hits.length })})` : ''}`}
    >
      <ResultsGrid narrow>
        <Row>
          {projectFlowResults.hits.map(({ name, slug, id, image, _highlightResult }, i) =>
            <ColGrid xs={6} m={4} l={3} key={id} x>
              <SearchResultItem
                slug={slug}
                image={image || shuffledImages[i % shuffledImages.length]}
                alt={name}
                title={<div dangerouslySetInnerHTML={{ __html: _highlightResult.name.value }} />}
                tag={slug ? translate('search_page.tags.project') : null}
              />
            </ColGrid>,
          )}
        </Row>
      </ResultsGrid>
    </StyledSection>}
    {weGuideYouSectionEnabled && <StyledSection
      title={translate('search_page.result_section_title.we_guide_you')}
      subtitle={`<b>${wpContentGuides.length}</b> ${translate('search_page.category.guides.title', { contentNumber: wpContentGuides.length })} ${translate('search_page.category.and')} <b>${wpContentFaqs.length}</b> ${translate('search_page.category.faqs.title', { contentNumber: wpContentFaqs.length })}`}
    >
      <ResultsGrid narrow>
        <Row>
          {(!searchCategory || searchCategory === 'guides') &&
            wpContentGuides.map(({ title, content, id, image, image_meta, excerpt, link, type }) =>
              <ColGrid xs={12} m={8} l={6} key={id} >
                <GuideCard title={title} content={content} image={image} imageMeta={image_meta} description={excerpt} link={link} label={translate(`search_page.tags.${type}`)} />
              </ColGrid>
            )
          }
          {(!searchCategory || searchCategory === 'faqs') &&
            wpContentFaqs.map(({ title, id, link, type }) =>
              <ColGrid xs={6} m={4} l={3} key={id} >
                <StyledFaqCard title={title} link={link} label={translate(`search_page.tags.${type}`)} />
              </ColGrid>
            )
          }
        </Row>
      </ResultsGrid>
    </StyledSection>}
    {articlesSectionEnabled && <StyledSection
      title={translate('search_page.result_section_title.articles')}
    >
      <ResultsGrid narrow>
        <Row>
          {wordpressContentResultsByType.inspirations.map(({ title, id, image, image_meta, link, theme_inspirations, theme_icon_url, theme_color }) =>
            <ColGrid className="qs-ColGrid--medium" xs={12} m={6} l={4} key={id} >
              <WpCard title={title} image={image} imageMeta={image_meta} link={link} themeInspirations={theme_inspirations} themeColor={theme_color} themeIconUrl={theme_icon_url} />
            </ColGrid>
          )
          }
        </Row>
      </ResultsGrid>
    </StyledSection>}
    {(projectFlowResults && projectFlowResults.hits.length === 0) &&
      <NoResultWrapper>
        {projectFlowResults &&
        projectFlowResults.hits.length === 0 &&
        <ResultsGrid narrow>
          <Row>
            <NoResultsHeading level={3}>
              {translate('search_page.no_result_title')}
            </NoResultsHeading>
          </Row>
        </ResultsGrid>}
        <DefaultSearchResultsSection locale={locale} />
      </NoResultWrapper>
    }
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
}

export default injectTranslate(SearchResults)
