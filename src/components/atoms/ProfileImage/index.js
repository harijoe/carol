import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme } from 'utils/style'
import cloudinary from 'utils/cloudinary'

const StyledFigure = styled.figure`${({ imageLink }) => css`
  position: relative;
  z-index: 5;
  display: block;
  min-height: ${theme('icons.size.xxxl')};
  min-width: ${theme('icons.size.xxxl')};
  background-color: ${theme('colors.white')};
  background-image: url(${imageLink}), url(${cloudinary('/icons/default-logo-profil.svg')});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover, ${theme('icons.size.l')};
  border-radius: 60rem;
  box-shadow: 0 0 10px 0 rgba(19, 19, 19, 0.15);
`}`

const ProfileImage = ({ imageLink, children, ...props }) => (
  <StyledFigure imageLink={imageLink} {...props}>
    {children}
  </StyledFigure>
)

ProfileImage.propTypes = {
  imageLink: PropTypes.string,
  children: PropTypes.any,
}

export default ProfileImage
