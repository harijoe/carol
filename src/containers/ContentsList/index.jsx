import React, { Component } from 'react'
import Item from '../../ui/Item'

class ContentsList extends Component {
  renderList() {
    return this.props.items.map((item, i) => {
      const date = new Date(item.get('date'))

      return (
        <Item
          key={i}
          id={i}
          title={item.get('title')}
          image={item.get('image')}
          content={item.get('body')}
          date={`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
          active={'string' === typeof this.props.active ? item.get('tags').includes(this.props.active) : i === this.props.active}
        />
      )
    })
  }

  render() {
    if (!this.props.items) {
      return (<p>Loading...</p>)
    }

    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

ContentsList.propTypes = {
  items: React.PropTypes.object.isRequired,
  active: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
}

export default ContentsList
