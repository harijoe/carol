import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Button, List } from 'components'

const StyledList = styled(List)`
  float: right;
  text-align: right;
`
StyledList.displayName = 'List'

const Item = styled.li`
  float: left;
  list-style: none;
  margin: 0 5px;
`

const QuickReplies = ({ quick_replies, response, reply }) => {
  // eslint-disable-next-line camelcase
  const isQuickRepliesArray = Array.isArray(quick_replies)

  if (!isQuickRepliesArray || (isQuickRepliesArray && response != null)) {
    return null
  }

  const quickRepliesList = () => (
    quick_replies.map(({ title, payload }, i) => (
      <Item key={i}>
        <Button onClick={() => reply(title, payload)}>{title}</Button>
      </Item>
    ))
  )

  return (
    <StyledList>
      {quickRepliesList()}
    </StyledList>
  )
}

QuickReplies.propTypes = {
  quick_replies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ),
  response: PropTypes.string,
  reply: PropTypes.func,
}

export default QuickReplies
