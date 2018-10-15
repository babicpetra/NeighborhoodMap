import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Header.css'

class Header extends Component {
	static propTypes = {}
	state = {}

render() {
	const{onMenuClick} = this.props

return(
		<div className = "header">
      	<a id="menu" tabIndex = {0} role="button"
          aria-label="Hamburger Menu Icon on clicked it shows list of neighbourhood places to search for" className="header__menu" onClick ={(event) => onMenuClick(event)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"></path>
          </svg>
    	</a>
      	<h1 tabIndex ={0} className = "App-title">Coffee Places Zurich</h1>
  		</div>
)
	}
}

export default Header
