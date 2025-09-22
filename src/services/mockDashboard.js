// Mock data para dashboard quando API não estiver disponível
export const mockDashboardData = {
    asset: {
        asset_count: 287,
        vulnerable_asset_count: 89
    },
    topAssets: [
        { host: 'db-cluster-01.empresa.com', vuln_count: 23 },
        { host: 'web-frontend.empresa.com', vuln_count: 19 },
        { host: 'api-gateway.empresa.com', vuln_count: 17 },
        { host: 'legacy-system.empresa.com', vuln_count: 15 },
        { host: 'file-server.empresa.com', vuln_count: 12 },
        { host: 'monitoring.empresa.com', vuln_count: 8 },
        { host: 'backup-server.empresa.com', vuln_count: 6 },
        { host: 'mail-server.empresa.com', vuln_count: 5 },
        { host: 'vpn-server.empresa.com', vuln_count: 14 },
        { host: 'kubernetes-master.empresa.com', vuln_count: 16 }
    ],
    // Dados para diferentes gráficos e métricas
    vulnerabilityTrends: [
        { date: '2025-08-01', count: 45 },
        { date: '2025-08-15', count: 52 },
        { date: '2025-09-01', count: 67 },
        { date: '2025-09-15', count: 89 },
        { date: '2025-09-22', count: 89 }
    ],
    riskDistribution: [
        { level: 'Crítico', count: 15, percentage: 16.9 },
        { level: 'Alto', count: 28, percentage: 31.5 },
        { level: 'Médio', count: 31, percentage: 34.8 },
        { level: 'Baixo', count: 15, percentage: 16.9 }
    ],
    assetTypes: [
        { type: 'Servidores Web', count: 45, vulnerable: 12 },
        { type: 'Bancos de Dados', count: 23, vulnerable: 8 },
        { type: 'Serviços de Rede', count: 67, vulnerable: 15 },
        { type: 'Aplicações', count: 89, vulnerable: 28 },
        { type: 'Infraestrutura', count: 63, vulnerable: 26 }
    ],
    assets: {
        index: [
            {
                id: 1,
                hostname: 'db-cluster-01.empresa.com',
                asset_count: 23,
                title: 'Cluster Base de Dados Principal',
                host: 'db-cluster-01.empresa.com',
                publication_date: '2025-09-22T08:30:00Z',
                created: '2025-07-15T10:00:00Z',
                modified: '2025-09-22T08:30:00Z',
                ip_address: 192168001100,
                risk: 4,
                vuln_count: 23,
                vulnerability: 12,
                vulnerabilities: 23,
                status: 2,
                severity: 4,
                cvss: 8.9
            },
            {
                id: 2,
                hostname: 'web-frontend.empresa.com',
                asset_count: 19,
                title: 'Servidor Web Frontend',
                host: 'web-frontend.empresa.com',
                publication_date: '2025-09-21T14:15:00Z',
                created: '2025-08-01T09:00:00Z',
                modified: '2025-09-21T14:15:00Z',
                ip_address: 192168001200,
                risk: 3,
                vuln_count: 19,
                vulnerability: 8,
                vulnerabilities: 19,
                status: 1,
                severity: 3,
                cvss: 7.2
            },
            {
                id: 3,
                hostname: 'api-gateway.empresa.com',
                asset_count: 17,
                title: 'Gateway de APIs',
                host: 'api-gateway.empresa.com',
                publication_date: '2025-09-20T16:45:00Z',
                created: '2025-08-10T11:30:00Z',
                modified: '2025-09-20T16:45:00Z',
                ip_address: 192168001300,
                risk: 3,
                vuln_count: 17,
                vulnerability: 7,
                vulnerabilities: 17,
                status: 1,
                severity: 3,
                cvss: 6.8
            },
            {
                id: 4,
                hostname: 'legacy-system.empresa.com',
                asset_count: 15,
                title: 'Sistema Legado',
                host: 'legacy-system.empresa.com',
                publication_date: '2025-09-19T10:20:00Z',
                created: '2025-06-01T08:00:00Z',
                modified: '2025-09-19T10:20:00Z',
                ip_address: 192168001400,
                risk: 4,
                vuln_count: 15,
                vulnerability: 9,
                vulnerabilities: 15,
                status: 2,
                severity: 4,
                cvss: 8.1
            },
            {
                id: 5,
                hostname: 'file-server.empresa.com',
                asset_count: 12,
                title: 'Servidor de Arquivos',
                host: 'file-server.empresa.com',
                publication_date: '2025-09-18T13:10:00Z',
                created: '2025-07-20T12:00:00Z',
                modified: '2025-09-18T13:10:00Z',
                ip_address: 192168001500,
                risk: 2,
                vuln_count: 12,
                vulnerability: 5,
                vulnerabilities: 12,
                status: 1,
                severity: 2,
                cvss: 5.9
            },
            {
                id: 6,
                hostname: 'monitoring.empresa.com',
                asset_count: 8,
                title: 'Servidor de Monitoramento',
                host: 'monitoring.empresa.com',
                publication_date: '2025-09-17T11:45:00Z',
                created: '2025-08-05T14:20:00Z',
                modified: '2025-09-17T11:45:00Z',
                ip_address: 192168001600,
                risk: 2,
                vuln_count: 8,
                vulnerability: 3,
                vulnerabilities: 8,
                status: 1,
                severity: 2,
                cvss: 4.7
            },
            {
                id: 7,
                hostname: 'backup-server.empresa.com',
                asset_count: 6,
                title: 'Servidor de Backup',
                host: 'backup-server.empresa.com',
                publication_date: '2025-09-16T09:30:00Z',
                created: '2025-07-30T10:00:00Z',
                modified: '2025-09-16T09:30:00Z',
                ip_address: 192168001700,
                risk: 1,
                vuln_count: 6,
                vulnerability: 2,
                vulnerabilities: 6,
                status: 1,
                severity: 1,
                cvss: 3.2
            },
            {
                id: 8,
                hostname: 'mail-server.empresa.com',
                asset_count: 5,
                title: 'Servidor de Email',
                host: 'mail-server.empresa.com',
                publication_date: '2025-09-15T12:00:00Z',
                created: '2025-08-05T07:30:00Z',
                modified: '2025-09-15T12:00:00Z',
                ip_address: 192168001800,
                risk: 1,
                vuln_count: 5,
                vulnerability: 2,
                vulnerabilities: 5,
                status: 1,
                severity: 1,
                cvss: 3.8
            },
            {
                id: 9,
                hostname: 'ci-cd-server.empresa.com',
                asset_count: 11,
                title: 'Servidor CI/CD',
                host: 'ci-cd-server.empresa.com',
                publication_date: '2025-09-14T15:25:00Z',
                created: '2025-08-12T13:00:00Z',
                modified: '2025-09-14T15:25:00Z',
                ip_address: 192168001900,
                risk: 2,
                vuln_count: 11,
                vulnerability: 4,
                vulnerabilities: 11,
                status: 1,
                severity: 2,
                cvss: 5.4
            },
            {
                id: 10,
                hostname: 'dev-environment.empresa.com',
                asset_count: 9,
                title: 'Ambiente de Desenvolvimento',
                host: 'dev-environment.empresa.com',
                publication_date: '2025-09-13T10:15:00Z',
                created: '2025-08-15T09:45:00Z',
                modified: '2025-09-13T10:15:00Z',
                ip_address: 192168002000,
                risk: 2,
                vuln_count: 9,
                vulnerability: 3,
                vulnerabilities: 9,
                status: 1,
                severity: 2,
                cvss: 4.9
            },
            {
                id: 11,
                hostname: 'test-server.empresa.com',
                asset_count: 7,
                title: 'Servidor de Testes',
                host: 'test-server.empresa.com',
                publication_date: '2025-09-12T14:40:00Z',
                created: '2025-08-18T11:20:00Z',
                modified: '2025-09-12T14:40:00Z',
                ip_address: 192168002100,
                risk: 1,
                vuln_count: 7,
                vulnerability: 2,
                vulnerabilities: 7,
                status: 1,
                severity: 1,
                cvss: 3.5
            },
            {
                id: 12,
                hostname: 'dns-server.empresa.com',
                asset_count: 4,
                title: 'Servidor DNS',
                host: 'dns-server.empresa.com',
                publication_date: '2025-09-11T08:20:00Z',
                created: '2025-07-25T16:30:00Z',
                modified: '2025-09-11T08:20:00Z',
                ip_address: 192168002200,
                risk: 1,
                vuln_count: 4,
                vulnerability: 1,
                vulnerabilities: 4,
                status: 1,
                severity: 1,
                cvss: 2.8
            },
            {
                id: 13,
                hostname: 'proxy-server.empresa.com',
                asset_count: 13,
                title: 'Servidor Proxy',
                host: 'proxy-server.empresa.com',
                publication_date: '2025-09-10T12:55:00Z',
                created: '2025-08-02T10:15:00Z',
                modified: '2025-09-10T12:55:00Z',
                ip_address: 192168002300,
                risk: 3,
                vuln_count: 13,
                vulnerability: 6,
                vulnerabilities: 13,
                status: 1,
                severity: 3,
                cvss: 6.1
            },
            {
                id: 14,
                hostname: 'redis-cache.empresa.com',
                asset_count: 10,
                title: 'Servidor Cache Redis',
                host: 'redis-cache.empresa.com',
                publication_date: '2025-09-09T09:35:00Z',
                created: '2025-08-08T14:45:00Z',
                modified: '2025-09-09T09:35:00Z',
                ip_address: 192168002400,
                risk: 2,
                vuln_count: 10,
                vulnerability: 4,
                vulnerabilities: 10,
                status: 1,
                severity: 2,
                cvss: 5.2
            },
            {
                id: 15,
                hostname: 'log-server.empresa.com',
                asset_count: 6,
                title: 'Servidor de Logs',
                host: 'log-server.empresa.com',
                publication_date: '2025-09-08T16:10:00Z',
                created: '2025-08-03T12:30:00Z',
                modified: '2025-09-08T16:10:00Z',
                ip_address: 192168002500,
                risk: 1,
                vuln_count: 6,
                vulnerability: 2,
                vulnerabilities: 6,
                status: 1,
                severity: 1,
                cvss: 3.6
            },
            {
                id: 16,
                hostname: 'vpn-server.empresa.com',
                asset_count: 14,
                title: 'Servidor VPN',
                host: 'vpn-server.empresa.com',
                publication_date: '2025-09-07T13:25:00Z',
                created: '2025-07-28T15:10:00Z',
                modified: '2025-09-07T13:25:00Z',
                ip_address: 192168002600,
                risk: 3,
                vuln_count: 14,
                vulnerability: 6,
                vulnerabilities: 14,
                status: 1,
                severity: 3,
                cvss: 6.7
            },
            {
                id: 17,
                hostname: 'ftp-server.empresa.com',
                asset_count: 8,
                title: 'Servidor FTP',
                host: 'ftp-server.empresa.com',
                publication_date: '2025-09-06T11:50:00Z',
                created: '2025-07-22T09:20:00Z',
                modified: '2025-09-06T11:50:00Z',
                ip_address: 192168002700,
                risk: 2,
                vuln_count: 8,
                vulnerability: 3,
                vulnerabilities: 8,
                status: 1,
                severity: 2,
                cvss: 4.3
            },
            {
                id: 18,
                hostname: 'docker-registry.empresa.com',
                asset_count: 12,
                title: 'Registry Docker',
                host: 'docker-registry.empresa.com',
                publication_date: '2025-09-05T14:30:00Z',
                created: '2025-08-14T16:40:00Z',
                modified: '2025-09-05T14:30:00Z',
                ip_address: 192168002800,
                risk: 2,
                vuln_count: 12,
                vulnerability: 5,
                vulnerabilities: 12,
                status: 1,
                severity: 2,
                cvss: 5.7
            },
            {
                id: 19,
                hostname: 'kubernetes-master.empresa.com',
                asset_count: 16,
                title: 'Kubernetes Master',
                host: 'kubernetes-master.empresa.com',
                publication_date: '2025-09-04T10:15:00Z',
                created: '2025-08-20T13:25:00Z',
                modified: '2025-09-04T10:15:00Z',
                ip_address: 192168002900,
                risk: 3,
                vuln_count: 16,
                vulnerability: 7,
                vulnerabilities: 16,
                status: 1,
                severity: 3,
                cvss: 7.1
            },
            {
                id: 20,
                hostname: 'analytics-server.empresa.com',
                asset_count: 11,
                title: 'Servidor de Analytics',
                host: 'analytics-server.empresa.com',
                publication_date: '2025-09-03T15:45:00Z',
                created: '2025-08-07T11:50:00Z',
                modified: '2025-09-03T15:45:00Z',
                ip_address: 192168003000,
                risk: 2,
                vuln_count: 11,
                vulnerability: 4,
                vulnerabilities: 11,
                status: 1,
                severity: 2,
                cvss: 5.1
            }
        ],
        totalElements: 50, // Simula mais assets no total
        totalPages: 3,     // 3 páginas de dados
        last: false,
        first: true,
        number: 0
    }
};

