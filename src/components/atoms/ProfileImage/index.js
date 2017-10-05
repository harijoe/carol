import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme } from 'utils/style'
import cloudinary from 'utils/cloudinary'

const SIZES = {
  s: theme('icons.size.xxl'),
  m: theme('icons.size.xxxl'),
  l: '8rem',
}

const styles = ({ size, image, defaultImage }) => css`
  position: relative;
  z-index: 5;
  height: ${SIZES[size]};
  width: ${SIZES[size]};
  background-color: ${theme('colors.white')};
  background-image: url(${image || defaultImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: ${image ? 'contain' : '50%'};
  border-radius: 60rem;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
`

const ProfileImage = styled.figure`${styles};`

ProfileImage.propTypes = {
  image: PropTypes.string,
  defaultImage: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(SIZES)).isRequired,
}

ProfileImage.defaultProps = {
  defaultImage: cloudinary('/icons/default-logo-profil.svg'),
}

export default ProfileImage
