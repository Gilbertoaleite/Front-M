/** @format */
import 'dotenv/config'; 
import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL})
	require('dotenv').config();
	console.log(process.env);

api.interceptors.request.use(async (config) => {
	const token =    getToken();
	if (token) {
		config.headers.authorization = `Token ${token}`;
	}
	return config;
});

export default api;
