const indicator = (language) => {
  switch (language) {
    case 'fr':
      return '33'
    case 'en':
      return '44'
    case 'es':
      return '34'
    default:
      return '33'
  }
}

export const normalize = language => userInput => (userInput == null ? '' : `+${indicator(language)}${userInput.replace(/[^\d]/g, '').substr(1)}`)
export const format = language => storeValue => (storeValue == null ? '' : storeValue.replace(`+${indicator(language)}`, '0'))
