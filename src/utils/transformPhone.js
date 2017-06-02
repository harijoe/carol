
// @TODO: Handle other phone prefix
export const normalize = userInput => (userInput == null ? '' : `+33${userInput.replace(/[^\d]/g, '').substr(1)}`)
export const format = storeValue => (storeValue == null ? '' : storeValue.replace('+33', '0'))
