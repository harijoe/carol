import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, Image, Tag, Link } from 'components'
import { theme, raw, breakpoint } from 'utils/style'

const Wrapper = styled.div`
  margin-bottom: ${theme('spaces.m')};
  margin-top: ${theme('spaces.m')};
  padding-left: ${theme('spaces.m')};
  padding-right: ${theme('spaces.m')};

  ${breakpoint('m')`
    padding-left: 0;
    padding-right: 0;
    margin-left: -${theme('spaces.l')};
    margin-right: -${theme('spaces.l')};
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

  ${breakpoint('m')`
    height: 26rem; 
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
