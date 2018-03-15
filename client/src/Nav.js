import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import Checkout from './Checkout';
import Login from './Login'; 
import Signup from './Signup';

class Nav extends Component {
	render() {
		return(
			<Router>
			<div>
				<nav>
			      <div className="nav-wrapper lime darken-3">
			        <a href="#" className="brand-logo"><img className='jurassic-mart-logo' src='../public/jurassic-mart.png'/></a>
			        <ul id="nav-mobile" className="right hide-on-med-and-down">
			          <li><Link to='/'>Home</Link></li>
			          <li><Link to='/Products'>Products</Link></li>
			          <li><Link to='/Login'>Log In</Link></li>
			          <li><Link to='/Signup'>Sign Up</Link></li>
			          <li><Link to='/Cart'>Cart</Link></li>
			        </ul>
			      </div>
			    </nav>
			    <Route exact path='/' component={Home} />
			    <Route exact path='/Products' component={Products} />
			    <Route exact path='/Login' component={Login} />
			    <Route exact path='/Signup' component={Signup} />
			    <Route exact path='/Cart' component={Cart} />
		    </div>
			</Router>   
		)
	}
}

export default Nav;