import React from 'react'

const setDisplay = (active = false) => {
  return active ? { display: 'block' } : { display: 'none' }
}

const Item = (props) => {
  return (
    <article key={props.id} style={setDisplay(props.active)}>
      <h4>{props.title}</h4>
      <img src={props.image} alt="" />
      <time>{props.date}</time>
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
  active: React.PropTypes.bool
}

export default Item
