import { defineMessages } from 'react-intl'

const messages = (placeholder) => {
  return defineMessages({
    placeholder: {
      id: placeholder,
      defaultMessage: placeholder
    }
  })
}

export default messages
