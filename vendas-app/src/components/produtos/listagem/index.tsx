import { Layout } from 'components'
import Link from 'next/link'
import { TabelaProdutos } from './tabela'
import { Produto } from 'app/models/produtos'
import useSWR from 'swr'
import { httpClient } from 'app/http'
import { AxiosResponse } from 'axios'
import Router from 'next/router'

export const ListagemProdutos: React.FC = () => {
    const { data: result, error } = useSWR<AxiosResponse<Produto[]>>
                    ('/api/produtos', url => httpClient.get(url) )

    const onEdit = (produto) => {
        Router.push(`/cadastros/produtos?id=${produto.id}`)
    }

    const onDelete = (produto) => {
        console.log("deletando", produto.id);        
    }

    return (
        <Layout titulo="Produtos">
            <Link href="/cadastros/produtos">
                <button className="button is-warning">Novo</button>
            </Link>
            <br /> <br />
            <TabelaProdutos onEdit={onEdit} onDelete={onDelete} loading={!result} produtos={result?.data || []} />
        </Layout>
    )
}