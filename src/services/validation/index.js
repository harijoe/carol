import isEmail from 'validator/lib/isEmail'
import isInt from 'validator/lib/isInt'

const isEmpty = value => value === undefined || value === null || value === ''
const join = rules => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0]
const passwordPattern = /^(?=.*[a-z])(?=.*(_|[^\w\s])).{8,64}$/
const postalCodePattern = /^\d{5}$/

export const email = value => !isEmpty(value) && !isEmail(value) && { id: 'validators.user.invalid_email', values: {} }
export const required = value => isEmpty(value) && { id: 'validators.required_field', values: {} }
export const integer = value => !isInt(value) && { id: 'validators.integer', values: {} }
export const match = field => (value, data) => data && value !== data[field] && { id: 'validators.must_match', values: {} }
export const password = value =>
  !isEmpty(value) && !passwordPattern.test(value) && { id: 'validators.user.password.must_match_required', values: {} }
export const postalCode = value =>
  !isEmpty(value) && !postalCodePattern.test(value) && { id: 'validators.user.postalcode.must_match_required', values: {} }
export { default as date } from './date'

export const createValidator = rules => (data = {}) => {
  const errors = {}

  Object.keys(rules).forEach(key => {
    const rule = join([].concat(rules[key]))
    const error = rule(data[key], data)

    if (error) {
      errors[key] = error
    }
  })

  return errors
}
