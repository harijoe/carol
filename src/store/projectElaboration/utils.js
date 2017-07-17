import reactCookie from 'services/cookies'

export const saveProjectElaborationIdInCookies = sessionId =>
  reactCookie.set('project_elaboration_session_id', sessionId, { path: '/', maxAge: 3 * 24 * 3600, secure: true })
