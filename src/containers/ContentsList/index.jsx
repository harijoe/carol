import React, { Component } from 'react'
import Item from '../../ui/Item'

class ContentsList extends Component {
  setDisplay(active, i, tags) {
    if ('string' === typeof active) {
      if ('all' === active) {
        return true
      }

      return tags.includes(active)
    }

    return i === this.props.active
  }

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
          active={this.setDisplay(this.props.active, i, item.get('tags'))}
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
