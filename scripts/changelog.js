import fetch from 'isomorphic-fetch'
import btoa from 'btoa'
import util from 'util'
import readlineSync from 'readline-sync'

const DEBUG = process.env.DEBUG

const usage = () => console.info('Usage: yarn run -s changelog <sprint-number>')

const sprintNumber = process.argv[2]

if (['-h', '--help'].includes(process.argv[2]) || !sprintNumber) {
  usage()
  process.exit(0)
}

const username = readlineSync.question('JIRA email? ')
const password = readlineSync.question('JIRA password? ', { hideEchoBack: true })

const fetchOptions = {
  headers: {
    Authorization: `Basic ${btoa(`${username}:${password}`)}`,
  },
  credentials: 'include',
}

const api = async (path) => {
  const url = `https://quotatis.atlassian.net${path}`
  if (DEBUG) {
    console.info(`fetching ${url}`)
  }
  const response = await fetch(url, fetchOptions)
  return response.json()
}

const formatIssue = issue => {
  const description = issue.fields.summary.replace(/\(.*?\)\s+/, '')
  const points = issue.fields.customfield_10005
  const url = `https://quotatis.atlassian.net/browse/${issue.key}`
  const hiandu = `[${issue.key}](${url})`
  return `- ${hiandu} ${description} (${points} point${points !== 1 ? 's' : ''})`
}

const formatIssues = issues => issues.map(formatIssue)

const changelog = async () => {
  const sprints = await api('/rest/agile/1.0/board/11/sprint?maxResults=100')
    .then(result => result.values)

  const sprint = sprints.find(s => s.name.includes(`Sprint ${sprintNumber}`))

  if (DEBUG) {
    console.info(util.inspect(sprint, { depth: null, colors: true }))
  }

  const allIssues = await api(`/rest/api/2/search?jql=Sprint=${sprint.id}&maxResults=100`)
    .then(result => result.issues)

  const issues = allIssues
    .filter(issue => issue.fields.status.name.match(/Done|Tests/))
    .filter(issue => issue.fields.summary.match(/Integration|CAROL/))

  issues.sort((a, b) => b.fields.customfield_10005 - a.fields.customfield_10005)

  if (DEBUG) {
    console.info(util.inspect(issues, { depth: null, colors: true }))
  }

  const isBug = issue => issue.fields.issuetype.name === 'Bug'
  const bugs = issues.filter(isBug)
  const storiesOrTasks = issues.filter(issue => !isBug(issue))

  const formattedGoals = sprint.goal
    .split(/[-+\n]+/)
    .map(item => `- ${item.trim()}`)
    .join('\n')

  console.info(`## Release for Sprint ${sprintNumber}\n`)
  console.info(`### Goals\n${formattedGoals}\n`)
  console.info(`### Features\n${formatIssues(storiesOrTasks).join('\n')}\n`)
  console.info(`### Bug fixes\n${formatIssues(bugs).join('\n')}\n`)
}


changelog()
