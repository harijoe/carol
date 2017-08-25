import { optionsFor } from '.'

describe('optionsFor', () => {

  it('returns mr, mrs for french', () => {
    expect(optionsFor('fr').map(option => option.id)).toEqual(['mr', 'mrs'])
  })

  it('returns mr, mrs for spanish', () => {
    expect(optionsFor('es').map(option => option.id)).toEqual(['mr', 'mrs'])
  })

  it('returns mr, mrs, miss for english', () => {
    expect(optionsFor('en').map(option => option.id)).toEqual(['mr', 'mrs', 'miss'])
  })

})
