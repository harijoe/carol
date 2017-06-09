import fs from 'fs'

import ifMissing from './if-missing'

ifMissing('src/config.local.js', path => fs.writeFileSync(path, 'export default {}'))
