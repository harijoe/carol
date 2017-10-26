import get from 'lodash/get'

export const initialState = {
  category: null,
  results: null,
  query: '',
}

export const getProjectFlowResults = (state = initialState) => get(state, 'results.projectFlow')
export const getWordpressContentResults = (state = initialState) => get(state, 'results.wordpressContent')
export const getSearchCategory = (state = initialState) => state.category
export const getWordpressContentResultsByType = (state = initialState) => {
  const hits = get(state, 'results.wordpressContent.hits')
  if (!hits) return null

  return hits.reduce((acc, el) => {
    if (acc[el.type]) {
      acc[el.type].push(el)
    } else {
      acc[el.type] = [el]
    }

    return acc
  }, {})
}
export const getWpContentGuides = (state = initialState) => {
  const hits = get(state, 'results.wordpressContent.hits')
  if (!hits) return null

  return hits.reduce((acc, el) => {
    if (!['project_page', 'project_page_element'].includes(el.type)) {
      return acc
    }

    acc.push(el)

    return acc
  }, [])
}
export const getWpContentFaqs = (state = initialState) => {
  const hits = get(state, 'results.wordpressContent.hits')
  if (!hits) return null

  return hits.reduce((acc, el) => {
    if (!['faqs', 'standards'].includes(el.type)) {
      return acc
    }

    acc.push(el)

    return acc
  }, [])
}

export const getQuery = (state = initialState) => state.query
