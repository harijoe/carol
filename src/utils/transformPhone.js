
// @TODO: Handle other phone prefix
export default (raw) => {
  const phone = raw
    .split(' ').join('')
    .split('.').join('')

  return `+33${phone.substr(1)}`
}
