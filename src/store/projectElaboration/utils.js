import reactCookie from 'react-cookie'

export const saveProjectElaborationIdInCookies = sessionId =>
  reactCookie.save('project_elaboration_session_id', sessionId, { path: '/', maxAge: 3 * 24 * 3600 * 1000, secure: true })
