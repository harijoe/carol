import fetch from 'isomorphic-fetch'
import colors from 'colors'

const countriesLocales = {
  fr: 'fr_FR',
  gb: 'en_GB',
  uk: 'en_GB',
  en: 'en_GB',
  es: 'es_ES',
}

const availableCountries = Object.keys(countriesLocales)

const availableEnvironments = [
  'development',
  'qa',
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

const protocol = config.ssl.enabled ? 'https' : 'http'
const baseUrl = locales[locale].url.replace(/^https?/, protocol)
const url = `${baseUrl}:${config.port}/purge-ssr`

console.info(colors.white(`POST ${url}`))

fetch(url, {
  method: 'POST',
  headers: { authorization: `Bearer ${purgeCacheToken}` },
})
  .then(() => console.info('SSR cache purged'))
  .catch(e => console.error('SSR cache purge failed:', e.message, e.stack.replace(/^.*/, '')))
