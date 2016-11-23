import React from 'react'

const setDisplay = (props) => {
  if ('undefined' !== typeof props.active) {
    return props.active === props.id ? { display: 'block' } : { display: 'none' }
  }

  return { display: 'block' }
}

const Item = (props) => {
  return (
    <article key={props.id} style={setDisplay(props)}>
      <h4>{props.title}</h4>
      <img src={props.image} alt="" />
      {props.date ? <time>{props.date}</time> : null}
      <p dangerouslySetInnerHTML={{ __html: props.content }} />
    </article>
  )
}

Item.propTypes = {
  id: React.PropTypes.number,
  title: React.PropTypes.string,
  date: React.PropTypes.string,
  image: React.PropTypes.string,
  content: React.PropTypes.string,
  active: React.PropTypes.number
}

export default Item
