const api = require('.').default

global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: true, id: '123' }))

beforeEach(() => {
  global.fetch.mockClear()
})

it('api get call', () => {
  expect(global.fetch).not.toBeCalled()
  api.get('/test').then(response => {
    expect(response.id).toBe('123')
  })
})

it('api post call', () => {
  expect(global.fetch).not.toBeCalled()
  api.post('/test', { title: 'test' }, { foo: 'bar' }).then(response => {
    expect(response.id).toBe('123')
  })
})
