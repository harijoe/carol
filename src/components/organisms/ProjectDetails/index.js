import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import {
  Section,
  Grid,
  Heading,
  Row,
  Col,
  Paragraph,
  NotificationBox,
  ProjectStatus,
  Image,
  List,
  IconLink,
  Icon,
} from 'components'

const Wrapper = styled.div``

const DateCreation = styled.time`
  display: block;
  font-size: ${theme('fonts.size.s')};
  color: ${theme('colors.grayscale.medium')};

  ${breakpointMax('m')`
    margin-top: ${theme('spaces.m')};
  `}

  ${breakpoint('m')`
    display: inline-block;
    margin-left: ${theme('spaces.m')};
    font-size: ${theme('fonts.size.base')};
  `}
`

const StyledProjectStatus = styled(ProjectStatus)`
  position: static;
  left: 0;
`

const ProjectImage = styled.figure`
  margin-top: ${theme('spaces.m')};
  height: 16rem;
  max-width: 100%;
  width: auto;

  ${breakpoint('m')`
    margin-top: ${theme('spaces.l')};
    height: 22.5rem;
  `}
`

const MapImage = styled.figure`
  height: 15rem;
  max-width: 100%;
  width: auto;
`

const StyledImage = styled(Image)`
  max-height: 100%;
  height: auto;
  max-width: 100%;
  width: 100%;
`

const StyledList = styled(List)`
  margin-top: ${theme('spaces.m')};

  ${breakpoint('m')`
    margin-top: ${theme('spaces.l')};
  `}
`

const StyledHeading = styled(Heading)`
  font-family: ${theme('fonts.family.montserratBold')};
`

const StyledIconLink = styled(IconLink)`
  display: block;
  margin-bottom: ${theme('spaces.m')};
  color: ${theme('colors.grayscale.dark')};

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.l')};
  `}

  &, * {
    transition: all 0.3s ease;
  }

  span {
    vertical-align: middle;

    &:first-child {
      margin-right: ${theme('spaces.m')};
      height: auto;
      width: auto;
    }
  }

  &:hover {
    color: ${theme('colors.secondary')};

    path {
      fill: ${theme('colors.secondary')};
    }
  }
`

const LeftCol = styled(Col)`
  ${breakpoint('m')`
    padding-right: calc(${theme('spaces.l')} / 2);
  `}
`

const RightCol = styled(Col)`
  ${breakpointMax('m')`
    margin-top: ${theme('spaces.xxl')};
  `}

  ${breakpoint('m')`
    padding-left: calc(${theme('spaces.l')} / 2);
  `}
`

const ItemProject = styled.p`
  display: flex;
  margin-bottom: ${theme('spaces.m')};
  color: ${theme('colors.grayscale.dark')};

  span {
    flex: 0 0 ${theme('icons.size.s')};
    margin-right: ${theme('spaces.s')};
    height: ${theme('icons.size.s')};
    width: ${theme('icons.size.s')};
  }
  path {
    fill: ${theme('colors.grayscale.dark')};
  }
`

const ProjectDetails = ({ translate, ...props }) => (
  <Wrapper {...props}>
    <Section>
      <Grid narrow>
        <StyledIconLink icon="back_arrow"><FormattedMessage id="project.back_link_title" /></StyledIconLink>
        <Heading level={1}>{'Project Name'}</Heading>
        <StyledProjectStatus />
        <DateCreation><FormattedMessage id="project.created_at" /></DateCreation>
      </Grid>
    </Section>

    <Section light />

    <Section title={translate('project.resume_title')}>
      <Grid narrow>
        <Row>
          <LeftCol xs={12} m={8}>
            <Paragraph>
              {'Lors de lélaboratipon de votre projet test, vous nous avez indiqué les éléments ci-dessous :'}
            </Paragraph>
            <ProjectImage>
              <StyledImage src={'http://loremflickr.com/g/640/320/paris'} />
            </ProjectImage>

            <StyledList>
              <li>{'Rénovation de cuisine existante'}</li>
              <li>{'5-10m²'}</li>
              <li>{'Confort - Meilleur prix'}</li>
              <li>{'Appartement'}</li>
              <li>{'Locataire avec accord du propriétaire'}</li>
            </StyledList>

            <StyledHeading level={4}><FormattedMessage id="project.comment_title" /></StyledHeading>
            <NotificationBox dark>
              {'"Votre commentaire"'}
            </NotificationBox>
          </LeftCol>
          <RightCol xs={12} m={4}>
            <StyledHeading level={4}><FormattedMessage id="project.col_title" /></StyledHeading>
            <ItemProject>
              <Icon icon="location-pin" />
              {'Lieu: 75015 Paris'}
            </ItemProject>
            <MapImage>
              <StyledImage src={'https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=13&size=500x250'} />
            </MapImage>
            <ItemProject>
              <Icon icon="project_start" />
              {'Début de projet: Dans 3 à 6 mois'}
            </ItemProject>
            <ItemProject>
              <Icon icon="project_goal" />
              {'Votre besoin: Trouver un professionnel pour démarrer mon projet'}
            </ItemProject>
          </RightCol>
        </Row>
      </Grid>
    </Section>

    <Section title={translate('project.cross_sell_title')} light />
  </Wrapper>
)

ProjectDetails.propTypes = {
  translate: PropTypes.func.isRequired,
  details: PropTypes.object,
  loading: PropTypes.bool,
}

export default injectTranslate(ProjectDetails)