// Gera mais dados para páginas adicionais
const generateAdditionalAssets = (startId, count) => {
    const serverTypes = [
        'elasticsearch', 'kibana', 'grafana', 'jenkins', 'sonarqube',
        'nexus', 'vault', 'consul', 'etcd', 'prometheus',
        'rabbitmq', 'kafka', 'zookeeper', 'cassandra', 'mongodb'
    ];

    return Array.from({ length: count }, (_, index) => {
        const id = startId + index;
        const serverType = serverTypes[index % serverTypes.length];

        return {
            id: id,
            hostname: `${serverType}-${String(id).padStart(2, '0')}.empresa.com`,
            asset_count: Math.floor(Math.random() * 20) + 1,
            title: `Servidor ${serverType.charAt(0).toUpperCase() + serverType.slice(1)}`,
            host: `${serverType}-${String(id).padStart(2, '0')}.empresa.com`,
            publication_date: `2025-09-${String(Math.floor(Math.random() * 30) + 1).padStart(2, '0')}T${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:00Z`,
            created: `2025-${String(Math.floor(Math.random() * 3) + 7).padStart(2, '0')}-${String(Math.floor(Math.random() * 30) + 1).padStart(2, '0')}T${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:00Z`,
            modified: `2025-09-${String(Math.floor(Math.random() * 30) + 1).padStart(2, '0')}T${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:00Z`,
            ip_address: 192168000000 + (id * 1000),
            risk: Math.floor(Math.random() * 4) + 1,
            vuln_count: Math.floor(Math.random() * 20) + 1,
            vulnerability: Math.floor(Math.random() * 10) + 1,
            vulnerabilities: Math.floor(Math.random() * 20) + 1,
            status: Math.floor(Math.random() * 2) + 1,
            severity: Math.floor(Math.random() * 4) + 1,
            cvss: (Math.random() * 8 + 1).toFixed(1)
        };
    });
};

