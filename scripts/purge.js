import fetch from 'isomorphic-fetch'
import colors from 'colors'

const countriesLocales = {
  fr: 'fr-FR',
  gb: 'en-GB',
  uk: 'en-GB',
  en: 'en-GB',
  es: 'es-ES',
}

const availableCountries = Object.keys(countriesLocales)

const availableEnvironments = [
  'development',
  'qa',
  'preprod',
  'production',
  'outsideDocker',
  'insideDocker',
  'mocks',
]

const usage = () => {
  console.info(`Usage: yarn purge [<environment>] [<country>]
  
  Options:
  
    <environment>  one of ${availableEnvironments.join(', ')}
                   defaults to development
  
    <country>      one of ${availableCountries.join(', ')}
                   defaults to fr
`)
}

if (['-h', '--help'].includes(process.argv[2])) {
  usage()
  process.exit(0)
}

const environment = process.argv[2] || 'development'
const country = process.argv[3] || 'fr'

if (!availableCountries.includes(country)) {
  console.error('%s is not available in the following countries: %s', colors.red(country), availableCountries.join(', '))
  usage()
  process.exit(1)
}

if (!availableEnvironments.includes(environment)) {
  console.error('%s is not available in the following countries: ', colors.red(environment), Object.keys(countriesLocales).join(', '))
  usage()
  process.exit(1)
}

process.env.NODE_ENV = environment
const locale = countriesLocales[country]

console.info('Purging %s SSR cache of %s environment', colors.bold(country.toUpperCase()), colors.bold(environment.toUpperCase()))

const config = require('../src/config')

const { purgeCacheToken, locales } = config

const url = locales[locale].url

console.info(colors.white(`PURGE ${url}`))

fetch(url, {
  method: 'PURGE',
  headers: {
    authorization: `Bearer ${purgeCacheToken}`,
  },
})
  .then(() => console.info('SSR cache purged'))
  .catch(e => console.error('SSR cache purge failed:', e.message, e.stack.replace(/^.*/, '')))
