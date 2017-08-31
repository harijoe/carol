import * as v from './'

test('email', () => {
  expect(v.email('invalid')).toBeTruthy()
  expect(v.email('invalid@invalid')).toBeTruthy()
  expect(v.email('valid@valid.com')).toBeFalsy()
})

test('required', () => {
  expect(v.required('')).toBeTruthy()
  expect(v.required(null)).toBeTruthy()
  expect(v.required(undefined)).toBeTruthy()
  expect(v.required('valid')).toBeFalsy()
})

test('integer', () => {
  expect(v.integer('invalid')).toBeTruthy()
  expect(v.integer('2.3')).toBeTruthy()
  expect(v.integer('.5')).toBeTruthy()
  expect(v.integer('1')).toBeFalsy()
})

test('match', () => {
  expect(v.match('invalid')('123', { password: '321' })).toBeTruthy()
  expect(v.match('password')('123', { password: '321' })).toBeTruthy()
  expect(v.match('password')('321', { password: '321' })).toBeFalsy()
})

test('password', () => {
  expect(v.password('invalid')).toBeTruthy()
  expect(v.password('invali%')).toBeTruthy()
  expect(v.password('invalidPassword')).toBeTruthy()
  expect(v.password('validPa!')).toBeFalsy()
  expect(v.password('validPassword!')).toBeFalsy()
  expect(v.password('validPassword!.ç')).toBeFalsy()
  expect(v.password('validPa+')).toBeFalsy()
  expect(v.password('vali dPa)')).toBeFalsy()
})

test('createValidator', () => {
  const validator = v.createValidator({
    email: [v.required, v.email],
    password: [v.required],
    passwordRepeat: [v.match('password'), v.required],
  })

  expect(typeof validator).toBe('function')

  expect(
    validator({
      email: '',
      password: '',
      passwordRepeat: null,
    }),
  ).toEqual(
    {
      email: v.required(''),
      password: v.required(''),
      passwordRepeat: v.match('a')('c', { a: 'b' }),
    },
    'Expected to follow the validation order',
  )

  expect(
    Object.keys(
      validator({
        email: 'invalid',
        password: '123456',
        passwordRepeat: '',
      }),
    ),
  ).toEqual(['email', 'passwordRepeat'])

  expect(
    Object.keys(
      validator({
        email: 'test@example.com',
        password: '123456',
        passwordRepeat: '',
      }),
    ),
  ).toEqual(['passwordRepeat'])

  expect(
    Object.keys(
      validator({
        email: 'test@example.com',
        password: '123456',
        passwordRepeat: '654321',
      }),
    ),
  ).toEqual(['passwordRepeat'])

  expect(
    validator({
      email: 'test@example.com',
      password: '123456',
      passwordRepeat: '123456',
    }),
  ).toEqual({})

  expect(validator()).toEqual({
    email: v.required(''),
    password: v.required(''),
    passwordRepeat: v.required(''),
  })
})
