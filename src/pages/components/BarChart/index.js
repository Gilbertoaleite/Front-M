/** @format */

// // import axios from 'axios';
// import { useEffect, useState, setAsset } from 'react';
// import Chart from 'react-apexcharts';
// // import { AssetDashboardCard } from 'types/list';
// // import { round } from 'utils/format';
// import api from 'services/api';

import React, { useEffect, useState } from 'react';

import api from 'services/api';



export default function BarChart() {
	
	const [id, setAsset] = useState([]); //lista asset

	useEffect(() => {
		Promise.all([
			api.get('api/dashboard/cards/asset'),
			// api.get('assets'),
			// api.get('api/dashboard/vinifraga'),
		]).then((response) => {
			for (const res of response) {
				const {
					data: { asset_count, vulnerable_asset_count },
				} = res;

				setAsset((state) => [
					...state,
					{ asset_count, vulnerable_asset_count },
				]);
			}
		});
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
