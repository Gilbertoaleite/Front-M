/** @format */

import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';

import Logo from '../../assets/img/logo_m.svg';
import api from '../../services/api';
import { login } from '../../services/auth';

import { Form, Container } from './styles';

class SignIn extends Component {
	state = {
		username: '',
		password: '',
		error: '',
	};

	handleSignIn = async (e) => {
		e.preventDefault();
		const { username, password } = this.state;
		if (!username || !password) {
			this.setState({ error: 'Preencha e-mail e senha para continuar!' });
		} else {
			try {
				const response = await api.post('/api-token-auth/', {
					username,
					password,
				});
				login(response.data.token);
				this.props.history.push('/home');
			} catch (err) {
				this.setState({
					error:
						'Houve um problema com o login, verifique suas credenciais.',
				});
			}
		}
	};

	render() {
		return (
			<Container>
				<Form onSubmit={this.handleSignIn}>
					<img src={Logo} alt='logo M' />
					{this.state.error && <p>{this.state.error}</p>}

					<input
						type='text'
						placeholder='Nome de usuário'
						onChange={(e) => this.setState({ username: e.target.value })}
					/>
					<input
						type='password'
						placeholder='Senha'
						onChange={(e) => this.setState({ password: e.target.value })}
					/>
					<button type='submit'>Entrar</button>
					<hr />
					
				</Form>
			</Container>
		);
	}
}

export default withRouter(SignIn);
