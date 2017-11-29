import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Truncate from 'react-truncate'
import styled from 'styled-components'
import { theme } from 'utils/style'

const StyledLink = styled.a`
  color: ${theme('colors.primary')};
  cursor: pointer;
`

class ReadMore extends Component {
  constructor() {
    super()

    this.state = {
      expanded: false,
      truncated: false,
    }
  }

  handleTruncate = truncated => {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated,
      })
    }
  }

  toggleLines = event => {
    event.preventDefault()

    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {
    const { children, more, less, lines } = this.props

    const { expanded, truncated } = this.state

    return (
      <div>
        <Truncate
          lines={!expanded && lines}
          ellipsis={
            <span>
              ... <StyledLink onClick={this.toggleLines}>{more}</StyledLink>
            </span>
          }
          onTruncate={this.handleTruncate}
        >
          {children}
        </Truncate>
        {!truncated &&
          expanded && (
            <span>
              {' '}
              <StyledLink onClick={this.toggleLines}>{less}</StyledLink>
            </span>
          )}
      </div>
    )
  }
}

ReadMore.defaultProps = {
  lines: 3,
  more: 'Read more',
  less: 'Show less',
}

ReadMore.propTypes = {
  children: PropTypes.node.isRequired,
  lines: PropTypes.number,
  more: PropTypes.string,
  less: PropTypes.string,
}

export default ReadMore
