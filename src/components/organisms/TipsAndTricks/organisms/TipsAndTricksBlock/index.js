import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, Image, Tag, Link } from 'components'
import { theme, raw, breakpoint } from 'utils/style'

const Wrapper = styled.div`
  margin-bottom: ${theme('spaces.m')};
  padding: 0 ${theme('spaces.m')};

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.l')};
    padding: 0 ${theme('spaces.l')};
  `}
`

const Header = styled(Link)`
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
  margin-left: -${theme('spaces.m')};
  margin-right: -${theme('spaces.m')};
  margin-bottom: ${theme('spaces.m')};
  width: calc(100% + ${raw('spaces.m')}rem * 2);
  height: auto;
  max-height: 26rem;

  ${breakpoint('m')`
    margin-left: -${theme('spaces.l')};
    margin-right: -${theme('spaces.l')};
    margin-bottom: ${theme('spaces.l')};
    height: 26rem;
    width: calc(100% + ${raw('spaces.l')}rem * 2);
  `}
`

const TipsAndTricksBlock = ({ header, tags, imageLink, title }) => (
  <Wrapper>
    <Header>{header}</Header>
    {imageLink != null ? <StyledImage link={imageLink} /> : null}
    <Title level={2} html>{title}</Title>
    {tags.map((tag, i) => (<Tag key={i} {...tag} />))}
  </Wrapper>
)

TipsAndTricksBlock.propTypes = {
  header: PropTypes.string,
  tags: PropTypes.array,
  imageLink: PropTypes.string,
  title: PropTypes.string,
}

export default TipsAndTricksBlock
