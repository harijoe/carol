import GoogleSpreadsheet from 'google-spreadsheet'
import path from 'path'
import fs from 'fs'
import { promisify } from 'util'
import colors from 'colors'
import markdownIt from 'markdown-it'

process.on('unhandledRejection', err => {
  throw err
})

const languagesForRow = (row, languagesToInclude) => Object.keys(row).filter(key => languagesToInclude.includes(key))

const getMessagesByWorksheet = async (spreadsheet, worksheetId, languagesToInclude) => {
  const rows = await promisify(spreadsheet.getRows)(worksheetId)
  const languages = languagesForRow(rows[0], languagesToInclude)
  const isValidRow = language => row => row.key !== '' && row[language] !== ''
  const addRowReducer = language => (messages, row) => ({ ...messages, [row.key]: row[language] })

  return languages.reduce(
    (allMessages, language) => ({
      ...allMessages,
      [language]: rows.filter(isValidRow(language)).reduce(addRowReducer(language), {}),
    }),
    {},
  )
}

const escapeValue = text => text.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/(\r\n|\r|\n)/g, '\\n')

const getAllMessages = async (spreadsheet, languagesToInclude) => {
  const allMessagesByLanguage = {}
  const spreadsheetInfo = await promisify(spreadsheet.getInfo)()
  const { worksheets } = spreadsheetInfo
  const worksheetsMessagesPromises = worksheets.map(({ id }) => getMessagesByWorksheet(spreadsheet, id, languagesToInclude))
  const worksheetsMessages = await Promise.all(worksheetsMessagesPromises)

  worksheetsMessages.forEach(worksheetMessages =>
    Object.keys(worksheetMessages).forEach(language => {
      allMessagesByLanguage[language] = { ...allMessagesByLanguage[language], ...worksheetMessages[language] }
    }),
  )

  return allMessagesByLanguage
}

const caseInsensitiveSort = keys => keys.slice().sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))

const isLdJson = text => text.match(/^\\{/)

const fixMarked = markedRendered => markedRendered.trim().replace(/^<br>|<br>$/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"')

const marked = text => (isLdJson(text) ? text : fixMarked(markdownIt({ breaks: true }).renderInline(text)))

const beautify = text => (isLdJson(text) ? text : marked(text))

const serialize = translations =>
  caseInsensitiveSort(Object.keys(translations))
    .map(key => {
      const translation = beautify(translations[key])
      return `  '${key}': '${escapeValue(translation).trim()}'`
    })
    .join(',\n')

const writeToFiles = (messages, outputPath) =>
  Object.keys(messages).forEach(language => {
    const file = `${path.normalize(outputPath)}/${language}.js`
    const translations = `{\n${serialize(messages[language])},\n}`

    fs.writeFileSync(file, `/* eslint-disable quote-props */\n/* eslint-disable prettier/prettier */\nexport default ${translations}\n`)

    console.info(colors.green('➜'), ` ${language}.js generated`)
  })

export default async ({ spreadSheetId, outputPath, languages }) => {
  const spreadsheet = new GoogleSpreadsheet(spreadSheetId)
  const messages = await getAllMessages(spreadsheet, languages)

  writeToFiles(messages, outputPath)
}
