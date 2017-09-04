import { toValidateWithInformations, validated, withPartner, withProsFound } from './project'

export default {
  '@context': '/contexts/Project',
  '@id': '/projects',
  '@type': 'hydra:Collection',
  'hydra:member': [validated, toValidateWithInformations, withPartner, withProsFound],
}
