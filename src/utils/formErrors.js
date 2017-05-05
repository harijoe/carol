const getFormErrors = (errors) => {
  if (!Array.isArray(errors)) {
    return null
  }

  return errors.reduce((acc, { propertyPath, message }) => {
    const newAcc = acc

    newAcc[propertyPath] = {
      id: message,
    }

    return newAcc
  }, {})
}

export default getFormErrors
