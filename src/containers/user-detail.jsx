import React from 'react'
import { connect } from 'react-redux'

const UserDetail = (props) => {
  if (!props.user) {
    return (<span className="loader">Select a user...</span>)
  }

  return (
    <div>
      <img
        alt=""
        src={props.user.thumbnail}
        width="200px"
      />
      <h2>{props.user.first} {props.user.last}</h2>
      <h3>Age: {props.user.age}</h3>
      <h4>Description: {props.user.description}</h4>
    </div>
  )
}

UserDetail.propTypes = {
  user: React.PropTypes.shape({
    first: React.PropTypes.string,
    last: React.PropTypes.string,
    age: React.PropTypes.number,
    description: React.PropTypes.string,
    thumbnail: React.PropTypes.string,
    UserDetail: React.PropTypes.string
  }),
  params: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail)
