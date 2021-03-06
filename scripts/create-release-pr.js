import fs from 'fs'
import changeLogFromJIRA from './lib/changelog'
import cliBuilder from './lib/cli-builder'
import exec from './lib/exec'
import { createPR } from './lib/github'

const APP_NAME = 'release:pr'

// eslint-disable-next-line no-console
const { usage, fail } = cliBuilder(`Usage: yarn ${APP_NAME} <version> <sprint-number> [description]`)

if (['-h', '--help'].includes(process.argv[2])) {
  usage('info')
  process.exit(0)
}

const version = process.argv[2]
if (!version) {
  fail('Please specify a version number.')
}

const SEMVER_REGEX = /^\d+\.\d+\.\d+(-.+)?$/
if (!version.match(SEMVER_REGEX)) {
  fail('Please specify a valid semantic number. See http://semver.org/')
}

const sprintNumberValue = process.argv[3]
if (!sprintNumberValue) {
  fail('Please specify a sprint number.')
}

const sprintNumber = parseInt(sprintNumberValue, 10)

const description = process.argv[4]

const insertAtTopOfChangelog = changes => {
  const changelog = fs.readFileSync('CHANGELOG.md')
  const date = new Date().toISOString().replace(/T.*/, '')
  fs.writeFileSync(
    'CHANGELOG.md',
    `## ${version} - ${date}\n\n${changes}\n\n\n${changelog}`
  )
}

const MASTER = process.env.MASTER || 'master'

const run = async () => {
  try {
    const clean = await exec('[[ -z $(git status -s) ]]').then(() => true).catch(() => false)
    if (!clean) {
      const status = await exec('git status -s')
      console.error(`Make sure your git status is clean prior to running ${APP_NAME}:\n${status}`)
      process.exit(1)
    }
    await exec(`git checkout ${MASTER} && git pull && git checkout -b v${version}`)
    await exec(`yarn version --new-version ${version} --no-git-tag-version`)
    const changes = await changeLogFromJIRA(sprintNumber, description)
    insertAtTopOfChangelog(changes)
    await exec('git add CHANGELOG.md package.json')
    await exec(`git commit -m'v${version}'`)
    await exec(`git push origin v${version}`)
    await exec('git checkout master')
    await exec(`git branch -D v${version}`)
    await createPR({ version, body: changes })
  } catch (e) {
    console.error(e)
  }
}

run()
