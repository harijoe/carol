import { defineMessages } from 'react-intl'

const messages = (placeholder) => {
  return defineMessages({
    placeholder: {
      id: placeholder || 'form.input.button.phone',
      defaultMessage: placeholder
    }
  })
}

export default messages
