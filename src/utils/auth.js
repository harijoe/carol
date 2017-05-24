import { facebook, google } from 'config'

const isAuthenticated = grantType => [facebook.grantType, google.grantType, 'password', 'refresh_token'].includes(grantType)

export default isAuthenticated
