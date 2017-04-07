import React, { PropTypes } from 'react'

import { Carousel, Loading } from 'components'

const setDisplay = (active, i, tags) => {
  if (typeof active === 'string') {
    if (active === 'all') {
      return true
    }

    return tags.includes(active)
  }

  return active === i
}

const PostList = ({ list, active = 'all', loading, generateChild, generateBackground, carousel }) => {
  let children = list
    .filter((items, i) => setDisplay(active, i, items.tags))
    .map((items, i) => generateChild(i, items))

  children = typeof carousel !== 'undefined' && children.length !== 0 ? <Carousel {...carousel}>{children}</Carousel> : children

  const background = generateBackground != null ? list
    .filter((items, i) => setDisplay(active, i, items.tags))
    .map((items, i) => generateBackground(i, items))
    : null

  return (
    <Loading loading={loading}>
      {background}
      {children}
    </Loading>
  )
}

PostList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  active: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  generateChild: PropTypes.func.isRequired,
  generateBackground: PropTypes.func,
  carousel: PropTypes.object,
}

export default PostList
