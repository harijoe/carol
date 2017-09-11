import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import cloudinary from 'utils/cloudinary'

import { Grid, Row, Col, Section, ThumbnailPoster, Heading, Paragraph, Link, Icon } from 'components'

import { SearchTerm } from 'containers'

const WrapperResults = styled.div``

const Header = styled(Section)`
  border-bottom: 0.1rem solid ${theme('colors.grey')};

  ${breakpoint('l')`
    padding-bottom: ${theme('spaces.xxl')};
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

const StyledGrid = styled(Grid)`
  max-width: 85rem;
`

const StyledRow = styled(Row)`
  align-items: flex-end;
`

const ColGrid = styled(Col)`
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

const SearchResults = ({ translate, results, query }) => {
  const hasResults = !results || results.length === 0
  return <WrapperResults>
    <Header>
      <StyledGrid narrow>
        <StyledRow>
          <Col xs={12} l={8}>
            <SearchTerm term={query} />
          </Col>
        </StyledRow>
      </StyledGrid>
    </Header>
    {results &&
    <Section
      light
      title={`${translate('search_page.result_section_title.projects')}${!hasResults ? ` (${translate('search_page.result_section_title.results', {resultsCount: results.length})})` : ''}`}
    >
      <StyledGrid narrow>
        <Row>
          {results.map(({name, slug, id, _highlightResult}) =>
            <ColGrid xs={6} m={4} l={3} key={id} x>
              <StyledThumbnailPoster
                isHtml
                image={{src: cloudinary('/icons/placeholder-logo.png'), alt: name}}
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
    </Section>}
    {hasResults &&
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
  </WrapperResults>
}

SearchResults.propTypes = {
  translate: PropTypes.func.isRequired,
  results: PropTypes.array,
  query: PropTypes.string.isRequired,
}

export default injectTranslate(SearchResults)
