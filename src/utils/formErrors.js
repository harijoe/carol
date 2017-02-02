const getFormErrors = errors => {
  return(
    errors.reduce((acc, { propertyPath, message }) => {
      acc[propertyPath] = {
        id: message,
      }

      return acc
    }, {})
  )
}

export default getFormErrors
