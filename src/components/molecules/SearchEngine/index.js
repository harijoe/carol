import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifThen, theme, breakpoint } from 'utils/style'

import { CloseAllButton, Icon } from 'components'
import { SearchInput, SearchResultsModal } from 'containers'
import isIOS from 'utils/isIOS'

const StyledIcon = styled(Icon)`
  ${({ isExpanded }) => css`
    display: block;
    position: absolute;
    right: ${theme('spaces.m')};
    top: 50%;
    height: ${theme('icons.size.m')};
    width: ${theme('icons.size.m')};
    margin: 0;
    margin-top: calc(${theme('icons.size.m')} / -2);
    fill: ${theme('colors.grayscale.dark')};
    transition-duration: inherit;
    transition-timing-function: inherit;

    ${breakpoint('l')`
      right: ${theme('spaces.l')};
    `};

    ${ifThen(
      isExpanded,
      css`
      margin-top: calc(${theme('icons.size.l')} / -2);
      height: ${theme('icons.size.l')};
      width: ${theme('icons.size.l')};
      fill: ${theme('colors.primary')};

      ${breakpoint('l')`
        margin-top: calc(${theme('icons.size.xl')} / -2);
        height: ${theme('icons.size.xl')};
        width: ${theme('icons.size.xl')};
      `};
    `,
    )};  
  `};
`

const SearchInnerWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 110rem;
  transition-duration: inherit;
  transition-timing-function: inherit;
`

const SearchEngineWrapper = styled.div`
  ${({ isExpanded }) => css`
    position: absolute;
    z-index: 10;
    top: 40rem;
    left: ${theme('spaces.m')};
    width: calc(100% - ${theme('spaces.xl')});
    height: 5.7rem;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 20px 0 rgba(19, 19, 19, 0.15);
    overflow-x: hidden;
    transform-origin: 100% 0;
    transition-property: min-height, height, width, top, left, background-color, overflow;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);

    @media screen and (max-height: 600px) {
      top: 37rem;
    }

    ${breakpoint('l')`
      left: calc(50% - 40rem - ${theme('spaces.l')});
      top: 50.5rem;
      height: 7.5rem;
      width: 80rem;
    `};
  
    
    ${ifThen(
      isExpanded,
      css`
      position: fixed;
      z-index: 1000;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow-y: scroll;
      background-color: rgba(255, 255, 255, 0.98);

      @media screen and (max-height: 600px) {
        top: 0;
      }

      ${breakpoint('l')`
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        overflow-y: scroll;
      `};
    `,
    )};  
  `};
`

const ANIMATION_DURATION = 0.5

const StyledCloseAllButton = styled(CloseAllButton)`
  animation: 1s hide linear, ${ANIMATION_DURATION}s fade ease-in 1s;

  @keyframes hide {
    from {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

class SearchEngine extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isExpanded: false,
    }
  }

  toggleSearch = () => {
    const isExpanded = !this.state.isExpanded
    this.setState({ isExpanded }, () => {
      this.props.toggleSearchModal(isExpanded)
      if (isIOS() && isExpanded) {
        setTimeout(() => window.scrollTo(0, 0), ANIMATION_DURATION * 1000)
      }
    })
    this.props.resetResults()
  }

  render() {
    const { isExpanded } = this.state

    return (
      <SearchEngineWrapper isExpanded={isExpanded} disabled={isExpanded} onClick={this.toggleSearch}>
        {isExpanded && <StyledCloseAllButton closeAll={this.toggleSearch} />}
        <SearchInnerWrapper>
          <StyledIcon icon="search" isExpanded={isExpanded} />
          <SearchInput isExpanded={isExpanded} />
        </SearchInnerWrapper>
        {isExpanded && <SearchResultsModal />}
      </SearchEngineWrapper>
    )
  }
}

SearchEngine.propTypes = {
  resetResults: PropTypes.func,
  toggleSearchModal: PropTypes.func,
}

export default SearchEngine
