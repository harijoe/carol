import chai from 'chai'
import { inMemoryStorage } from './storage'

const expect = chai.expect

const webStorageTestSuite = (adapterFactory) => {
  return function() {
    let storage
    beforeEach(() => {
      storage = adapterFactory()
    })

    afterEach(() => {
      storage.clear()
    })

    describe('Storage.length', () => {
      it('should return zero if empty store', () => {
        expect(storage.length).to.equal(0)
      })

      it('should return the correct number of items if some set', () => {
        storage.setItem('ho', 'hé')
        storage.setItem('hein', 'bon')
        expect(storage.length).to.equal(2)
      })
    })

    describe('Storage.key', () => {
      it('should return null if key not found', () => {
        expect(storage.key(0)).to.equal(null)
      })

      it('should return the key in correct order', () => {
        storage.setItem('a', 0)
        storage.setItem('b', 1)
        storage.setItem('c', 2)
        storage.setItem('d', 3)

        expect(storage.key(0)).to.equal('a')
        expect(storage.key(1)).to.equal('b')
        expect(storage.key(2)).to.equal('c')
        expect(storage.key(3)).to.equal('d')
      })
    })

    describe('Storage.getItem', () => {
      it('should return the asked item value', () => {
        storage.setItem('nain', 'portequoi')
        expect(storage.getItem('nain')).to.equal('portequoi')
      })

      it('should return null if key not found', () => {
        storage.setItem('nain', 'portequoi')
        expect(storage.getItem('geant')).to.equal(null)
      })
    })

    describe('Storage.setItem', () => {
      it('should set an item properly', () => {
        expect(storage.setItem('geant', 'vert'))
        expect(storage.getItem('geant')).to.equal('vert')
      })

      it('should store only string', () => {
        storage.setItem('object', { hu: 'ho' })
        storage.setItem('trois', 3)
        expect(storage.getItem('object')).to.equal('[object Object]')
        expect(storage.getItem('trois')).to.equal('3')
      })
    })

    describe('Storage.removeItem', () => {
      it('should remove an item from the storage', () => {
        storage.setItem('geant', 'vert')
        expect(storage.removeItem('geant')).to.equal(undefined)
      })

      it('should fail silently if key was not set', () => {
        expect(storage.removeItem('does not exist')).to.equal(undefined)
      })
    })

    describe('Storage.clear', () => {
      it('should clear the all storage', () => {
        storage.setItem('geant', 'vert')
        storage.setItem('geant', 'gris')
        expect(storage.clear()).to.equal(undefined)
        expect(storage.length).to.equal(0)
      })
    })
  }
}

describe('inMemoryStorage', webStorageTestSuite(() => {
  return inMemoryStorage()
}))