import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import {
  Grid,
  Row,
  Col,
  Section,
  ThumbnailPoster,
  Heading,
  Paragraph,
  Link,
  Icon,
} from 'components'

import NewSearch from './molecules/NewSearch'
import SearchTerm from './molecules/SearchTerm'

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

const NewSearchWrapper = styled(Col)`
  padding: ${theme('spaces.m')} 0;
  text-align: right;

  ${breakpointMax('l')`
    margin-bottom: -${theme('spaces.xl')};
    border-top: 0.1rem solid ${theme('colors.grey')};
  `}
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

const SearchResults = ({ translate, results, query, nbHits }) => (
  <WrapperResults>
    {query && <Header>
      <StyledGrid narrow>
        <StyledRow>
          <Col xs={12} l={8}>
            <SearchTerm term={query} />
          </Col>
          <NewSearchWrapper xs={12} l={4}>
            <NewSearch />
          </NewSearchWrapper>
        </StyledRow>
      </StyledGrid>
    </Header>}
    {results && <Section light title={translate('search_page.result_section_title.projects')}>
      <StyledGrid narrow>
        <Row>
          {results.map(({name, slug, id}) => <ColGrid xs={6} m={4} l={3} key={id}x>
            <StyledThumbnailPoster image="" title={name} height="m">
              <Link to={`/project-elaboration/?slug=${slug}`}>
                <StyledIcon icon="circle-arrow" className="qs-icon" />
              </Link>
            </StyledThumbnailPoster>
          </ColGrid>)}
        </Row>
      </StyledGrid>
    </Section>}
    {results && nbHits > 4 && <Section>
      <Link to="search-result">{translate('search_page.see_all_results')} ({nbHits})</Link>
    </Section>}
    {!results && query !== '' && <Section light>
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
)


SearchResults.propTypes = {
  translate: PropTypes.func.isRequired,
  results: PropTypes.array,
  query: PropTypes.string.isRequired,
  nbHits: PropTypes.number,
}

export default injectTranslate(SearchResults)
