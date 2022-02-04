/** @format */

import Dashboard from 'pages/components/Dashboard';
import Home from 'pages/Home';
import React, { Fragment } from 'react';
import SignUp from './pages/SignUp';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './pages/SignIn';
import { isAuthenticated } from './services/auth';
import { ModalContainer } from 'react-router-modal';
import 'react-router-modal/css/react-router-modal.css';


const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/', state: { from: props.location } }} />
			)
		}
	/>
);

const Routes = () => (
	<BrowserRouter>
		<Fragment>
			<Switch>
				<Route exact path='/' component={SignIn} />
				<Route path='/signup' component={SignUp} />
				<PrivateRoute path='/home' component={Home} />
				<PrivateRoute exact path='/dashboard' component={Dashboard} />
				<Route path='*' component={() => <h1>Page not found</h1>} />
			</Switch>
			<ModalContainer />
		</Fragment>
	</BrowserRouter>
);

export default Routes;


