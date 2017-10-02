import path from 'path'
import fs from 'fs'

process.on('unhandledRejection', err => {
  throw err
})

const replaceNpmByYarnInAllFiles = dir => {
  const filenames = fs.readdirSync(dir)

  filenames.forEach(filename => {
    const filepath = path.join(dir, filename)
    const content = fs.readFileSync(filepath, 'utf8')

    const replacement = content.replace(/npm/g, 'yarn')
    fs.writeFileSync(filepath, replacement)
  })
}

export default () => {
  const sandyPath = path.join(__dirname, '../../../../../.git')
  const carolPath = path.join(__dirname, '../../.git')

  let hooksDir
  if (fs.existsSync(sandyPath) && fs.lstatSync(sandyPath).isDirectory()) {
    hooksDir = path.join(sandyPath, 'modules/microservice/services/carol/hooks')
  }

  if (fs.existsSync(carolPath) && fs.lstatSync(carolPath).isDirectory()) {
    hooksDir = path.join(carolPath, 'hooks')
  }

  if (hooksDir) {
    replaceNpmByYarnInAllFiles(hooksDir)
  }
}