// Simula chamadas de API do dashboard
export const mockDashboardAPI = {
    getAssets: () => {
        return Promise.resolve({
            data: mockDashboardData.asset
        });
    },

    getTopAssets: () => {
        return Promise.resolve({
            data: mockDashboardData.topAssets
        });
    },

    // Novos métodos para dados expandidos
    getVulnerabilityTrends: () => {
        return Promise.resolve({
            data: mockDashboardData.vulnerabilityTrends
        });
    },

    getRiskDistribution: () => {
        return Promise.resolve({
            data: mockDashboardData.riskDistribution
        });
    },

    getAssetTypes: () => {
        return Promise.resolve({
            data: mockDashboardData.assetTypes
        });
    },

    // Busca por filtros
    getAssetsByRisk: (riskLevel) => {
        const filteredAssets = mockDashboardData.assets.index.filter(asset => asset.risk === riskLevel);
        return Promise.resolve({
            data: {
                index: filteredAssets,
                totalElements: filteredAssets.length,
                totalPages: 1,
                number: 0,
                first: true,
                last: true
            }
        });
    },

    // Estatísticas detalhadas
    getDetailedStats: () => {
        return Promise.resolve({
            data: {
                totalAssets: mockDashboardData.asset.asset_count,
                vulnerableAssets: mockDashboardData.asset.vulnerable_asset_count,
                criticalVulns: 15,
                highVulns: 28,
                mediumVulns: 31,
                lowVulns: 15,
                lastScanDate: '2025-09-22T10:30:00Z',
                avgCvssScore: 5.8,
                hostsScanned: 287,
                hostsUp: 284,
                hostsDown: 3
            }
        });
    },

    getAssetsPaginated: (page = 0) => {
        const itemsPerPage = 20;
        let assets = [...mockDashboardData.assets.index];

        // Adiciona dados gerados para páginas 2 e 3
        if (page === 1) {
            assets = generateAdditionalAssets(21, itemsPerPage);
        } else if (page === 2) {
            assets = generateAdditionalAssets(41, 10); // Última página com menos items
        }

        const totalPages = 3;
        const totalElements = 50;

        // Simula paginação
        const pageData = {
            index: assets,
            totalElements: totalElements,
            totalPages: totalPages,
            number: page,
            first: page === 0,
            last: page >= (totalPages - 1),
            size: itemsPerPage,
            numberOfElements: assets.length,
            empty: assets.length === 0
        };

        return Promise.resolve({
            data: pageData
        });
    }
};