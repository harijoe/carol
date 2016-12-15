import { defineMessages } from 'react-intl'

const messages = label => defineMessages({
  label: {
    id: label,
    defaultMessage: label,
  },
})

export default messages
