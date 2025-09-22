import Pagination from "pages/components/Pagination";
import { useEffect, useState } from "react";
import { ListPage } from "types/list";
import api from "services/api";
import { formatLocalDate } from '../../../utils/format';
import { mockDashboardAPI } from '../../../services/mockDashboard';
import './responsive.css';

const DataTable = () => {

    const [activePage, setActivePage] = useState(0);
    const [page, setPage] = useState<ListPage>({
        last: true,
        totalPages: 0,
        totalElements: 0,
        number: 0,
        first: true,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Tenta usar a API real
                const response = await api.get(`/api/assets?page=${activePage}`);
                setPage(response.data);
            } catch (error) {
                console.log('API não disponível, usando dados mock para tabela');
                // Fallback para dados mock
                try {
                    const mockResponse = await mockDashboardAPI.getAssetsPaginated(activePage);
                    setPage(mockResponse.data);
                } catch (mockError) {
                    console.error('Erro ao carregar dados mock:', mockError);
                    // Dados padrão em caso de erro
                    setPage({
                        last: true,
                        totalPages: 0,
                        totalElements: 0,
                        number: 0,
                        first: true,
                    });
                }
            }
        };

        fetchData();
    }, [activePage]);

    const changePage = (index: number) => {
        setActivePage(index);
    };

    const getRiskLabel = (risk: number) => {
        const labels = { 1: 'Baixo', 2: 'Médio', 3: 'Alto', 4: 'Crítico' };
        return labels[risk as keyof typeof labels] || 'Indefinido';
    };

    return (
        <>
            <div className="pagination-top">
                <Pagination
                    page={ page }
                    onPageChange={ changePage }
                />
            </div>

            <div className="data-table-container">
                {/* Layout Desktop/Tablet */ }
                <div className="table-responsive data-table-desktop">
                    <table className="table table-striped table-hover table-sm">
                        <thead>
                            <tr>
                                <th>Nome do Host</th>
                                <th>Título</th>
                                <th>Risco</th>
                                <th>Vulns</th>
                                <th>CVSS</th>
                                <th className="hide-tablet">Asset Count</th>
                                <th className="hide-tablet">Data Criação</th>
                                <th className="hide-tablet">Data Publicação</th>
                                <th className="hide-tablet">Data Modificação</th>
                                <th className="hide-tablet">Host</th>
                                <th className="hide-tablet">IP</th>
                                <th className="hide-tablet">Vulnerability</th>
                                <th className="hide-tablet">Vulnerabilities</th>
                                <th className="hide-tablet">Status</th>
                                <th className="hide-tablet">Severity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                page.index?.map(item => {
                                    return (
                                        <tr key={ item.id }>
                                            <td>
                                                <span className={ `risk-indicator risk-${item.risk}` }></span>
                                                { item.hostname }
                                            </td>
                                            <td>{ item.title }</td>
                                            <td>
                                                <span className={ `badge bg-${item.risk === 4 ? 'danger' : item.risk === 3 ? 'warning' : item.risk === 2 ? 'info' : 'success'}` }>
                                                    { getRiskLabel(item.risk) }
                                                </span>
                                            </td>
                                            <td><span className="vuln-count">{ item.vuln_count }</span></td>
                                            <td><span className="cvss-score">{ item.cvss }</span></td>
                                            <td className="hide-tablet">{ item.asset_count }</td>
                                            <td className="hide-tablet">{ formatLocalDate(item.created, "dd/MM/yyyy") }</td>
                                            <td className="hide-tablet">{ formatLocalDate(item.publication_date, "dd/MM/yyyy") }</td>
                                            <td className="hide-tablet">{ formatLocalDate(item.modified, "dd/MM/yyyy") }</td>
                                            <td className="hide-tablet">{ item.host }</td>
                                            <td className="hide-tablet">{ item.ip_address }</td>
                                            <td className="hide-tablet">{ item.vulnerability }</td>
                                            <td className="hide-tablet">{ item.vulnerabilities }</td>
                                            <td className="hide-tablet">{ item.status }</td>
                                            <td className="hide-tablet">{ item.severity }</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>

                {/* Layout Mobile - Cards */ }
                <div className="data-table-mobile">
                    {
                        page.index?.map(item => {
                            return (
                                <div key={ item.id } className="asset-card">
                                    <div className="asset-card-header">
                                        <h5 className="asset-card-title">{ item.hostname }</h5>
                                        <span className={ `asset-card-risk risk-${item.risk}` }>
                                            { getRiskLabel(item.risk) }
                                        </span>
                                    </div>

                                    <div className="asset-card-body">
                                        <div className="asset-card-field">
                                            <span className="asset-card-label">Título</span>
                                            <span className="asset-card-value">{ item.title }</span>
                                        </div>

                                        <div className="asset-card-field">
                                            <span className="asset-card-label">Host</span>
                                            <span className="asset-card-value">{ item.host }</span>
                                        </div>

                                        <div className="asset-card-field">
                                            <span className="asset-card-label">IP</span>
                                            <span className="asset-card-value">{ item.ip_address }</span>
                                        </div>

                                        <div className="asset-card-field">
                                            <span className="asset-card-label">Asset Count</span>
                                            <span className="asset-card-value">{ item.asset_count }</span>
                                        </div>

                                        <div className="asset-card-field">
                                            <span className="asset-card-label">Criado</span>
                                            <span className="asset-card-value">{ formatLocalDate(item.created, "dd/MM/yyyy") }</span>
                                        </div>

                                        <div className="asset-card-field">
                                            <span className="asset-card-label">Modificado</span>
                                            <span className="asset-card-value">{ formatLocalDate(item.modified, "dd/MM/yyyy") }</span>
                                        </div>
                                    </div>

                                    <div className="asset-card-footer">
                                        <span>
                                            <strong className="vuln-count">{ item.vuln_count }</strong> vulnerabilidades
                                        </span>
                                        <span className="cvss-score">CVSS: { item.cvss }</span>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className="pagination-bottom">
                <Pagination
                    page={ page }
                    onPageChange={ changePage }
                />
            </div>
        </>
    );
}

export default DataTable;
