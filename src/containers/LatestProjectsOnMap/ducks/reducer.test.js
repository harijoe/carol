import { fromJS } from 'immutable'
import chai, { expect } from 'chai'
import chaiJsonEqual from 'chai-json-equal'
import contentReducer from './'

chai.use(chaiJsonEqual)

describe('contentReducer', () => {
  const initialState = fromJS([
    {
      id: 0,
      title: null,
      body: null
    }
  ])
  context('state = initialState and action.type = null', function() {
    it('should be initialState!', function() {
      expect(contentReducer(initialState, 'non existing type')).to.jsonEqual(initialState)
    })
  })

  context('state = initialState and action.type = LATEST_PROJECTS_ON_MAP_RECEIVE and no posts returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'LATEST_PROJECTS_ON_MAP_RECEIVE',
        projects: []
      }

      expect(contentReducer(initialState, action)).to.jsonEqual(initialState)
    })
  })

  context('state = initialState and action.type = LATEST_PROJECTS_ON_MAP_RECEIVE and a list of posts returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'LATEST_PROJECTS_ON_MAP_RECEIVE',
        projects: [
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

      const expected = fromJS([
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
      ])

      expect(contentReducer(initialState, action)).to.jsonEqual(expected)
    })
  })
})
