import { defineMessages } from 'react-intl'

const messages = (label) => {
  return defineMessages({
    label: {
      id: label,
      defaultMessage: label
    }
  })
}

export default messages
