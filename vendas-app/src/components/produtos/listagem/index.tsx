import { Layout } from 'components'
import Link from 'next/link'
import { TabelaProdutos } from './tabela'
import { Produto } from 'app/models/produtos'
import useSWR from 'swr'
import { httpClient } from 'app/http'
import { AxiosResponse } from 'axios'

export const ListagemProdutos: React.FC = () => {

    const { data: result, error } = useSWR<AxiosResponse<Produto[]>>
                    ('/api/produtos', url => httpClient.get(url) )

    if(!result){
        return (
            <div>Carregando</div>
        )
    }

    return (
        <Layout titulo="Produtos">
            <Link href="/cadastros/produtos">
                <button className="button is-warning">Novo</button>
            </Link>
            <br />
            <TabelaProdutos produtos={result.data} />
        </Layout>
    )
}