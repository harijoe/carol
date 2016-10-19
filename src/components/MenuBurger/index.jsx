import React, { Component } from 'react'
import { Link } from 'react-router'
import LinkPro from '../../containers/pro/LinkPro'
import Menu from '../Menu'

class MenuBurger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      country: props.country
    }
  }

  render() {
    return (
      <Menu label="Burger menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search-pro">Trouver un artisan</Link></li>
          <li><Link to="*">Ressources pour mes travaux</Link></li>
          <li><LinkPro country={this.props.country} /></li>
        </ul>
      </Menu>
    )
  }
}

MenuBurger.propTypes = {
  country: React.PropTypes.string
}

export default MenuBurger

