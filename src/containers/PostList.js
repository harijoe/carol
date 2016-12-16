import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromPost, fromStatus } from 'store/selectors'
import { postList, POST_LIST } from 'store/actions'

import { PostList } from 'components'

class PostListContainer extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    scope: PropTypes.string.isRequired,
    tags: PropTypes.array,
    limit: PropTypes.number,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  static defaultProps = {
    limit: 20,
  }

  componentDidMount() {
    const { scope, tags, limit } = this.props

    this.props.request(scope, tags, limit)
  }

  render() {
    const { list, loading } = this.props

    return <PostList {...{ list, loading }} />
  }
}

const mapStateToProps = state => ({
  list: fromPost.getList(state),
  loading: fromStatus.isLoading(state, POST_LIST),
})

const mapDispatchToProps = (dispatch, { scope, tags, limit }) => ({
  request: () => dispatch(postList.request(scope, tags, limit)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
