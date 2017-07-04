/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import GoogleSpreadsheet from 'google-spreadsheet'
import path from 'path'
import fs from 'fs'
import _ from 'lodash'
import { promisify } from 'util'

process.on('unhandledRejection', (err) => { throw err })

const writeFile = promisify(fs.writeFile)

const sortByKeys = (object) => {
  const keys = Object.keys(object)
  const sortedKeys = _.orderBy(keys, key => key.toLowerCase())

  return _.fromPairs(
    _.map(sortedKeys, key => [key, object[key]])
  )
}

const sync = async (options) => {
  const spreadSheetId = options.spreadSheetId
  const sheet = spreadSheetId ? new GoogleSpreadsheet(spreadSheetId) : null
  const languagesToInclude = ['fr', 'en', 'es']
  const pathMessages = options.pathMessages
  const tabIndex = options.tabIndex === undefined ? -1 : options.tabIndex

  const getTabs = () =>
    promisify(sheet.getInfo)().then(info => info.worksheets)

  const getLanguages = row =>
    Object.keys(row).filter(key => languagesToInclude.includes(key))

  const getMessagesByTab = async (val) => {
    const rows = await promisify(sheet.getRows)(val)
    const languages = getLanguages(rows[0])
    const messages = {}

    languages.forEach((language) => {
      messages[language] = {}
    })

    rows.forEach((row) => {
      languages.forEach((language) => {
        if (!_.isEmpty(row.key)) {
          messages[language][row.key] = row[language]
        }
      })
    })

    Object.keys(messages).forEach((language) => {
      messages[language] = _.omitBy(messages[language], _.isEmpty)
    })

    return messages
  }

  const getAllMessages = async (tabs) => {
    const toRun = tabIndex > -1 ? [getMessagesByTab(tabs[tabIndex].id)] : tabs.map(tab => getMessagesByTab(tab.id))
    const allMessages = {}
    const result = await Promise.all(toRun)

    result.forEach(messages =>
      Object.keys(messages).forEach((code) => {
        allMessages[code] = { ...allMessages[code], ...messages[code] }
      })
    )

    Object.keys(allMessages).forEach((language) => {
      allMessages[language] = sortByKeys(allMessages[language])
    })

    return allMessages
  }

  const escapeValue = text =>
    text
      .replace(/\\/g, '\\\\')
      .replace(/'/g, '\\\'')
      .replace(/\n/g, '\\n')

  const serialize = translations =>
    Object.keys(translations).map(key => `  '${key}': '${escapeValue(translations[key])}',\n`).join('')

  const saveToJs = async messages =>
    Object.keys(messages).forEach(async (code) => {
      const translations = messages[code]

      await writeFile(`${path.normalize(pathMessages)}/${code}.js`, `/* eslint-disable quote-props */\nexport default {\n${serialize(translations)}}\n`)
      console.info(`-- 📖  ${code}.js generated`)
    })

  if (!spreadSheetId) {
    throw new Error('spreadSheetId not defined')
  }

  if (!pathMessages) {
    throw new Error('pathMessages not defined')
  }

  const tabs = await getTabs()
  const messages = await getAllMessages(tabs)

  await saveToJs(messages)
}

const options = {}

options.spreadSheetId = '1HBJ7pMsULNkJw3zgTEEQZU4FpexPRapgz7ZPH0O3Ink'
options.pathMessages = './src/i18n/'
sync(options)
