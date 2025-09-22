/** @format */

import Dashboard from 'pages/components/Dashboard';
import Home from 'pages/Home';
import React from 'react';

import SignUp from './pages/SignUp';
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ children }) => {
	return isAuthenticated() ? children : <Navigate to="/" replace />;
};

const Routes = () => (
	<BrowserRouter>
		<RouterRoutes>
			<Route path="/" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
			<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
			<Route path="*" element={<h1>Page not found</h1>} />
		</RouterRoutes>
	</BrowserRouter>
);

export default Routes;
