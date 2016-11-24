const transformErrors = (errors) => {
  if (!errors.length) {
    return []
  }

  return errors.map((error) => {
    return  error.message
  })
}
export default transformErrors
