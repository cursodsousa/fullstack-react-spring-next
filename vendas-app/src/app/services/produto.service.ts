import { httpClient } from 'app/http'
import { Produto } from 'app/models/produtos'
import { AxiosResponse } from 'axios'

const resourceURL: string = "/api/produtos"

export const useProdutoService = () => {

    const salvar = async (produto: Produto) : Promise<Produto> => {
       const response: AxiosResponse<Produto> = await httpClient.post<Produto>(resourceURL, produto )
       return response.data;
    }

    const atualizar = async (produto: Produto) : Promise<void> => {
        const url: string = `${resourceURL}/${produto.id}` 
        await httpClient.put<Produto>(url, produto)
    }

    const carregarProduto = async (id) : Promise<Produto> => {
        const url: string = `${resourceURL}/${id}`
        const response: AxiosResponse<Produto> = await httpClient.get(url);
        return response.data;
    }

    const deletar = async (id) : Promise<void> => {
        const url: string = `${resourceURL}/${id}`
        await httpClient.delete(url)
    }

    return {
        salvar,
        atualizar,
        carregarProduto,
        deletar
    }
}