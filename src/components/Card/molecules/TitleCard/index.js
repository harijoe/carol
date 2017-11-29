import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen, breakpoint } from 'utils/style'

import Heading from 'components/Heading'

const styles = ({ light }) => css`
  font-size: ${theme('fonts.size.l')};
  line-height: 1.25;
  text-overflow: ellipsis;
  word-wrap: break-word;

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.xl')};
  `}

  ${ifThen(light, css`color: ${theme('colors.white')};`)}
`

const StyledHeading = styled(Heading)`${styles}`

const TitleCard = ({ light, title, className, ...props }) =>
  <StyledHeading level={3} className={`qs-Card-title ${className}`} light={light} dangerouslySetInnerHTML={{ __html: title }} {...props} />

TitleCard.propTypes = {
  light: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
}

TitleCard.defaultProps = {
  light: false,
}

export default TitleCard
