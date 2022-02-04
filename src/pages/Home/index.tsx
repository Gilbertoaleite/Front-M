/** @format */

import Footer from 'pages/components/Footer';
import NavBar from 'pages/components/NavBar';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<NavBar />

			<div className='container my-5'>
				<div className='jumbotron'>
					<h1 id='title' className='display-4'>
						Bem-vindo!
					</h1>
					<p className='lead'>Análise e correção</p>
					<hr />
					<p>
						Esta aplicação consiste em exibir um dashboard de Vulnerabilidades.
					</p>

					<div className='btn'>
						<Link to='/dashboard' className='btn-acessar btn-lg'>
							Acessar dashboard
						</Link>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
