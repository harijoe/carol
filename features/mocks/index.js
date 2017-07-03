import chatbot from './chatbot'
import postListLastProject from './postListLastProject'
import postListReinsurance from './postListReinsurance'
import postListTestimony from './postListTestimony'
import postListWorkResources from './postListWorkResources'
import token from './token'

export default [
  {
    path: '/oauth/v2/token',
    response: token,
  },
  {
    method: 'POST',
    path: '/chatbot',
    response: chatbot,
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
    path: '/chatbot-conversations/',
    status: 204,
  },
]
