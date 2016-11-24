import { defineMessages } from 'react-intl'

const messages = (placeholder) => {
  return defineMessages({
    placeholder: {
      id: placeholder || 'user.password',
      defaultMessage: placeholder
    }
  })
}

export default messages
