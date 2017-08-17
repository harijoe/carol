import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen } from 'utils/style'

const styles = ({ or }) => css`
  position: relative;
  display: flex;
  width: 100%;
  height: 1px;
  background-color: ${theme('colors.grayscale.lighter')};
  color: ${theme('colors.grayscale.medium')};

  ${ifThen(
    or,
    `
    justify-content: center;
    text-align: center;

    &::before {
      content: 'ou';
      position: absolute;
      top: -9px;
      width: 40px;
      height: 20px;
      background-color: white;
      font-weight: bold;
    }
  `,
  )}
`

const Divider = styled.div`${styles};`

Divider.PropTypes = {
  or: PropTypes.bool,
}

export default Divider
