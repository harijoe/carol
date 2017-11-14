import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpointMax } from 'utils/style'
import isTouchDevice from 'utils/isTouchDevice'
import { Icon } from 'components'

const IconCertificate = styled(Icon)`
  display: none;

  ${breakpointMax('m')`
    display: block;
    position: absolute;
    right: 4px;
    top: 50%;
    margin-top: -0.55rem;
    height: 1.1rem;
    width: 1.1rem;
  `};
`

const StyledList = styled.li`
  display: inline-block;
  margin: ${theme('spaces.xs')};
  padding: ${theme('spaces.s')};
  background-color: ${theme('colors.grey')};
  border-radius: ${theme('spaces.m')};
  font-size: ${theme('fonts.size.xs')};
  text-transform: uppercase;
  margin-right: ${theme('spaces.xs')};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: ${({ onClick }) => onClick ? 'pointer' : 'auto'};
  }

  ${breakpointMax('m')`
    position: relative;
    padding-right: 2rem;
    vertical-align: middle;
  `};
`

const FirmCertificate = ({ name, description, showModal }) =>
  <StyledList
    data-tip={!isTouchDevice() && description ? description : null}
    onClick={description ? () => showModal(description) : null}
  >
    {name}
    <IconCertificate icon="question-mark" />
  </StyledList>

FirmCertificate.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  showModal: PropTypes.func.isRequired,
}

export default FirmCertificate
