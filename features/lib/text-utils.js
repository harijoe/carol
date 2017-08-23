import flattenDeep from 'lodash/flattenDeep'

function normalizeSpaces(text) {
  return text.replace(/\s+/g, ' ')
}

export function assertTextContainedInOrder(actualText, expectedTexts) {
  let textToSearch = normalizeSpaces(actualText)
  const textsToFind = flattenDeep(expectedTexts)
  textsToFind.forEach( textToFind => {
    const expected = normalizeSpaces(textToFind)
    const index = textToSearch.indexOf(expected)
    if (index < 0) {
      throw new Error(`Could not find '${expected}' in '${textToSearch}'`)
    }
    textToSearch = textToSearch.substr(index + textToFind.length)
  })
}
