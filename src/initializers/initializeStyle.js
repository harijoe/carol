import { injectGlobals } from 'utils/style'
import { resets, scaffolding } from 'theme/default'


export default () => injectGlobals([resets, scaffolding])
