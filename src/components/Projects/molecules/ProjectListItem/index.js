import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import cloudinary from 'utils/cloudinary'

import Heading from 'components/Heading'
import DateTime from 'components/DateTime'
import Paragraph from 'components/Paragraph'
import Link from 'components/Link'
import Card from 'components/Card'
import Image from 'components/Image'
import ProjectStatus from 'components/ProjectStatus'
import Divider from 'components/Divider'
import ProfileImage from 'components/ProfileImage'

const Article = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ${breakpointMax('m')`
    width: calc(100vw - ${theme('spaces.xl')} - ${theme('spaces.m')});
    margin-left: ${theme('spaces.s')};
    margin-right: ${theme('spaces.s')};
  `};
`

const HeaderCard = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${theme('spaces.m')};
  padding-bottom: calc(${theme('spaces.m')} + 1.4rem);
  height: 12.5rem;
  background-color: ${theme('colors.primary')};

  ${breakpoint('m')`
    padding: ${theme('spaces.l')};
    padding-bottom: calc(${theme('spaces.l')} + 1.4rem);
  `};
`

const StyledHeading = styled(Heading)`
  position: relative;
  margin-bottom: ${theme('spaces.s')};
  font-size: ${theme('fonts.size.xl')};
`

const StyledHeadingItem = styled.span`
  position: relative;
  font-size: ${theme('fonts.size.s')};
  color: ${theme('colors.grayscale.medium')};

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.s')};
  `};
`

const StyledDivider = styled(Divider)`
  margin-top: ${theme('spaces.m')};
`

const ImageWrapper = styled.figure`
  overflow: hidden;

  &::after,
  & {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  &::after {
    background-color: rgba(19, 19, 19, 0.38);
    content: '';
  }
`

const BackgroundImage = styled(Image)`
  height: auto;
  width: 100%;
`

const FooterCard = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: ${theme('spaces.m')};
  padding-top: calc(${theme('spaces.m')} + 1.4rem);

  ${breakpoint('m')`
    padding: ${theme('spaces.l')};
    padding-top: calc(${theme('spaces.l')} + 1.4rem);
  `};
`

const StyledParagraph = styled(Paragraph)`
  margin-bottom: ${theme('spaces.xl')};
  margin-top: ${theme('spaces.m')};
  color: ${theme('colors.grayscale.dark')};

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.xl')};
  `};
`

const ButtonLink = styled(Link)`
  margin-top: auto;

  ${breakpoint('m')`
    margin-bottom: 0;
  `};
`

const FirmImage = styled(ProfileImage)`
  position: absolute;
  bottom: ${theme('spaces.l')};
  transition: all 0.3s ease;

  &:first-child {
    margin-left: ${theme('spaces.l')};
    left: 0;

    ${breakpointMax('m')`
      margin-left: ${theme('spaces.m')};
    `};
  }
  &:nth-child(2) {
    margin-left: ${theme('spaces.l')};
    left: ${theme('spaces.xl')};

    ${breakpointMax('m')`
      margin-left: ${theme('spaces.m')};
    `};
  }
  &:nth-child(3) {
    margin-left: ${theme('spaces.l')};
    left: calc(${theme('spaces.xl')} * 2);

    ${breakpointMax('m')`
      margin-left: ${theme('spaces.m')};
    `};
  }
  &:nth-child(4) {
    margin-left: ${theme('spaces.l')};
    left: calc(${theme('spaces.xl')} * 3);

    ${breakpointMax('m')`
      margin-left: ${theme('spaces.m')};
    `};
  }
  &:nth-child(5) {
    margin-left: ${theme('spaces.l')};
    left: calc(${theme('spaces.xl')} * 4);

    ${breakpointMax('m')`
      margin-left: ${theme('spaces.m')};
    `};
  }

  &:hover {
    bottom: calc(${theme('spaces.l')} + 0.8rem);
  }
