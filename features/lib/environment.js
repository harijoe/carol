const defaultValues = {
  language: 'fr',
}

const environment = { ...defaultValues }

export const reset = () => Object.keys(defaultValues).map(key => (environment[key] = defaultValues[key]))

export default environment
