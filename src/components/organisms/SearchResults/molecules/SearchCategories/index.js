import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { ifThen } from 'utils/style'

const wordpressContentCategories = {
  guides: ['project_page', 'project_page_element'],
  faqs: ['faqs', 'standards'],
  articles: ['inspirations'],
}

const CategoryItem = styled.button`${({ selected }) => css`
  font-weight: ${ifThen(selected, 'bold', 'normal')};
`};`

const SearchCategories = ({ setSearchCategory, searchCategory, projectFlowResults, wordpressContentResults, wordpressContentResultsByType }) =>
  <div>
    <ul>
      <CategoryItem onClick={() => setSearchCategory(null)} selected={searchCategory == null}>
        All {projectFlowResults && wordpressContentResults && <span>({ projectFlowResults.nbHits + wordpressContentResults.nbHits || 0})</span>}
      </CategoryItem>
      <CategoryItem onClick={() => setSearchCategory('projects')} selected={searchCategory === 'projects'}>
        Projects {projectFlowResults && <span>({ projectFlowResults.nbHits || 0})</span>}
      </CategoryItem>
      {Object.keys(wordpressContentCategories).map(key =>
      <CategoryItem onClick={() => setSearchCategory(key)} selected={searchCategory === key}>
          {key} { wordpressContentResultsByType && <span>({wordpressContentCategories[key].reduce((acc, type) => {
            const results = wordpressContentResultsByType[type]
            return (results && results.length) || 0
      }, 0)})</span>}
      </CategoryItem>)}
    </ul>
  </div>

SearchCategories.propTypes = {
  setSearchCategory: PropTypes.func.isRequired,
  searchCategory: PropTypes.string,
  projectFlowResults: PropTypes.object,
  wordpressContentResults: PropTypes.object,
  wordpressContentResultsByType: PropTypes.object,
}

export default injectTranslate(SearchCategories)
