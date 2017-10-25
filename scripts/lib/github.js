import { inspect } from 'util'
import fetch from 'isomorphic-fetch'

const GITHUB_PROJECT_ROOT = 'https://api.github.com/repos/Quotatis/carol'

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN
if (!GITHUB_ACCESS_TOKEN) {
  console.error('Please set GITHUB_ACCESS_TOKEN to a github access token with repo push access')
  process.exit(1)
}

export const createRelease = async ({ version, body }) => {
  const response = await fetch(
    `${GITHUB_PROJECT_ROOT}/releases?access_token=${GITHUB_ACCESS_TOKEN}`, {
      method: 'POST',
      body: JSON.stringify({
        name: `v${version}`,
        tag_name: `v${version}`,
        target_commitish: 'master',
        body,
        draft: false,
        prerelease: false,
      }),
    })
  const json = await response.json()
  if (response.ok) {
    console.info(`🚀 Release created: ${json.html_url}`)
  } else {
    throw new Error(`Failed to create the releease:\n${inspect(json, { depth: null, colors: true })}`)
  }
}

export const createPR = async ({ version, body }) => {
  const response = await fetch(
    `${GITHUB_PROJECT_ROOT}/pulls?access_token=${GITHUB_ACCESS_TOKEN}`, {
      method: 'POST',
      body: JSON.stringify({
        title: `v${version}`,
        head: `v${version}`,
        base: 'master',
        body,
        maintainer_can_modify: true,
      }),
    })
  const json = await response.json()
  if (response.ok) {
    console.info(`🚀 PR created: ${json.html_url}`)
  } else {
    throw new Error(`Failed to create the PR:\n${inspect(json, { depth: null, colors: true })}`)
  }
}
