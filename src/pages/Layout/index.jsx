import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl'
import fr from 'react-intl/locale-data/fr'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { getCurrentMessages, getCurrentLanguage } from '../../utils/locale'
import MenuLogin from '../../containers/MenuLogin'
import MenuBurger from '../../containers/MenuBurger'
import Country from '../../containers/Country'

addLocaleData([...es, ...en, ...fr])

const Layout = (props) => {
  return (
    <MuiThemeProvider>
      <IntlProvider
        locale={getCurrentLanguage()}
        messages={getCurrentMessages()}
      >
        <div>
          <header>
            <ul>
              <li><MenuBurger /></li>
              <li>
                <Link to="/">
                  <FormattedMessage id="home" />
                </Link>
              </li>
              <li>
                <Link to="/search">
                  <FormattedMessage id="pro.site_search" />
                </Link>
              </li>
              <li><MenuLogin {...props} /></li>
              <li><Country /></li>
            </ul>
          </header>
          {props.children}
        </div>
      </IntlProvider>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: React.PropTypes.object,
  countryCode: React.PropTypes.string
}

function mapStateToProps(state) {
  return {
    countryCode: state.country.get('countryCode')
  }
}

export default connect(mapStateToProps)(Layout)
