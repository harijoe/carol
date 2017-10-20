import requireExternalLibrary from './requireExternalLibrary'

describe('External library', () => {

  it('loads a library and then executes your code', async () => {
    expect(window.jQuery).not.toBeDefined()
    await requireExternalLibrary('https://code.jquery.com/jquery-git.min.js')
    expect(window.jQuery).toBeDefined()
  })

  it('loads a library and then executes your code', async () => {
    expect(window.d3).not.toBeDefined()
    await requireExternalLibrary('https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.min.js')
    expect(window.d3).toBeDefined()
  })

})
