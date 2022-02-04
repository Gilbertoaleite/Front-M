/** @format */

import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { AssetDashboardCard } from 'types/list';
// import { round } from 'utils/format';
import api from 'services/api';

type SeriesData = {
	name: string;
	data: string[];
};

type ChartData = {
	labels: {
		categories: string[];
	};
	series: SeriesData[];
};

const BarChart = () => {
	const [chartData, setChartData] = useState<ChartData>({
		labels: {
			categories: [],
		},
		series: [
			{
				name: '',
				data: [],
			},
		],
	});

	useEffect(() => {
		axios
			.get(`${api}/dashboard/cards/asset?format=json`)
			.then((response) => {
				const data = response.data as AssetDashboardCard[];
				const myLabels = data.map((x) => x.asset_count);
				const mySeries = data.map((x) => {
					return x.vulnerable_asset_count;
				});

				setChartData({
					labels: {
						categories: myLabels,
					},
					series: [
						{
							name: '',
							data: mySeries,
						},
					],
				});
			});
	}, []);

	const options = {
		plotOptions: {
			bar: {
				horizontal: true,
			},
		},
	};

	return (
		<Chart
			options={{ ...options, xaxis: chartData.labels }}
			series={chartData.series}
			type='bar'
			height='240'
		/>
	);
};

export default BarChart;
