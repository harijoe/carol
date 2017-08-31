import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { ifThen, theme } from 'utils/style'

import { CloseAllButton, Icon } from 'components'
import { SearchInput, SearchResultsModal } from 'containers'

const StyledIcon = styled(Icon)`
  ${({ isCollapse }) => css`
    position: absolute;
    display: block;
    right: ${theme('spaces.m')};
    bottom: ${theme('spaces.m')};
    height: ${theme('icons.size.m')};
    width: ${theme('icons.size.m')};
    fill: ${theme('colors.grayscale.light')};
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.7,0,0.3,1);

    ${ifThen(
      isCollapse,
      css`
      position: absolute;
      bottom: 50%;
      margin-bottom: calc( ${theme('icons.size.xl')} / -2 );
      height: ${theme('icons.size.xl')};
      width: ${theme('icons.size.xl')};
      fill: ${theme('colors.primary')};
    `,
    )};  
  `};
`

const SearchInnerWrapper = styled.div`
  ${({ isCollapse }) => css`
    position: relative;
    margin: 0 auto;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.7,0,0.3,1);

    ${ifThen(
      isCollapse,
      css`
      max-width: 110rem;
    `,
    )};  
  `};
`

const SearchEngineWrapper = styled.div`
  ${({ isCollapse }) => css`
    position: absolute;
    z-index: 10;
    top:100px;
    left: calc(50% - 300px);
    width: 600px;
    height: 56px;
    background-color: rgba(255, 255, 255, 1);
    transform-origin: 100% 0;
    transition-property: min-height, height, width, top, left, background-color;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    
    ${ifThen(
      isCollapse,
      css`
      position: fixed;
      z-index: 1000;
      top:0;
      left:0;
      width:100vw;
      height:100vh;
      overflow: hidden;
      background-color: rgba(255, 255, 255, 0.98);
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
      <SearchEngineWrapper isCollapse={isCollapse} onClick={!isCollapse && this.toggleSearch}>
        {isCollapse && <CloseAllButton closeAll={this.toggleSearch} />}
        <SearchInnerWrapper isCollapse={isCollapse}>
          <StyledIcon icon="search" isCollapse={isCollapse} />
          <SearchInput isCollapse={isCollapse} />
        </SearchInnerWrapper>
        {isCollapse && <SearchResultsModal />}
      </SearchEngineWrapper>
    )
  }
}

SearchEngine.propTypes = {}

export default SearchEngine
