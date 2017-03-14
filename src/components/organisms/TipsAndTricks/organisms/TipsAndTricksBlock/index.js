import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, Image, Tag, Link } from 'components'
import { theme, raw } from 'utils/style'

const Wrapper = styled.div`
  margin-bottom: ${theme('spaces.m')};
  margin-top: ${theme('spaces.m')};
  padding-left: ${theme('spaces.m')};
  padding-right: ${theme('spaces.m')};
`

const Header = styled(Link)`
  color: ${theme('colors.black')}
  display: block;
  margin-bottom: ${theme('spaces.s')};
`

const Title = styled(Heading)`
  strong {
    color: blue;
    font-weight: normal;
  }
`

const StyledImage = styled(Image)`
  margin-left: -${theme('spaces.m')};
  margin-right: -${theme('spaces.m')};
  margin-bottom: ${theme('spaces.m')};
  width: calc(100% + ${raw('spaces.m')}rem * 2);
`

const TipsAndTricksBlock = ({ header, tags, imgLink, title }) => (
  <Wrapper>
    <Header>{header}</Header>
    {imgLink != null ? <StyledImage link={imgLink} /> : null}
    <Title level={2} html>{title}</Title>
    {tags.map((tag, i) => (<Tag key={i} {...tag} />))}
  </Wrapper>
)

TipsAndTricksBlock.propTypes = {
  header: PropTypes.string,
  tags: PropTypes.array,
  imgLink: PropTypes.string,
  title: PropTypes.string,
}

export default TipsAndTricksBlock
