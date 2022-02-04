/** @format */

import BarChart from 'pages/components/BarChart';
import DataTable from 'pages/components/DataTable';
import DonutChart from 'pages/components/DonutChart';
import Footer from 'pages/components/Footer';
import NavBar from 'pages/components/NavBar';

const Dashboard = () => {
	return (
		<>
			<NavBar />

			<div className='container'>
				<h1 className='text-primary py-3'>DashBoard de Controle</h1>

				<div className='row px-3'>
					<div className='col-sm-6'>
						<h5 className='text-center text-secondary'>
							Taxa de vulnerabilidades (%)
						</h5>
						<BarChart />
					</div>

					<div className='col-sm-6'>
						<h5 className='text-center text-secondary'>
							Total de vulnerabilidades
						</h5>
						<DonutChart />
					</div>
				</div>

				<div className='py-3'>
					<h2 className='text-primary'>Todos hosts</h2>
				</div>

				<DataTable />
			</div>

			<Footer />
		</>
	);
};

export default Dashboard;
