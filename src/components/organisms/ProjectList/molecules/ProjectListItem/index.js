import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import { cloudinaryUrl } from 'config'

import { Heading, DateTime, Paragraph, Link, Card, Image, ProjectStatus, Divider } from 'components'

const Article = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ${breakpointMax('m')`
    width: calc(100vw - ${theme('spaces.xl')} - ${theme('spaces.m')});
    margin-left: ${theme('spaces.s')};
    margin-right: ${theme('spaces.s')};
  `}
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
  `}
`

const StyledHeading = styled(Heading)`
  position: relative;
  margin-bottom: ${theme('spaces.s')};
  font-size: ${theme('fonts.size.xl')};
`

const DateCreation = styled.span`
  position: relative;
  padding-bottom: ${theme('spaces.m')};
  font-size: ${theme('fonts.size.s')};
  color: ${theme('colors.grayscale.medium')};

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.s')};
  `}
`

const ImageWrapper = styled.figure`
  overflow: hidden;

  &::after , & {
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
  `}
`

const StyledParagraph = styled(Paragraph)`
  margin-bottom: ${theme('spaces.xl')};
  margin-top: ${theme('spaces.m')};
  color: ${theme('colors.grayscale.dark')} !important;
  font-family: ${theme('fonts.family.montserratLight')} !important;

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.xl')};
  `}
`

const ButtonLink = styled(Link)`
  margin-top: auto;

  ${breakpoint('m')`
    margin-bottom: 0;
  `}
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

const Project = ({ name, createdAt, status, partner: { headerLink }, ...items }) => (
  <Article>
    <HeaderCard>
      <ImageWrapper>
        <BackgroundImage src={`${cloudinaryUrl}thumbnail-poster-keyone.jpg`} />
      </ImageWrapper>
      <ProjectStatus status={status} />
      <PartnerImageWrapper>
        <PartnerImage src={headerLink} />
      </PartnerImageWrapper>
    </HeaderCard>
    <FooterCard>
      <StyledHeading level={3}>{name}</StyledHeading>
      <DateCreation>
        <FormattedMessage id="project.created_at" /> <DateTime value={createdAt} />
      </DateCreation>
      <Divider />
      <StyledParagraph>
        <FormattedMessage id={`project.describe.${status}`} />
      </StyledParagraph>
      {
        status === 'completion_in_progress' &&
        <ButtonLink button to="/project-elaboration">
          <FormattedMessage id="project.continue" />
        </ButtonLink>
      }
      {
        status === 'to_validate' &&
        <ButtonLink button to={`${items['@id']}/account`}>
          <FormattedMessage id="project.button.to_validate" />
        </ButtonLink>
      }
    </FooterCard>
  </Article>
)

Project.propTypes = {
  name: PropTypes.string,
  leadReference: PropTypes.string,
  createdAt: PropTypes.string,
  status: PropTypes.string,
  partner: PropTypes.shape({
    headerLink: PropTypes.string,
  }),
}

Project.defaultProps = {
  full: false,
}

export default Project
