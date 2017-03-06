import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Post, Loading } from 'components'

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

const PostList = ({ list, active, loading }) => (
  <Wrapper>
    <Loading loading={loading}>
      {list.map((items, i) =>
        <Post
          key={i}
          items={items}
          active={setDisplay(active, i, items.tags)}
        />
      )}
    </Loading>
  </Wrapper>
)

PostList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  active: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

export default PostList
