import * as chatbot from './chatbot'
import postListLastProject from './postListLastProject'
import postListReinsurance from './postListReinsurance'
import postListTestimony from './postListTestimony'
import postListWorkResources from './postListWorkResources'
import * as token from './token'
import project from './project'
import projects from './projects'
import me from './me'

export default [
  {
    path: '/oauth/v2/token?client_id=4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k&client_secret=4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc&grant_type=password&username=hello%40world.com&password=myp4%24%24w0rld',
    response: token.login,
  },
  {
    path: '/oauth/v2/token?client_id=4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k&client_secret=4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc&grant_type=client_credentials',
    response: token.anonymous,
  },
  {
    method: 'POST',
    path: '/chatbot',
    response: chatbot.homepage,
    conditionalRequestBody: {
      message: { text: 'new_project.first_question' },
      user: 'MOCK_SESSION_ID',
      channel: 'project',
    },
  },
  {
    method: 'POST',
    path: '/chatbot',
    response: chatbot.reset,
    conditionalRequestBody: JSON.parse(
      '{"message":{"text":"new_project.reset"},"user":"MOCK_SESSION_ID","channel":"project"}',
    ),
  },
  {
    method: 'POST',
    path: '/chatbot',
    response: chatbot.firstKey,
    conditionalRequestBody: {
      message: {
        text: 'Fenêtres et ouvertures extérieures',
        quick_reply: { payload: '87b035a4-c3c3-44bc-89e9-fd5d862d6048' },
      },
      user: 'MOCK_SESSION_ID',
      channel: 'project',
    },
  },
  {
    method: 'POST',
    path: '/chatbot',
    response: chatbot.current,
    conditionalRequestBody: {
      channel: 'project',
      message: { text: 'new_project.current' },
      user: 'MOCK_SESSION_ID',
    },
  },
  {
    path: '/projects',
    response: projects,
  },
  {
    path: '/projects/MOCK_PROJECT_ID',
    response: project,
  },
  {
    method: 'PUT',
    path: '/projects/MOCK_PROJECT_ID',
    response: project,
  },
  {
    method: 'POST',
    path: '/project-start/MOCK_SESSION_ID',
    response: project,
  },
  {
    path: '/posts?tag[]=api-last-project&itemsPerPage=3&order[project_date]=DESC',
    response: postListLastProject,
  },
  {
    path: '/posts?tag[]=api-quotatis-reinsurance&itemsPerPage=3&order[project_date]=DESC',
    response: postListReinsurance,
  },
  {
    path: '/posts?tag[]=api-testimony&itemsPerPage=10&order[project_date]=DESC',
    response: postListTestimony,
  },
  {
    path: '/posts?tag[]=api-work-resources&itemsPerPage=3&order[project_date]=DESC',
    response: postListWorkResources,
  },
  {
    path: '/chatbot-conversations/MOCK_SESSION_ID',
    status: 204,
  },
  {
    path: '/users/me',
    response: me,
  },
  {
    path: '/users',
    method: 'POST',
    status: 201,
    response: me,
  },
  {
    path: '/users',
    method: 'PUT',
    response: me,
  },
]
