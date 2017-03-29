import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromPost, fromStatus } from 'store/selectors'
import { postList, POST_LIST } from 'store/actions'
import { PostList } from 'components'

class PostListContainer extends Component {
  static propTypes = {
    list: PropTypes.array,
    active: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
    generateChild: PropTypes.func.isRequired,
    carousel: PropTypes.bool,
  }

  static defaultProps = {
    limit: 20,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const { list, active, loading, generateChild, carousel } = this.props

    return <PostList {...{ list, active, loading, generateChild, carousel }} />
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
