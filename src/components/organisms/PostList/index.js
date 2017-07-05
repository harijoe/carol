import React from 'react'
import PropTypes from 'prop-types'

import { Loading } from 'components'
import { Carousel } from 'containers'

const PostList = ({ list, loading, generateChild, generateBackground, carousel, locale }) => {
  let children = list
    .map((items, i) => generateChild(i, items, locale))

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
  locale: PropTypes.string,
}

export default PostList
