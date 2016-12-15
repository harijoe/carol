const transformErrors = (errors) => {
  if (!errors.length) {
    return []
  }

  return errors.map(error => error.message)
}
export default transformErrors
