import fs from 'fs'
import path from 'path'
import { parseString } from 'xml2js'
import get from 'lodash/get'
import algoliaSearch from 'algoliasearch'
import program from 'commander'
import prompt from 'prompt'
import { transformToAlgoliaItem, unserializeImageMetadata, injectThumbnailToPost, mappingThemes, transformThemes } from './lib/populate-algolia-content'
import stripTags from '../src/utils/stripTags'
import { algolia } from '../src/config'

/*
  README here : https://goo.gl/q2thkV
 */

program
  .usage('[options]')
  .option('-f, --force', 'Make sure you set the variable config in the script correctly before pushing to algolia using --force')
  .parse(process.argv)

prompt.start()

const client = algoliaSearch('TIM81UW1UV', algolia.adminApiKey)

const config = [{
  filepath: '../conseilstravaux.wordpress.2017-11-27.xml',
  indexes: ['qa_content_fr', 'preprod_content_fr', 'prod_content_fr'],
}, {
  filepath: '../consejosreformas.wordpress.2017-11-27.xml',
  indexes: ['qa_content_es', 'preprod_content_es', 'prod_content_es'],
}, {
  filepath: '../advice.wordpress.2017-11-27.xml',
  indexes: ['qa_content_uk', 'preprod_content_uk', 'prod_content_uk'],
}]

const parseStringPromise = (...props) => new Promise((resolve, reject) => {
  parseString(...props, (err, result) => {
    if (err) return reject(err)

    return resolve(result)
  })
})

const populate = async (filepath, indexes) => {
  const xml = fs.readFileSync(path.join(__dirname, filepath), 'utf-8')

  const result = await parseStringPromise(xml)

  const items = get(result, ['rss', 'channel', '0', 'item'])
  const themes = get(result, ['rss', 'channel', '0', 'wp:term'])

  const themesIconAndColor = transformThemes(items, themes).filter(x => x)
  const objects = items
    .map(transformToAlgoliaItem)
    .map(unserializeImageMetadata)
    .reduce((acc, item) => {

      acc[item.objectID] = item

      return acc
    }, {})

  const algoliaReadyObjects = Object.values(objects)
    .map(values => Object.keys(values).reduce((acc, key) => {
        acc[key] = typeof values[key] === 'string' ? stripTags(values[key]).trim().slice(0, 1000) : values[key]
        return acc
      }, {})
    )
    .map(injectThumbnailToPost(objects))
    .filter(({ status }) => status === 'publish')
    .map(mappingThemes(objects, themesIconAndColor))

  await indexes.map(async index => {
    await index.clearIndex()
    console.info(`${index.indexName} index cleared`)
    await index.addObjects(algoliaReadyObjects)
    console.info(`${index.indexName} index populated`)
  })
}

const main = async() => {
  console.info('The following indexes are to be rebuilt:')
  config.map(({ indexes }) => indexes.map(index => console.info(`    ${index}`)))

  console.info('\n')

  console.info('Using the data files:')
  config.map(({ filepath }) => console.info(`    ${filepath}`))

  console.info('\n')

  if (!program.force) {
    console.info('This was a dry-run, verify and execute with --force')
    process.exit()
  }

  console.info('Are you sure ? [N/y]')
  const confirmed = await new Promise(resolve => prompt.get(['answer'], (err, result) => {
    if (result && ['y', 'Y', 'yes'].includes(result.answer)) {
      return resolve(true)
    }
    return resolve(false)
  }))

  if (!confirmed) {
    console.info('aborted.')
    process.exit()
  }

  config.forEach(({ filepath, indexes }) => populate(filepath, indexes.map(el => client.initIndex(el))))
}

main()
