import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { AssetList } from 'types/list';
import api from 'services/api';
import { mockDashboardAPI } from 'services/mockDashboard';

type ChartData = {
    labels: string[];
    series: number[];
};
const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Tenta usar a API real
                const response = await axios.get(`${api}/api/dashboard/charts/top-assets`);
                const data = response.data as AssetList[];
                const myLabels = data.map((x) => x.host);
                const mySeries = data.map((x) => x.vuln_count);

                setChartData({
                    labels: myLabels,
                    series: mySeries,
                });
            } catch (error) {
                console.log('API não disponível, usando dados mock para gráfico donut');
                // Fallback para dados mock
                try {
                    const mockResponse = await mockDashboardAPI.getTopAssets();
                    const data = mockResponse.data;
                    const myLabels = data.map((x: any) => x.host);
                    const mySeries = data.map((x: any) => x.vuln_count);

                    setChartData({
                        labels: myLabels,
                        series: mySeries,
                    });
                } catch (mockError) {
                    console.error('Erro ao carregar dados mock:', mockError);
                    // Dados padrão em caso de erro
                    setChartData({
                        labels: ['Sem dados'],
                        series: [1],
                    });
                }
            }
        };

        fetchData();
    }, []);

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={ { ...options, labels: chartData.labels } }
            series={ chartData.series }
            type='donut'
            height='240'
        />
    );
}

export default DonutChart;