
// @TODO: Handle other phone prefix
export const normalize = (userInput) => {
  const phone = userInput
    .replace(/[^\d]/g, '')

  return `+33${phone.substr(1)}`
}

export const format = storeValue => storeValue.replace('+33', '0')
