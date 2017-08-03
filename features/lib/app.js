import { locales } from '../../src/config'
import environment from '../lib/environment'

export default path => `${locales[environment.locale].url}${path}`
