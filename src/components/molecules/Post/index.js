import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Image, Heading, DateTime, Paragraph } from 'components'

const Article = styled.article``

const setDisplay = (active = true) => (active ? { display: 'block' } : { display: 'none' })

const Post = ({ items, active, ...props }) => {
  const date = new Date(items.date)

  return (
    <Article style={setDisplay(active)} {...props}>
      <Image link={items.featuredMedia} />
      <Heading level={2} dangerouslySetInnerHTML={{ __html: items.title }} />
      <DateTime value={`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`} />
      <Paragraph dangerouslySetInnerHTML={{ __html: items.body }} />
    </Article>
  )
}

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
