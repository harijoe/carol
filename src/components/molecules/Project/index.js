import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import { cloudinaryUrl } from 'config'

import { Heading, DateTime, Paragraph, Link, Firm, Card, Image, ProjectStatus, Divider } from 'components'

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

const listView = (items, ...props) => (
  <Article {...props}>
    <HeaderCard>
      <ImageWrapper>
        <Image src={`${cloudinaryUrl}thumbnail-poster-keyone.jpg`} />
      </ImageWrapper>
      <ProjectStatus status={items.status} />
    </HeaderCard>
    <FooterCard>
      <StyledHeading level={3}>{items.name}</StyledHeading>
      <DateCreation>
        <FormattedMessage id="project.created_at" /> <DateTime value={items.createdAt} />
      </DateCreation>
      <Divider />
      <StyledParagraph>
        <FormattedMessage id={`project.describe.${items.status}`} />
      </StyledParagraph>
      {
        items.status === 'completion_in_progress' &&
        <ButtonLink button to="/project-elaboration"><FormattedMessage id="project.continue" /></ButtonLink>
      }
      {
        items.status === 'to_validate' &&
        <ButtonLink button to={`${items['@id']}/account`}><FormattedMessage id="project.button.to_validate" /></ButtonLink>
      }
    </FooterCard>
  </Article>
)

const detailView = (items, ...props) => (
  <Article {...props}>
    <Heading level={1}>{items.name}</Heading>
    <Paragraph>
      <FormattedMessage id="project.created_at" />: <DateTime value={items.createdAt} />
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.updated_at" />: <DateTime value={items.updatedAt} />
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.reference" />: {items.leadReference}
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.status" />: {items.status != null && <FormattedMessage id={items.status} />}
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.question" />:
      {
        items.answers !== undefined ? Object.keys(items.answers).map(key => `${key} ':' ${items.answers[key]}`) : ''
      }
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.transmitted_to_firms" />:
    </Paragraph>
    { items.firms !== undefined ? items.firms.map((firm, i) => <Firm key={i} items={firm} />) : ''}
  </Article>
)

const Project = ({ items, full, ...props }) => (
  full ? detailView(items, ...props) : listView(items, ...props)
)

Project.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string,
    leadReference: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    status: PropTypes.string,
    answers: PropTypes.array,
    firms: PropTypes.array,
  }).isRequired,
  full: PropTypes.bool,
}

Project.defaultProps = {
  full: false,
}

export default Project
