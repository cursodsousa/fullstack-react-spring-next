import { httpClient } from 'app/http'
import { Venda } from 'app/models/vendas'

const resourceURL = '/api/vendas'

export const useVendaService = () => {

    const realizarVenda = async (venda: Venda) : Promise<void> => {
        await httpClient.post<Venda>(resourceURL, venda);
    }

    return {
        realizarVenda
    }
}