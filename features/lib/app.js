import config from '../../src/config'
import environment from '../lib/environment'

export default path => `${config.locales[environment.locale].url}${path}`
