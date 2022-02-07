/** @format */

import 'dotenv/config';
import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
});
require('dotenv').config();

api.interceptors.request.use(async (config) => {
	const token = getToken();
	if (token) {
		config.headers.authorization = `Token ${token}`;
	}
	return config;
});
export default api({
	baseURL: api,
	headers: {
		'Content-Type': 'application/json',
	},
});
