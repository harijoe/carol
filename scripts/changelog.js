import changelog from './lib/changelog'
import cliBuilder from './lib/cli-builder'

// eslint-disable-next-line no-console
const { usage, fail } = cliBuilder('Usage: yarn run -s changelog <sprint-number> [description]')

if (['-h', '--help'].includes(process.argv[2])) {
  usage('info')
  process.exit(0)
}

const sprintNumberValue = process.argv[2]
if (!sprintNumberValue) {
  fail('Please specify a sprint number.')
}

const sprintNumber = parseInt(sprintNumberValue, 10)

const description = process.argv[3]

const run = async () => {
  const text = await changelog(sprintNumber, description)
  console.info(text)
}

run()
