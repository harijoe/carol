import fs from 'fs'
import changeLogFromJIRA from './lib/changelog'
import cliBuilder from './lib/cli-builder'
import exec from './lib/exec'

const APP_NAME = 'prepare-release'

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

const sprintNumber = process.argv[3]
if (!sprintNumber) {
  fail('Please specify a sprint number.')
}

const insertAtTopOfChangelog = changes => {
  const changelog = fs.readFileSync('CHANGELOG.md')
  const date = new Date().toISOString().replace(/T.*/, '')
  fs.writeFileSync(
    'CHANGELOG.md',
    `## ${version} - ${date}\n\n${changes}\n\n\n${changelog}`
  )
}

const MASTER = process.env.MASTER || 'master'

const release = async () => {
  try {
    const clean = await exec('[[ -z $(git status -s) ]]').then(() => true).catch(() => false)
    if (!clean) {
      const status = await exec('git status -s')
      console.error(`Make sure your git status is clean prior to running ${APP_NAME}:\n${status}`)
      process.exit(1)
    }
    await exec(`git checkout ${MASTER} && git pull && git checkout -b v${version}`)
    await exec(`yarn version --new-version ${version} --no-git-tag-version`)
    const changes = await changeLogFromJIRA(sprintNumber)
    insertAtTopOfChangelog(changes)
    await exec('git add CHANGELOG.md package.json')
    await exec(`git commit -m'v${version}'`)
    await exec(`git push origin v${version}`)
  } catch (e) {
    console.error(e)
  }
}

release()
