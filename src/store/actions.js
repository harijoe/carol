export * from './auth/actions'
export * from './context/actions'
export * from './firm/actions'
export * from './post/actions'
export * from './project/actions'
export * from './projectElaboration/actions'
export * from './routing/actions'
export * from './searchEngine/actions'
export * from './user/actions'

export const CLIENT_INITIATED = 'CLIENT_INITIATED'

export const clientInitiated = () => ({
  type: CLIENT_INITIATED,
})
