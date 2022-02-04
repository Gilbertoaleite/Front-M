import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { AssetList } from 'types/list';
import api from 'services/api';

type ChartData = {
    labels: string[];
    series: number[];
};
const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${api}/api/dashboard/charts/top-assets`).then((response) => {
					const data = response.data as AssetList[];
					const myLabels = data.map((x) => x.host);
					const mySeries = data.map((x) => x.vuln_count);

					setChartData({
						labels: myLabels,
						series: mySeries,
					});
				});
    }, []);

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type='donut'
            height='240'
        />
    );
}

export default DonutChart;