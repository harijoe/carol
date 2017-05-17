import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Image, Heading, DateTime, Paragraph } from 'components'

const Article = styled.article`
  display: block;
`

const setDisplay = (active = true) => (active ? { display: 'block' } : { display: 'none' })

const Post = ({ items, active, ...props }) => (
  <Article style={setDisplay(active)} {...props}>
    <Image link={items.featuredMedia} />
    <Heading level={2} dangerouslySetInnerHTML={{ __html: items.title }} />
    <DateTime value={items.date} />
    <Paragraph dangerouslySetInnerHTML={{ __html: items.body }} />
  </Article>
)

Post.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    featuredMedia: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  active: PropTypes.bool,
}

export default Post
