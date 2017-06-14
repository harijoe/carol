import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromPost, fromStatus } from 'store/selectors'
import { postList, POST_LIST } from 'store/actions'
import { PostList } from 'components'

class PostListContainer extends Component {
  static propTypes = {
    list: PropTypes.array,
    loading: PropTypes.bool,
    scope: PropTypes.string,
    tags: PropTypes.array,
    limit: PropTypes.number,
    request: PropTypes.func.isRequired,
    generateChild: PropTypes.func.isRequired,
  }

  static defaultProps = {
    limit: 20,
  }

  componentWillMount() {
    if (this.props.list.length === 0) {
      this.props.request()
    }
  }

  render() {
    const { list, loading, ...props } = this.props

    return <PostList list={list} loading={loading} {...props} />
  }
}

const mapStateToProps = (state, { scope }) => ({
  list: fromPost.getList(state, scope),
  loading: fromStatus.isLoading(state, POST_LIST.prefix),
})

const mapDispatchToProps = (dispatch, { scope, tags, limit }) => ({
  request: () => dispatch(postList.request(scope, tags, limit)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
