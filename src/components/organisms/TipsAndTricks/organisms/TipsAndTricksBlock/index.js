import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Heading, Image, Tag, Link } from 'components'
import { theme, raw, breakpoint } from 'utils/style'

const Wrapper = styled.div`
  margin-bottom: ${theme('spaces.m')};
  padding: 0 ${theme('spaces.m')};
  width: 100%;

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.l')};
    padding: 0 ${theme('spaces.l')};
  `}
`

const Header = styled.div`
  color: ${theme('colors.black')};
  display: block;
  margin-bottom: ${theme('spaces.s')};

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.l')};
  `}
`

const Title = styled(Heading)`
  strong {
    color: blue;
    font-weight: normal;
  }

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.xxl')};
  `}
`

const StyledImage = styled(Image)`
  height: 26rem;

  ${breakpoint('m')`
    margin-top: -10%;
    height: auto;
    width: 100%;
  `}
`

const ImageWrapper = styled.div`
  overflow: hidden;
  margin-left: -${theme('spaces.m')};
  margin-right: -${theme('spaces.m')};
  margin-bottom: ${theme('spaces.m')};
  max-height: 26rem;
  width: calc(100% + ${raw('spaces.m')}rem * 2);

  ${breakpoint('m')`
    margin-left: -${theme('spaces.l')};
    margin-right: -${theme('spaces.l')};
    margin-bottom: ${theme('spaces.l')};
    width: calc(100% + ${raw('spaces.l')}rem * 2);
  `}
`

const StyledLink = styled(Link)`
  display: block;
`

const TipsAndTricksBlock = ({ header, tags, imageLink, title, link }) => (
  <Wrapper>
    <Header>{header}</Header>
    <StyledLink to={link}>
      <ImageWrapper>
        {imageLink != null ? <StyledImage link={imageLink} /> : null}
      </ImageWrapper>
      <Title level={2} html>{title}</Title>
    </StyledLink>
    {tags.map((tag, i) => (<Tag key={i} {...tag} />))}
  </Wrapper>
)

TipsAndTricksBlock.propTypes = {
  header: PropTypes.string,
  tags: PropTypes.array,
  imageLink: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
}

export default TipsAndTricksBlock
