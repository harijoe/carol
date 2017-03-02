import { facebook, google } from 'config'

export default grantType => [facebook.grantType, google.grantType, 'password'].includes(grantType)
