import fs from 'fs'
import { createRelease } from './lib/github'

const extractReleaseInfoFromChangelog = version => {
  const lines = fs.readFileSync('CHANGELOG.md', 'utf-8').split('\n')
  const expectedFirstLine = `## ${version} `
  let line = lines.shift()
  if (!line.startsWith(expectedFirstLine)) {
    console.error(`Expected to find current version on the first line of the CHANGELOG, instead found this:\n${line}`)
  }
  const matching = []
  line = lines.shift()
  while (!line.startsWith('## ')) {
    matching.push(line)
    line = lines.shift()
  }
  return matching.join('\n').trim()
}

const run = async () => {
  const version = require('../package.json').version
  const body = extractReleaseInfoFromChangelog(version)
  await createRelease({ version, body })
}

run()
