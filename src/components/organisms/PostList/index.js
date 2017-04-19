import React, { PropTypes } from 'react'

import { Carousel, Loading } from 'components'

const PostList = ({ list, loading, generateChild, generateBackground, carousel }) => {
  let children = list
    .map((items, i) => generateChild(i, items))

  children = typeof carousel !== 'undefined' && children.length !== 0 ? <Carousel {...carousel}>{children}</Carousel> : children

  const background = typeof generateBackground !== 'undefined' ?
    list.map((items, i) => generateBackground(i, items)) :
    null

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
  generateChild: PropTypes.func.isRequired,
  generateBackground: PropTypes.func,
  carousel: PropTypes.object,
}

export default PostList
