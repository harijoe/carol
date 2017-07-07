const defaultValues = {
  locale: 'fr_FR',
}

const environment = { ...defaultValues }

export const reset = () => Object.keys(defaultValues).map(key => (environment[key] = defaultValues[key]))

export default environment
