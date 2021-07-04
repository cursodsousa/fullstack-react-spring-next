export interface DashboardData {
    produtos?: number;
    clientes?: number;
    vendas?: number;
    vendasPorMes?: VendaPorMes[];
}

export interface VendaPorMes{
    mes?: number;
    valor?: number;
}