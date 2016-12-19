import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromPost, fromStatus } from 'store/selectors'
import { postList, POST_LIST } from 'store/actions'

import { PostList } from 'components'

class PostListContainer extends Component {
  static propTypes = {
    list: PropTypes.object,
    scope: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    limit: PropTypes.number,
    active: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  static defaultProps = {
    limit: 20,
  }

  componentWillMount() {
    const { scope, tags, limit } = this.props

    this.props.request(scope, tags, limit)
  }

  render() {
    const { list, active, loading } = this.props

    return <PostList {...{ list, active, loading }} />
  }
}

const mapStateToProps = (state, { scope }) => ({
  list: fromPost.getList(state, scope),
  loading: fromStatus.isLoading(state, POST_LIST),
})

const mapDispatchToProps = (dispatch, { scope, tags, limit }) => ({
  request: () => dispatch(postList.request(scope, tags, limit)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
