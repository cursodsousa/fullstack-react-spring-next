import { Venda } from 'app/models/vendas'
import { Layout } from 'components'
import { VendasForm } from './form'

export const Vendas: React.FC = () => {

    const handleSubmit = (venda: Venda) => {
        console.log(venda);        
    }

    return (
        <Layout titulo="Venda">
            <VendasForm onSubmit={handleSubmit} />
        </Layout>
    )
}