import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled, { css } from 'styled-components'
import { theme, ifThen, breakpoint } from 'utils/style'

import { Icon } from 'components'

const styles = ({ status }) => css`
  position: absolute;
  bottom: 0;
  left: ${theme('spaces.m')};
  margin-bottom: -1.4rem;
  border-radius: 6rem;
  padding: ${theme('spaces.s')} ${theme('spaces.m')};
  font-size: ${theme('fonts.size.s')};
  background: ${theme('colors.grayscale.lighter')};
  color: ${theme('colors.grayscale.dark')};
  line-height: 1;
  display: inline-block;
  z-index: 0;

  span {
    vertical-align: middle;
  }

  ${breakpoint('m')`
    left: ${theme('spaces.l')};
  `}

  ${ifThen(status === 'completion_in_progress', css`
    background-color: ${theme('colors.grayscale.lighter')};
    color: ${theme('colors.grayscale.dark')};
  `)}

  ${ifThen(status === 'to_validate', css`
    background-color: #FED289;
    color: ${theme('colors.grayscale.dark')};
  `)}

  ${ifThen(status === 'validated', css`
    background-color: ${theme('colors.success')};
    color: ${theme('colors.white')};
  `)}
`

const Wrapper = styled.div`${styles}`

const StyledIcon = styled(Icon)`
  margin-right: ${theme('spaces.s')};
  height: ${theme('icons.size.s')};
  width: ${theme('icons.size.s')};
`

const ProjectStatus = ({ status }) => {
  let icon

  switch (status) {
    case 'pending_search':
    case 'validated':
      icon = 'validated'
      break
    default:
      icon = status
  }

  return (
    <Wrapper {...{ status }}>
      <StyledIcon
        size={16}
        icon={icon}
      />
      <FormattedMessage id={`project.status.${status}`} />
    </Wrapper>
  )
}

ProjectStatus.propTypes = {
  status: PropTypes.string,
}

export default ProjectStatus
