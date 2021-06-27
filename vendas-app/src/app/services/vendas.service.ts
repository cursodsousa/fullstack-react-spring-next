import { httpClient } from 'app/http'
import { Venda } from 'app/models/vendas'
import { AxiosResponse } from 'axios'

const resourceURL = '/api/vendas'

export const useVendaService = () => {

    const realizarVenda = async (venda: Venda) : Promise<void> => {
        await httpClient.post<Venda>(resourceURL, venda);
    }

    const gerarRelatorioVendas = async (
        idCliente: string = '', 
        dataInicio: string = '', 
        dataFim: string = '') : Promise<Blob> => {
        const url = `${resourceURL}/relatorio-vendas?id=${idCliente}&inicio=${dataInicio}&fim=${dataFim}`
        const response: AxiosResponse = await httpClient.get(url, { responseType: 'blob' } )
        const bytes = response.data       
        return new Blob([bytes], { type: 'application/pdf' } )
    }

    return {
        realizarVenda,
        gerarRelatorioVendas
    }
}