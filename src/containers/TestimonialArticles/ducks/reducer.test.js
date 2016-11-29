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

  context('state = initialState and action.type = TESTIMONIAL_ARTICLES_RECEIVE and no articles returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'TESTIMONIAL_ARTICLES_RECEIVE',
        articles: []
      }

      expect(contentReducer(initialState, action)).to.jsonEqual(initialState)
    })
  })

  context('state = initialState and action.type = TESTIMONIAL_ARTICLES_RECEIVE and a list of articles returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'TESTIMONIAL_ARTICLES_RECEIVE',
        articles: [
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
