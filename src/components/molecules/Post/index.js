import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Image, Heading, DateTime, Paragraph } from 'components'

const Article = styled.article``

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
    image: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  active: React.PropTypes.bool,
}

export default Post
