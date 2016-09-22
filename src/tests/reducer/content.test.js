import contentReducer from '../../reducers/content'
import { expect } from 'chai'

describe('contentReducer', () => {
  context('state and action.type = null', function() {
    it('should be null!', function() {
      expect(contentReducer(null, 'non existing type')).to.be.null;
    })
  })

  context('state = null and action.type = CONTENT_RECEIVE and no posts returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'CONTENT_RECEIVE',
        content: []
      }
      expect(contentReducer(null, action)).to.eql([]);
    })
  })

  context('state = null and action.type = CONTENT_RECEIVE and a list of posts returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'CONTENT_RECEIVE',
        content: [
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
      expect(contentReducer(null, action)).to.eql([{id: 1, title: 'post title 1', body: 'post body 1'}, {id: 2, title: 'post title 2', body: 'post body 2'}]);
    })
  })
})
