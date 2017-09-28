const indicator = language => {
  switch (language) {
    case 'fr':
      return '33'
    case 'en':
      return '44'
    case 'es':
      return '34'
    default:
      throw new Error(`Unknown language: ${language}`)
  }
}

export const normalize = language => value => {
  if (!value) return null
  const onlyNums = value.replace(/[^\d]/g, '')

  if (['fr', 'en'].includes(language)) return `+${indicator(language)}${onlyNums.replace(/[^\d]/g, '').substr(1)}`
  if (['es'].includes(language)) return `+${indicator(language)}${onlyNums}`
  throw new Error(`Unknown language: ${language}`)
}

export const format = language => storeValue => {
  if (!storeValue) return ''
  if (['fr', 'en'].includes(language)) return storeValue.replace(`+${indicator(language)}`, '0')
  if (['es'].includes(language)) return storeValue.replace(`+${indicator(language)}`, '')
  throw new Error(`Unknown language: ${language}`)
}
