/** @format */

export type AssetList = {
	hostname: string;
	asset_count: number;
	id: number;
	title: string;
	host: string;
	publication_date: string;
	created: string;
	modified: string;
	ip_address: number;
	risk: number;
	vuln_count: number;
	vulnerability: number;
	vulnerabilities: number;
	status: number;
	severity: number;
	cvss: number;
};

export type Vulnerabilidades = {
	vulnerabilities: number;
	vulnerability: number;
	status: number;
	severity: number;
	cvss: number;
};

export type Id = {
	id: number;
};

export type ListPage = {
	index?: AssetList[];
	last?: boolean;
	totalPages: number;
	totalElements: number;
	size?: number;
	number: number;
	first: boolean;
	numberOfElements?: number;
	empty?: boolean;
};

export type AssetCvss = {
	hostname: string;
	status: number;
	cvss: number;
};

export type AssetDashboardCard = {
	asset_count: string;
	vulnerable_asset_count: string;
};
