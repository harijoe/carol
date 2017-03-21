import cookie from 'react-cookie'

export default function* removeToken() {
  yield [
    cookie.remove('access_token'),
    cookie.remove('grant_type'),
  ]
}
