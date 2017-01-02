import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Post } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const setDisplay = (active, i, tags) => {
  if ('string' === typeof active) {
    if ('all' === active) {
      return true
    }

    return tags.includes(active)
  }

  return i === active
}

const PostList = ({ list, active, loading, ...props }) => (
  <Wrapper {...props}>
    {loading && <div>Loading...</div>}
    {list.map((items, i) =>
      <Post
        key={i}
        loading={loading}
        items={items}
        active={setDisplay(active, i, items.get('tags'))}
      />
    )}
  </Wrapper>
)

PostList.propTypes = {
  list: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  active: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

export default PostList
