import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { List } from 'components'

const StyledList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 0;
  padding: ${theme('spaces.m')} 0;
  padding-bottom: 0;
  list-style: none;

  li {
    padding: 0;
  }
`

StyledList.displayName = 'List'

const Item = styled.li`
  margin: ${theme('spaces.xs')};
`

const StyledButton = styled.button`
  min-width: 7rem;
  max-width: 100%;
  padding: ${theme('spaces.s')} ${theme('spaces.m')};
  font-size: ${theme('fonts.size.s')};
  line-height: 1;
  background: transparent;
  border: 0.1rem solid ${theme('colors.primary')};
  border-radius: 6rem;
  color: ${theme('colors.primary')};
  text-align: left;
`

const QuickReplies = ({ quick_replies, answer, reply }) => {
  // eslint-disable-next-line camelcase
  const isQuickRepliesArray = Array.isArray(quick_replies)

  if (!isQuickRepliesArray || (isQuickRepliesArray && answer != null)) {
    return null
  }

  const quickRepliesList = () => (
    quick_replies.map(({ title, payload }, i) => (
      <Item key={i} className="quick-reply">
        <StyledButton onClick={() => reply(title, payload)}>{title}</StyledButton>
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
  answer: PropTypes.shape({
    text: PropTypes.string,
    payload: PropTypes.string,
  }),
  reply: PropTypes.func,
}

export default QuickReplies
