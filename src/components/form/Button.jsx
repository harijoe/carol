import React from 'react'

function Button(props) {
  return (
    <button
      type={props.type ? props.type : 'button'}
      id={props.id}
    >{props.value}</button>
  )
}

Button.propTypes = {
  id: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  type: React.PropTypes.string
}

export default Button
