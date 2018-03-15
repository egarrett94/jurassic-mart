import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Logo from './jurassic-mart.png';


class Nav extends Component {
	render() {
		return(
				<nav>
			      <div className="nav-wrapper orange darken-3">
			        <a href="/" className="brand-logo"><img className='jurassic-mart-logo' src={Logo}/></a>
			        <ul id="nav-mobile" className="right hide-on-med-and-down">
			          <li><Link to='/'>Home</Link></li>
			          <li><Link to='/Products'>Products</Link></li>
			          <li><Link to='/Cart'>Cart</Link></li>
			          <li><Link to='/Login'>Log In</Link></li>
			          <li><Link to='/Signup'>Sign Up</Link></li>
			        </ul>
			      </div>
			    </nav>
		)
	}
}

export default Nav;