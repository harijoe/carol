import project from './project'

export default {
  '@context': '/contexts/Project',
  '@id': '/projects',
  '@type': 'hydra:Collection',
  'hydra:member': [
    project,
  ],
}
