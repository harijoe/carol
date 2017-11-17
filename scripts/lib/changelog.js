import fetch from 'isomorphic-fetch'
import fs from 'fs'
import readlineSync from 'readline-sync'
import btoa from 'btoa'
import util from 'util'
import flatten from 'lodash/flatten'

const env = JSON.parse(JSON.stringify(process.env))

const fetchOptionsBuilder = (username, password) => ({
  headers: {
    Authorization: `Basic ${btoa(`${username}:${password}`)}`,
  },
  credentials: 'include',
})

const { DEBUG } = env

const apiBuilder = fetchOptions => async path => {
  const url = `https://quotatis.atlassian.net${path}`
  if (DEBUG) {
    console.info(`fetching ${url}`)
  }
  const response = await fetch(url, fetchOptions)
  return response.json()
}

const formatIssue = issue => {
  const description = issue.fields.summary.replace(/\(.*?\)\s+/, '')
  const url = `https://quotatis.atlassian.net/browse/${issue.key}`
  const hiandu = `[${issue.key}](${url})`
  return `- ${hiandu} ${description}`
}

const formatIssues = issues => issues.map(formatIssue)

const readChangeLog = () => fs.readFileSync('CHANGELOG.md', 'utf-8')

const changelogFromJIRA = async (sprintNumber, description) => {
  const { JIRA_EMAIL, JIRA_PASSWORD } = env
  const username = JIRA_EMAIL || readlineSync.question('JIRA email? ')
  const password = JIRA_PASSWORD || readlineSync.question('JIRA password? ', { hideEchoBack: true })
  const fetchOptions = fetchOptionsBuilder(username, password)
  const api = apiBuilder(fetchOptions)
  const sprintResults = await api('/rest/agile/1.0/board/11/sprint?maxResults=100').then(result => result.values)

  const sprints = sprintResults.filter(
    s => s.name.includes(`Sprint ${sprintNumber}`) || s.name.includes(`Sprint ${sprintNumber + 1}`)
  )

  if (DEBUG) {
    console.info(util.inspect(sprints, { depth: null, colors: true }))
  }

  const allIssues = flatten(
    await Promise.all(
      sprints.map(sprint =>
        api(`/rest/api/2/search?jql=Sprint=${sprint.id}&maxResults=100`)
          .then(result => result.issues))
    )
  )

  const changeLog = readChangeLog()

  const issues = allIssues
    .filter(issue => issue.fields.status.name.match(/done|test/i))
    .filter(issue => issue.fields.summary.match(/Integration|CAROL/))
    .filter(issue => !issue.fields.summary.match(/batimat|qpro/i))
    .filter(issue => !changeLog.includes(issue.key))

  issues.sort((a, b) => b.fields.customfield_10005 - a.fields.customfield_10005)

  if (DEBUG) {
    console.info(util.inspect(issues, { depth: null, colors: true }))
  }

  const isBug = issue => issue.fields.issuetype.name === 'Bug'
  const bugs = issues.filter(isBug)
  const storiesOrTasks = issues.filter(issue => !isBug(issue))

  const changes = []

  if (storiesOrTasks.length > 0) {
    changes.push(`### Features\n${formatIssues(storiesOrTasks).join('\n')}`)
  }
  if (bugs.length > 0) {
    changes.push(`### Bug fixes\n${formatIssues(bugs).join('\n')}`)
  }
  if (changes.length === 0) {
    changes.push('No bugs or features from JIRA - see commits for details.')
  }

  return [
    description || `Release for Sprint ${sprintNumber}`,
    ...changes,
  ].join('\n\n')
}

export default changelogFromJIRA
