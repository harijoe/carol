import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Carousel, Loading } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

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

  children = carousel ? <Carousel>{children}</Carousel> : children

  return (
    <Wrapper>
      <Loading loading={loading}>
        {children}
      </Loading>
    </Wrapper>
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
