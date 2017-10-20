import changelog from './lib/changelog'
import cliBuilder from './lib/cli-builder'

// eslint-disable-next-line no-console
const { usage, fail } = cliBuilder('Usage: yarn run -s changelog <sprint-number> [description]')

if (['-h', '--help'].includes(process.argv[2])) {
  usage('info')
  process.exit(0)
}

const sprintNumber = process.argv[2]
if (!sprintNumber) {
  fail('please specify sprint number.')
}

const description = process.argv[3]

const run = async () => {
  const text = await changelog(sprintNumber, description)
  console.info(text)
}

run()
