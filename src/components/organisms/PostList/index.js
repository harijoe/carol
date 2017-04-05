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

const PostList = ({ list, active = 'all', loading, generateChild, carousel }) => {
  let children = list
    .filter((items, i) => setDisplay(active, i, items.tags))
    .map((items, i) => generateChild(i, items))

  children = carousel === true && children.length !== 0 ? <Carousel>{children}</Carousel> : children

  return (
    <Loading loading={loading}>
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
  carousel: PropTypes.bool,
}

export default PostList
