import { facebook, google } from 'config'

const isAuthenticated = grantType => [facebook.grantType, google.grantType, 'password'].includes(grantType)

export default isAuthenticated
