const defaultValues = {
  locale: 'fr-FR',
}

const environment = { ...defaultValues }

export const reset = () => Object.keys(defaultValues).forEach(key => { environment[key] = defaultValues[key] })

export default environment
