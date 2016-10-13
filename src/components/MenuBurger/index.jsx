import React, { Component } from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import LinkPro from '../../containers/pro/LinkPro'

class MenuBurger extends Component {
  constructor(props) {
    super(props)

    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)

    this.state = {
      open: false,
      country: props.country,
      anchorEl: null
    }
  }

  handleTouchTap(event) {
    event.preventDefault()

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  }

  handleRequestClose() {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Burger menu"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search-pro">Trouver un artisan</Link></li>
            <li><Link to="*">Ressources pour mes travaux</Link></li>
            <li><LinkPro country={this.props.country} /></li>
          </ul>
        </Popover>
      </div>
    )
  }
}

MenuBurger.propTypes = {
  country: React.PropTypes.string
}

export default MenuBurger
