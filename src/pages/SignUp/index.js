/** @format */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Logo from '../../assets/img/logo_m.svg';
import { Form, Container } from './styles';

class SignUp extends Component {
	state = {
		username: '',
		password: '',
		error: '',
	};

	handleSignUp = async (e) => {
		e.preventDefault();
		const { username, password } = this.state;
		if (!username  || !password) {
			this.setState({ error: 'Preencha todos os dados para se cadastrar' });
		} else {
			try {
				await api.post('/users', { username, password });
				this.props.history.push('/');
			} catch (err) {
				console.log(err);
				this.setState({ error: 'Ocorreu um erro ao registrar sua conta. T.T' });
			}
		}
	};

	render() {
		return (
			<Container>
				<Form onSubmit={this.handleSignUp}>
					<img src={Logo} alt='Airbnb logo' />
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
					<button type='submit'>Cadastrar </button>
					<hr />
					<Link to='/'>Fazer login</Link>
				</Form>
			</Container>
		);
	}
}
export default SignUp;
