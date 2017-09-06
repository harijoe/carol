import React from 'react'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import { Row, Col, Grid, ThumbnailPoster, Link, Icon, Tag } from 'components'

const StyledGrid = styled(Grid)`
  max-width: 110rem;
`
const animationDelay = props => `${props.order * 0.125}s`

const ColGrid = styled(Col)`
  max-width: 22.5rem;
  animation: ${animationDelay} hide ease, 0.3s suggestions ease ${animationDelay};

  @keyframes hide {
    from {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes suggestions {
    0% {
      opacity: 0;
      transform: translateY(15%);
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateY(0);
    }
  }

  ${breakpointMax('m')`
    padding: ${theme('spaces.xs')};
  `}

  ${breakpoint('m')`
    padding-bottom: calc(${theme('spaces.l')} / 2);
    padding-top: calc(${theme('spaces.l')} / 2);
  `}
`

const StyledThumbnailPoster = styled(ThumbnailPoster)`
  transform: translateY(0);
  transition: all 0.3s ease;
  box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, 0.15);

  &::before {
    transition: all 0.3s ease;
  }

  h3 {
    margin-bottom: -6.4rem;
    transform: translateY(0);
    transition: all 0.6s 0.1s ease;
  }

  em {
    color: ${theme('colors.white')};
    background-color: ${theme('colors.primary')};
    font-style: normal;
  }

  &:hover {
    box-shadow: 4px 10px 40px 0 rgba(19, 19, 19, 0.4);

    &, h3 {
      margin-bottom: 0;
      transform: translateY(-${theme('spaces.l')});
    }

    &::before {
      background: ${theme('colors.primary')};
      opacity: 0.85;
    }

    .qs-icon {
      margin-bottom: 0;
      opacity: 1;
      transform: translateY(-${theme('spaces.m')});
    }
  }
`

const StyledIcon = styled(Icon)`
  position: relative;
  z-index: 2;
  height: ${theme('icons.size.xxl')};
  width: ${theme('icons.size.xxl')};
  margin-top: ${theme('spaces.m')};
  margin-bottom: -6.4rem;
  opacity: 0;
  transform: translateY(150%);
  transition: all 0.6s 0.1s ease;
`

const WrapperTag = styled.div`
  position: absolute;
  z-index: 10;
  left: ${theme('spaces.s')};
  bottom: ${theme('spaces.s')};
`

const StyledTag = styled(Tag)`
  position: absolute;
  left: 2.5rem;
  bottom: 2.5rem;
`

const SearchSuggestions = () =>
  <StyledGrid narrow>
    <Row>
      <ColGrid xs={6} m={4} l={3} order={1} x>
        <StyledThumbnailPoster
          image={{ src: '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1502376733/FR/ChatbotImages/Q2/fenetres-et-ouvertures-exterieures/fenetre.jpg', alt: name }}
          height="m"
          title={'Fenêtre'}
          className="result"
        >
          <Link>
            <StyledIcon icon="circle-arrow" className="qs-icon" />
          </Link>
          <WrapperTag>
            <StyledTag label={'Projet'} />
          </WrapperTag>
        </StyledThumbnailPoster>
      </ColGrid>
      <ColGrid xs={6} m={4} l={3} order={2} x>
        <StyledThumbnailPoster
          image={{ src: '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500642631/FR/ChatbotImages/Q2/peinture-sols-et-eclairage/peinture-et-papier-peint.jpg', alt: name }}
          height="m"
          title={'Peinture et papier peint'}
          className="result"
        >
          <Link>
            <StyledIcon icon="circle-arrow" className="qs-icon" />
          </Link>
          <WrapperTag>
            <StyledTag label={'Projet'} />
          </WrapperTag>
        </StyledThumbnailPoster>
      </ColGrid>
      <ColGrid xs={6} m={4} l={3} order={3} x>
        <StyledThumbnailPoster
          image={{ src: '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1502976701/FR/ChatbotImages/Q2/isolation-chauffage-climatisation/climatiseur-reversible-et-climatisation.jpg', alt: name }}
          height="m"
          title={'Climatiseur réversible et climatisation'}
          className="result"
        >
          <Link>
            <StyledIcon icon="circle-arrow" className="qs-icon" />
          </Link>
          <WrapperTag>
            <StyledTag label={'Projet'} />
          </WrapperTag>
        </StyledThumbnailPoster>
      </ColGrid>
      <ColGrid xs={6} m={4} l={3} order={4} x>
        <StyledThumbnailPoster
          image={{ src: '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500642398/FR/ChatbotImages/Q2/isolation-chauffage-climatisation/isolation-par-l-interieur-de-plancher-mur-cloison-combles.jpg', alt: name }}
          height="m"
          title={'Isolation par l\'intérieur de plancher, mur, cloison, combles'}
          className="result"
        >
          <Link>
            <StyledIcon icon="circle-arrow" className="qs-icon" />
          </Link>
          <WrapperTag>
            <StyledTag label={'Projet'} />
          </WrapperTag>
        </StyledThumbnailPoster>
      </ColGrid>
      <ColGrid xs={6} m={4} l={3} order={5} x>
        <StyledThumbnailPoster
          image={{ src: '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500641381/FR/ChatbotImages/Q2/amenagement-de-pieces/amenagement-complet-de-salle-de-bains.jpg', alt: name }}
          height="m"
          title={'Aménagement complet de salle de bains'}
          className="result"
        >
          <Link>
            <StyledIcon icon="circle-arrow" className="qs-icon" />
          </Link>
          <WrapperTag>
            <StyledTag label={'Projet'} />
          </WrapperTag>
        </StyledThumbnailPoster>
      </ColGrid>
    </Row>
  </StyledGrid>

SearchSuggestions.propTypes = {}

export default SearchSuggestions
