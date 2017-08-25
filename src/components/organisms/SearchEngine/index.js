import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { ifThen } from 'utils/style'

import { CloseAllButton } from 'components'
import { SearchInput, SearchResults } from 'containers'

const SearchEngineWrapper = styled.div`
  ${({ isCollapse }) => css`
    position: absolute;
    top:100px;
    left:calc(50% - 200px);
    z-index: 1000;
    width: 400px;
    height: 40px;
    background-color: rgba(255, 255, 255, 1);
    transform-origin: 100% 0;
    transition-property: min-height, height, width, top, left, background-color;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    
    ${ifThen(
      isCollapse,
      css`
      background-color: rgba(255, 255, 255, 0.95);
      width:100vw;
      height:100vh;
      top:0;
      left:0;
      position:absolute;
    `,
    )};  
  `};
`

class SearchEngine extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isCollapse: false,
    }
  }

  toggleSearch = () => {
    this.setState({ isCollapse: !this.state.isCollapse })
  }

  render() {
    const { isCollapse } = this.state

    return (
      <SearchEngineWrapper isCollapse={isCollapse} onClick={this.toggleSearch}>
        {isCollapse && <CloseAllButton closeAll={this.toggleSearch} />}
        <SearchInput isCollapse={isCollapse} />
        {isCollapse && <SearchResults />}
      </SearchEngineWrapper>
    )
  }
}

SearchEngine.propTypes = {}

export default SearchEngine
