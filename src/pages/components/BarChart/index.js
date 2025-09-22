/** @format */

import React, { useEffect, useState } from 'react';
import api from 'services/api';
import { mockDashboardAPI } from 'services/mockDashboard';



export default function BarChart() {

	const [id, setAsset] = useState([]); //lista asset

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Tenta usar a API real
				const response = await api.get('api/dashboard/cards/asset');
				const { asset_count, vulnerable_asset_count } = response.data;

				setAsset([{ asset_count, vulnerable_asset_count }]);
			} catch (error) {
				console.log('API não disponível, usando dados mock para dashboard');
				// Fallback para dados mock
				try {
					const mockResponse = await mockDashboardAPI.getAssets();
					const { asset_count, vulnerable_asset_count } = mockResponse.data;

					setAsset([{ asset_count, vulnerable_asset_count }]);
				} catch (mockError) {
					console.error('Erro ao carregar dados mock:', mockError);
					// Dados padrão em caso de erro
					setAsset([{ asset_count: 0, vulnerable_asset_count: 0 }]);
				}
			}
		};

		fetchData();
	}, []);

	return (
		<div className='App'>
			<h2>Vulnerable Asset: {id?.vulnerable_asset_count}</h2>

			{id?.map((id, index) => (
				<div key={String(id.asset_count + index)}>
					<p>Asset count: {id?.asset_count}</p>
					<p>Vuneravel count: {id?.vulnerable_asset_count}</p>
				</div>
			))}
		</div>
	);
}

// useEffect(() => {
// 	Promise.all([api.get('dashboard/cards/asset?format=json')]).then(
// 		(response) => {
// 			for (const res of response) {
// 				const {
// 					data: { asset_count, vulnerable_asset_count },
// 				} = res;

// 				setAsset((state) => [
// 					...state,
// 					{ asset_count, vulnerable_asset_count },
// 				]);
// 			}
// 		},
// 	);
// }, []);

// type SeriesData = {
// 	name: string;
// 	data: string[];
// };

// type ChartData = {
// 	labels: {
// 		categories: string[];
// 	};
// 	series: SeriesData[];
// };

// const Card = () => {
// 	const [chartData, setChartData] = useState<ChartData>({
// 		labels: {
// 			categories: [],
// 		},
// 		series: [
// 			{
// 				name: '',
// 				data: [],
// 			},
// 		],
// 	});

// 				setChartData({
// 					labels: {
// 						categories: myLabels,
// 					},
// 					series: [
// 						{
// 							name: '',
// 							data: mySeries,
// 						},
// 					],
// 				}

// 	const options = {
// 		plotOptions: {
// 			bar: {
// 				horizontal: true,
// 			},
// 		},
// 	};

// 			},
// 		);
// 	}, []);

// 	return (
// 		<Chart
// 			options={{ ...options, xaxis: chartData.labels }}
// 			series={chartData.series}
// 			type='bar'
// 			height='240'
// 		/>
// 	);
// };

// export default Card;
