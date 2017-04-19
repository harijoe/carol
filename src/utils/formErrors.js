const getFormErrors = errors => (
  errors.reduce((acc, { propertyPath, message }) => {
    const newAcc = acc

    newAcc[propertyPath] = {
      id: message,
    }

    return newAcc
  }, {})
)

export default getFormErrors
