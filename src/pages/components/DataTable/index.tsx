import axios from "axios";
import Pagination from "pages/components/Pagination";
import { useEffect, useState } from "react";
import { ListPage } from "types/list";
import api from "services/api";
import { formatLocalDate } from '../../../utils/format';

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
        axios
					.get(`${api}/api/assets?page=${activePage}`)
					.then((response) => {
						setPage(response.data);
					});
    }, [activePage]);

    const changePage = (index: number) => {
        setActivePage(index);
    };

    return (
        <>
            <Pagination
                page={page}
                onPageChange={changePage}
            />

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Nome do Host</th>
                            <th>Asset Count</th>
                            <th>Data de Criação</th>
                            <th>Data de Publicação</th>
                            <th>Data de modificação</th>
                            <th>Titulo</th>
                            <th>Host</th>
                            <th>Endereço IP</th>
                            <th>Risco</th>
                            <th>Vuln count</th>
                            <th>Vulnerability</th>
                            <th>Vulnerabilities</th>
                            <th>Status</th>
                            <th>Severity</th>
                            <th>Cvss</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            page.index?.map(item => {
                                return (
                                    <tr key={item.id}>
                                        
                                        <td>{item.hostname}</td>
                                        <td>{item.asset_count}</td>
                                        <td>{formatLocalDate(item.created, "dd/MM/yyyy")}</td>
                                        <td>{formatLocalDate(item.publication_date, "dd/MM/yyyy")}</td>
                                        <td>{formatLocalDate(item.modified, "dd/MM/yyyy")}</td>
                                        <td>{item.host}</td>
                                        <td>{item.ip_address}</td>
                                        <td>{item.risk}</td>
                                        <td>{item.vuln_count}</td>
                                        <td>{item.vulnerability}</td>
                                        <td>{item.vulnerabilities }</td>
                                        <td>{item.status }</td>
                                        <td>{item.severity }</td>
                                        <td>{item.cvss}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;
