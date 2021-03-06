import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromPost, fromContext } from 'store/selectors'
import { postList } from 'store/actions'
import PostList from 'components/PostList'

class PostListContainer extends Component {
  static propTypes = {
    list: PropTypes.array,
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
    const { list, ...props } = this.props

    return <PostList list={list} {...props} />
  }
}

const mapStateToProps = (state, { scope }) => ({
  list: fromPost.getList(state, scope),
  locale: fromContext.getLocale(state),
})

const mapDispatchToProps = (dispatch, { scope, tags, limit }) => ({
  request: () => dispatch(postList.request(scope, tags, limit)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