`

const ButtonArrow = styled.div`
  position: absolute;
  display: block;
  right: 0;
  bottom: ${theme('spaces.l')};
  margin-right: ${theme('spaces.l')};
  border-radius: ${theme('spaces.l')};
  width: ${theme('spaces.xxl')};
  height: ${theme('spaces.xxl')};
  background-color: ${theme('colors.primary')};
  color: ${theme('colors.white')};
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  ${breakpointMax('m')`
      margin-right: ${theme('spaces.m')};
  `} &::before {
    position: absolute;
    content: '→';
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    opacity: 1;
  }

  &:hover {
    color: ${theme('colors.primary')};
    background-color: ${theme('colors.white')};
  }
`

const FirmWrapper = styled.div`
  display: block;
  margin-top: ${theme('spaces.xxl')};

  &::before {
    position: absolute;
    bottom: 0;
    margin-left: -${theme('spaces.m')};
    content: '';
    width: 100%;
    height: ${theme('spaces.xxl')};
    background-color: ${theme('colors.grey')};

    ${breakpoint('m')`
      margin-left: -${theme('spaces.l')};
    `};
  }
`

const PartnerImage = styled(Image)`
  width: 50px;
  height: 50px;
  display: block;
`

const PartnerImageWrapper = styled.div`
  z-index: 3;
  position: absolute;
  bottom: 0;
  background: white;
  padding: 5px;
  border-radius: 50%;
  margin-bottom: -1.4rem;
  right: 10%;
  box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, 0.15);
`

const StyledRouterLink = styled(RouterLink)`
  text-decoration: none;
`

const urlForProject = (status, id) => {
  if (status === 'completion_in_progress') {
    return '/project-elaboration'
  }
  if (status === 'to_validate') {
    return `${id}/account`
  }
  return id
}

const Project = ({ name, createdAt, status, partner, leadSales, imageUrl, translate, leadReference, labelWithColon, ...items }) => (
  <StyledRouterLink to={urlForProject(status, items['@id'])}>
    <Article className="project-item">
      <HeaderCard>
        <ImageWrapper>
          <BackgroundImage src={imageUrl || cloudinary('/placeholder-project_image.jpg')} />
        </ImageWrapper>
        <ProjectStatus {...{ status, leadSales }} />
        {partner && (
          <PartnerImageWrapper>
            <PartnerImage src={partner.headerLink} />
          </PartnerImageWrapper>
        )}
      </HeaderCard>
      <FooterCard>
        <StyledHeading level={3}>{name}</StyledHeading>
        {leadReference && (
          <StyledHeadingItem>
            {labelWithColon(translate('project.project_reference'))} {leadReference}
          </StyledHeadingItem>
        )}
        <StyledHeadingItem>
          <FormattedMessage id="project.created_at" /> <DateTime value={createdAt} />
        </StyledHeadingItem>
        <StyledDivider />
        <StyledParagraph>
          {status === 'found'
            ? translate(`project.describe.${status}`, { firmsNumber: leadSales.length })
            : translate(`project.describe.${status}`)}
        </StyledParagraph>
        {status === 'found' && (
          <FirmWrapper>
            {leadSales.map(({ firm }) => <FirmImage key={firm.name} image={firm.logoUrl} alt={firm.name} size="s" />)}
          </FirmWrapper>
        )}
        {['pending_search', 'validated', 'found'].includes(status) && <ButtonArrow />}
        {status === 'completion_in_progress' && (
          <ButtonLink button>
            <FormattedMessage id="project.continue" />
          </ButtonLink>
        )}
        {status === 'to_validate' && (
          <ButtonLink button>
            <FormattedMessage id="project.button.to_validate" />
          </ButtonLink>
        )}
      </FooterCard>
    </Article>
  </StyledRouterLink>
)

Project.propTypes = {
  translate: PropTypes.func.isRequired,
  labelWithColon: PropTypes.func.isRequired,
  name: PropTypes.string,
  leadReference: PropTypes.string,
  createdAt: PropTypes.string,
  status: PropTypes.string,
  leadSales: PropTypes.array,
  imageUrl: PropTypes.string,
  partner: PropTypes.shape({
    headerLink: PropTypes.string,
  }),
}

export default injectTranslate(Project)
