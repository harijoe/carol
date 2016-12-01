import { fromJS } from 'immutable'
import chai, { expect } from 'chai'
import chaiJsonEqual from 'chai-json-equal'
import contentsReducer from './'

chai.use(chaiJsonEqual)

describe('contentsReducer', () => {
  let initialState

  beforeEach(() => {
    initialState = fromJS({
      latestProjectsOnMap: []
    })
  })

  context('state = initialState and action.type = null', function() {
    it('should be initialState!', function() {
      expect(contentsReducer(initialState, 'non existing type')).to.jsonEqual(initialState)
    })
  })

  context('state = initialState and action.type = CONTENT_LIST_SUCCESS and no contents returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'CONTENT_LIST_SUCCESS',
        scope: 'latestProjectsOnMap',
        payload: {}
      }

      expect(contentsReducer(initialState, action)).to.jsonEqual(initialState)
    })
  })

  context('state = initialState and action.type = CONTENT_LIST_SUCCESS and a list of contents returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'CONTENT_LIST_SUCCESS',
        scope: 'latestProjectsOnMap',
        payload: [
          {
            '@id': 1,
            title: 'post title 1',
            body: 'post body 1'
          },
          {
            '@id': 2,
            title: 'post title 2',
            body: 'post body 2'
          }
        ]
      }

      const expected = fromJS({
        latestProjectsOnMap: [
          {
            id: 1,
            title: 'post title 1',
            body: 'post body 1'
          },
          {
            id: 2,
            title: 'post title 2',
            body: 'post body 2'
          }
        ]
      })

      expect(contentsReducer(initialState, action)).to.jsonEqual(expected)
    })
  })
})
