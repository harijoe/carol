import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { MainLayout, MainWrapper } from 'components'
import { SearchResults } from 'containers'

class SearchResultPage extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired,
    setSearchCategory: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { search, query, setSearchCategory } = this.props

    search(query.q)
    setSearchCategory(query.category)
  }

  render() {
    return (
      <MainLayout>
        <MainWrapper paddingTop="m">
          <SearchResults />
        </MainWrapper>
      </MainLayout>
    )
  }
}

export default SearchResultPage
