import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import transformDate from 'utils/transformDate'
import config from 'config'
import cloudinary from 'utils/cloudinary'

import {
  Section,
  Grid,
  Heading,
  Row,
  Col,
  Paragraph,
  NotificationBox,
  ProjectStatus,
  FirmList,
  Image,
  List,
  IconLink,
  Icon,
} from 'components'

const Wrapper = styled.div``

const StyledSection = styled(Section)`
  padding-bottom: 0;

  &::before {
    content: '';
    position: absolute;
    margin-top: -${theme('spaces.xl')};
    margin-left: -${theme('spaces.m')};
    width: 100%;
    height: 40rem;
    background-color: ${theme('colors.grayscale.lightest')};

    ${breakpoint('m')`
      margin-top: -${theme('spaces.xxl')};
      margin-left: -${theme('spaces.l')};
    `}

    ${breakpoint('xl')`
      margin-top: -${theme('spaces.xxl')};
      margin-left: -${theme('spaces.xxl')};
    `}
  }
`

const DateCreation = styled.time`
  display: block;
  font-size: ${theme('fonts.size.s')};
  color: ${theme('colors.grayscale.medium')};

  ${breakpointMax('m')`
    margin-top: ${theme('spaces.m')};
  `} ${breakpoint('m')`
    display: inline-block;
    margin-left: ${theme('spaces.m')};
    vertical-align: middle;
    font-size: ${theme('fonts.size.base')};
  `};
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
  `};
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

  list-style-position: outside;
  margin-left: 1em;
`

const StyledGrid = styled(Grid)`
  max-width: 120rem;
  margin: ${theme('spaces.l')} auto 0 auto;

  .slick-list {
    padding-top: ${theme('spaces.m')};
    padding-bottom: ${theme('spaces.m')};
  }

  .slick-slider {
    padding-bottom: ${theme('spaces.m')};
  }
`

const StyledHeading = styled(Heading)`
  font-family: ${theme('fonts.family.montserrat')};
  font-weight: bold;
`

const StyledIconLink = styled(IconLink)`
  transition: all 0.2s ease;
  display: block;
  margin-bottom: ${theme('spaces.m')};
  color: ${theme('colors.grayscale.dark')};

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.l')};
  `}

  span {
    vertical-align: top;

    &:first-child {
      margin-right: ${theme('spaces.m')};
      height: 9px;
      width: 23px;
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

const googleMapsParams = ({ lat, lng }) => {
  const markerImageUrl = cloudinary('/icons/marker-map_img.png')
  const googleMapParams = {
    center: `${lat},${lng}`,
    zoom: 12,
    scale: 1,
    size: '300x150',
    maptype: 'roadmap',
    key: config.google.mapsKey,
    format: 'png',
    visual_refresh: true,
    markers: `icon:${markerImageUrl}|shadow:true|${lat},${lng}`,
  }

  return Object.keys(googleMapParams).map(key => `${key}=${encodeURIComponent(googleMapParams[key])}`).join('&')
}

const ProjectDetails = ({
  project: { name, status, createdAt, questionsAnswers, comment, postalCode, startTimeframe, purpose, leadSales, imageUrl },
  placeCoords,
  translate,
  ...props
}) =>
  <Wrapper {...props}>
    <Section>
      <Grid narrow>
        <StyledIconLink to="/projects" icon="back_arrow">
          <FormattedMessage id="project.back_link_title" />
        </StyledIconLink>
        <Heading level={1}>
          {name}
        </Heading>
        <StyledProjectStatus {...{ status, leadSales }} />
        <DateCreation>
          <FormattedMessage id="project.created_at" /> {transformDate(createdAt)}
        </DateCreation>
      </Grid>
    </Section>

    {status === 'found' &&
      <StyledSection>
        <Grid narrow>
          <Paragraph
            dangerouslySetInnerHTML={{ __html: translate('project.firm_intro', { firmsNumber: `<strong>${leadSales.length}</strong>` }) }}
          />
        </Grid>
        <StyledGrid>
          <FirmList list={leadSales} />
        </StyledGrid>
      </StyledSection>}

    <Section title={translate('project.resume_title')}>
      <Grid narrow>
        <Row>
          <LeftCol xs={12} m={8}>
            <Paragraph dangerouslySetInnerHTML={{ __html: translate('project.resume_intro', { name: `<strong>${name}</strong>` }) }} />
            <ProjectImage>
              <StyledImage src={imageUrl ? cloudinary(imageUrl,'c_fill,h_225,w_525') : cloudinary('/placeholder-project_image.jpg')} />
            </ProjectImage>

            <StyledList>
              {Object.entries(questionsAnswers).map(key =>
                <li key={key[0]}>
                  {key[0]}
                  <br />
                  <strong>
                    {key[1]}
                  </strong>
                </li>,
              )}
            </StyledList>
            {comment &&
              <div>
                <StyledHeading level={4}>
                  <FormattedMessage id="project.comment_title" />
                </StyledHeading>
                <NotificationBox dark>
                  {comment}
                </NotificationBox>
              </div>}
          </LeftCol>
          <RightCol xs={12} m={4}>
            <StyledHeading level={4}>
              <FormattedMessage id="project.col_title" />
            </StyledHeading>
            <ItemProject>
              <Icon icon="location-pin" />
              {`Lieu : ${postalCode.postalCode} ${postalCode.city}`}
            </ItemProject>
            <MapImage>
              {placeCoords && <StyledImage src={`https://maps.googleapis.com/maps/api/staticmap?${googleMapsParams(placeCoords)}`} />}
            </MapImage>
            <ItemProject>
              <Icon icon="project_start" />
              {translate('project.startTimeframe')} : {translate(`project.startTimeframe.${startTimeframe}`)}
            </ItemProject>
            <ItemProject>
              <Icon icon="project_goal" />
              {translate('project.purpose')} : {translate(`project.${purpose}`)}
            </ItemProject>
          </RightCol>
        </Row>
      </Grid>
    </Section>
  </Wrapper>

ProjectDetails.propTypes = {
  translate: PropTypes.func.isRequired,
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    questionsAnswers: PropTypes.object.isRequired,
    comment: PropTypes.string,
    imageUrl: PropTypes.string,
    postalCode: PropTypes.object.isRequired,
    startTimeframe: PropTypes.string.isRequired,
    purpose: PropTypes.string.isRequired,
    leadSales: PropTypes.array.isRequired,
  }).isRequired,
  placeCoords: PropTypes.object,
  loading: PropTypes.bool,
}

export default injectTranslate(ProjectDetails)
