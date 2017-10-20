import fs from 'fs'
import { inspect } from 'util'
import fetch from 'isomorphic-fetch'

const { GITHUB_ACCESS_TOKEN } = process.env
if (!GITHUB_ACCESS_TOKEN) {
  console.error('Please set GITHUB_ACCESS_TOKEN to a github access token with repo push access')
  process.exit(1)
}

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

const release = async () => {
  const version = JSON.parse(fs.readFileSync('package.json')).version
  const releaseBody = extractReleaseInfoFromChangelog(version)
  const response = await fetch(`https://api.github.com/repos/Quotatis/carol/releases?access_token=${GITHUB_ACCESS_TOKEN}`, {
    method: 'POST',
    body: JSON.stringify({
      name: `v${version}`,
      tag_name: `v${version}`,
      target_commitish: 'master',
      body: releaseBody,
      draft: false,
      prerelease: false,
    }),
  })
  const json = await response.json()
  if (response.ok) {
    console.info(`🚀 Release created: ${json.html_url}`)
  } else {
    console.error(`Failed to create the releease:\n${inspect(json, { depth: null, colors: true })}`)
    process.exit(1)
  }
}

release()
