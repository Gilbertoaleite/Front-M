/** @format */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/img/logo_m.svg';
import api from '../../services/api';
import { login } from '../../services/auth';
import { mockAuthenticate } from '../../services/mockAuth';

import { Form, Container } from './styles';

const SignIn = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSignIn = async (e) => {
		e.preventDefault();
		if (!username || !password) {
			setError('Preencha e-mail e senha para continuar!');
		} else {
			try {
				// Tenta autenticar com a API real primeiro
				let response;
				try {
					response = await api.post('api-token-auth/', {
						username,
						password,
					});
				} catch (apiError) {
					console.log('API não disponível, usando autenticação mock');
					// Se a API não estiver disponível, usa autenticação mock
					response = await mockAuthenticate(username, password);
				}

				login(response.data.token);
				navigate('/home');
			} catch (err) {
				setError('Houve um problema com o login, verifique suas credenciais.');
			}
		}
	};

	return (
		<Container>
			<Form onSubmit={handleSignIn}>
				<img src={Logo} alt='logo M' />
				{error && <p>{error}</p>}

				<input
					type='text'
					placeholder='Nome de usuário'
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Senha'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type='submit'>Entrar</button>
				<hr />

				{/* Informações para teste */}
				<div style={{
					backgroundColor: '#f8f9fa',
					padding: '15px',
					borderRadius: '5px',
					marginTop: '20px',
					border: '1px solid #dee2e6'
				}}>
					<h4 style={{ color: '#495057', fontSize: '14px', marginBottom: '10px' }}>
						👤 Usuários para Teste:
					</h4>
					<div style={{ fontSize: '12px', color: '#6c757d' }}>
						<p><strong>Administrador:</strong> admin / admin123</p>
						<p><strong>Teste:</strong> teste / 123456</p>
						<p><strong>Demo:</strong> demo / demo123</p>
					</div>
					<small style={{ color: '#868e96', fontSize: '11px' }}>
						* Use estas credenciais quando o backend não estiver disponível
					</small>
				</div>
			</Form>
		</Container>
	);
};

export default SignIn;
