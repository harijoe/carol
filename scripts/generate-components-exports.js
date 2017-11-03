import find from 'find'
import fs from 'fs'
import path from 'path'

const mapping = {}

find.file(/(\/[^/]+)\/index\.js$/, path.join(__dirname, '/../src/components'), files => {
  files.forEach(key => {
    const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
    mapping[componentName] = key.replace(/.*(components.*)\/index\.js/, '$1')
  })

  const renderedImports = Object.keys(mapping).map(key => `export { default as ${key} } from '${mapping[key]}'`)

  const componentIndexPath = path.join(__dirname, '/../src/components/index.js')
  fs.writeFileSync(componentIndexPath, renderedImports.join('\n').concat('\n'))
})
