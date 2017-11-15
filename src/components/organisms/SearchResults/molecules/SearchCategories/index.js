import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { ifThen, theme, breakpoint } from 'utils/style'
import wordpressContentCategories from 'constants/wordpress-content-categories'
import capitalize from 'lodash/capitalize'

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  ${breakpoint('m')`
    display: flex;
  `}

  li {
    ${breakpoint('m')`
      padding-left: ${theme('spaces.l')};

      &:first-child {
        padding-left: 0;
      }
    `}
  }
`

const CategoryItem = styled.button`${({ selected }) => css`
  background: transparent;
  padding: ${theme('spaces.l')} 0;

  ${ifThen(
    selected,
    css`
      border-bottom: 2px solid ${theme('colors.black')};
      color: ${theme('colors.black')};
      font-weight: bold;
    `,
    css`
      color: ${theme('colors.grayscale.dark')};
      font-weight: normal;
    `
    )}
  
`};`

const SearchCategories = ({ className, setSearchCategory, searchCategory, projectFlowResults, wordpressContentResults, wordpressContentResultsByType, translate }) =>
  <Wrapper className={className}>
    <li>
      <CategoryItem onClick={() => setSearchCategory(null)} selected={searchCategory == null}>
        {capitalize(translate('search_page.category.all.title'))} {projectFlowResults && wordpressContentResults && <span>({ projectFlowResults.nbHits + wordpressContentResults.nbHits || 0})</span>}
      </CategoryItem>
    </li>
    <li>
      <CategoryItem onClick={() => setSearchCategory('projects')} selected={searchCategory === 'projects'}>
        {capitalize(translate('search_page.category.project.title', { contentNumber: projectFlowResults.nbHits || 0 }))} {projectFlowResults && <span>({ projectFlowResults.nbHits || 0})</span>}
      </CategoryItem>
    </li>

    {Object.keys(wordpressContentCategories).map(key => {
        const count = wordpressContentResultsByType && wordpressContentCategories[key].reduce((acc, type) => {

          const results = wordpressContentResultsByType[type]
          return acc + (results ? results.length : 0) || 0
        }, 0) || 0
        return <li>
          <CategoryItem key={key} onClick={() => setSearchCategory(key)} selected={searchCategory === key}>
            {capitalize(translate(`search_page.category.${key}.title`, { contentNumber: count }))} {wordpressContentResultsByType && <span>({count})</span>}
          </CategoryItem>
        </li>
      })
    }
  </Wrapper>

SearchCategories.propTypes = {
  setSearchCategory: PropTypes.func.isRequired,
  searchCategory: PropTypes.string,
  projectFlowResults: PropTypes.object,
  wordpressContentResults: PropTypes.object,
  wordpressContentResultsByType: PropTypes.object,
  translate: PropTypes.func,
  className: PropTypes.string,
}

export default injectTranslate(SearchCategories)
