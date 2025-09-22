/** @format */

import BarChart from 'pages/components/BarChart';
import DataTable from 'pages/components/DataTable';
import DonutChart from 'pages/components/DonutChart';
import Footer from 'pages/components/Footer';
import NavBar from 'pages/components/NavBar';
import './responsive.css';

const Dashboard = () => {
	return (
		<>
			<NavBar />

			<div className='container dashboard-container'>
				<h1 className='text-primary py-3 dashboard-title'>Dashboard de Controle</h1>

				<div className='row charts-row'>
					<div className='col-12 col-md-6'>
						<div className='chart-container'>
							<h5 className='chart-title'>
								Taxa de Vulnerabilidades (%)
							</h5>
							<BarChart />
						</div>
					</div>

					<div className='col-12 col-md-6'>
						<div className='chart-container'>
							<h5 className='chart-title'>
								Total de Vulnerabilidades
							</h5>
							<DonutChart />
						</div>
					</div>
				</div>

				<div className='py-3'>
					<h2 className='text-primary section-title'>Todos os Hosts</h2>
				</div>

				<DataTable />
			</div>

			<Footer />
		</>
	);
};

export default Dashboard;
