import { Layout } from 'components'
import Link from 'next/link'

export const ListagemProdutos: React.FC = () => {
    return (
        <Layout titulo="Produtos">
            <Link href="/cadastros/produtos">
                <button className="button is-warning">Novo</button>
            </Link>
            <br />

        </Layout>
    )
}