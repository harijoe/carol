import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { ifThen, theme, breakpointMax, breakpoint } from 'utils/style'
import wordpressContentCategories from 'constants/wordpress-content-categories'
import capitalize from 'lodash/capitalize'

import MobileSelector from '../../atoms/MobileSelector'

const CategoryItem = styled.button`${({ selected }) => css`
  background: transparent;
  padding: ${theme('spaces.l')} 0;

  ${ifThen(
    selected,
    css`
      color: ${theme('colors.black')};
      font-weight: bold;

      ${breakpoint('m')`
        border-bottom: 2px solid ${theme('colors.black')};
      `}
    `,
    css`
      color: ${theme('colors.grayscale.dark')};
      font-weight: normal;
    `
    )}

  ${breakpointMax('m')`
    position: relative;
    width: 100%;
    text-align: left;
  `}
  
`};`

const SearchCategories = ({ setSearchCategory, searchCategory, projectFlowResults, wordpressContentResults, wordpressContentResultsByType, translate }) =>
  <MobileSelector selected={searchCategory}>
    <li key="all">
      <CategoryItem onClick={() => setSearchCategory(null)} selected={searchCategory == null}>
        {capitalize(translate('search_page.category.all.title'))} {projectFlowResults && wordpressContentResults && <span>({ projectFlowResults.nbHits + wordpressContentResults.nbHits || 0})</span>}
      </CategoryItem>
    </li>
    <li key="projects">
      <CategoryItem onClick={() => setSearchCategory('projects')} selected={searchCategory === 'projects'}>
        {capitalize(translate('search_page.category.project.title', { contentNumber: projectFlowResults.nbHits || 0 }))} {projectFlowResults && <span>({ projectFlowResults.nbHits || 0})</span>}
      </CategoryItem>
    </li>

    {Object.keys(wordpressContentCategories).map(key => {
        const count = wordpressContentResultsByType && wordpressContentCategories[key].reduce((acc, type) => {

          const results = wordpressContentResultsByType[type]
          return acc + (results ? results.length : 0) || 0
        }, 0) || 0
        return <li key={key}>
          <CategoryItem onClick={() => setSearchCategory(key)} selected={searchCategory === key}>
            {capitalize(translate(`search_page.category.${key}.title`, { contentNumber: count }))} {wordpressContentResultsByType && <span>({count})</span>}
          </CategoryItem>
        </li>
      })
    }
  </MobileSelector>

SearchCategories.propTypes = {
  setSearchCategory: PropTypes.func.isRequired,
  searchCategory: PropTypes.string,
  projectFlowResults: PropTypes.object,
  wordpressContentResults: PropTypes.object,
  wordpressContentResultsByType: PropTypes.object,
  translate: PropTypes.func,
}

export default injectTranslate(SearchCategories)
