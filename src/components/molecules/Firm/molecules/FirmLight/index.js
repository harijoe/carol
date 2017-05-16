import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme } from 'utils/style'

import { Image, List } from 'components'

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`
const StyleLiFigure = styled.li`
  height: 0;
`
const styles = css`
  position: relative;
  left: 2.4rem;
  top: -19.4rem;
  height: 6.4rem;
  width: 6.4rem;
  display: block;
  overflow: hidden;
  background-color: ${theme('colors.white')};
  border-radius: 6rem;

  > img {
    max-width: 100%;
  }

`
const StyledFigure = styled.figure`${styles}`

/**
 * Transforms an int or decimal into format notation
 *
 * ex: 4 => 4.0, 3.555 => 3.56, 4.6 => 4.6
 *
 * @param value
 */
const formatNotation = value => (
  value.toFixed(`${value}`.split('.')[1] ?
    Math.min(`${value}`.split('.')[1].length, 2) :
    1
  )
)

const FirmLight = ({ imageUrl, logoUrl, globalRating, name, globalRatingCount, postalCode }) => (
  <List>
    <li>
      <StyledImage link={imageUrl} />
    </li>
    <StyleLiFigure>
      <StyledFigure>
        <StyledImage link={logoUrl} />
      </StyledFigure>
    </StyleLiFigure>
    <li>
      <FormattedMessage id="firm.details.notation" />: {globalRatingCount ?
        <span>{formatNotation(globalRating)}/5 </span> :
        ''
      }
    </li>
    <li><FormattedMessage id="firm.details.name" />: {name}</li>
    <li>
      {globalRatingCount ?
        <div>{globalRatingCount} <FormattedMessage id="firm.details.reviews" /></div> :
        ''
      }
    </li>
    <li>{postalCode}</li>
  </List>
)

FirmLight.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  logoUrl: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  globalRating: PropTypes.number,
  globalRatingCount: PropTypes.number,
}

FirmLight.defaultProps = {
  globalRating: null,
  globalRatingCount: null,
  imageUrl: 'https://hugo-fr.qarx.io/wp-content/uploads/2017/02/Plancher-chauffant-1.jpg', /* @TODO: To remove when dora will provide it */
}

export default FirmLight
