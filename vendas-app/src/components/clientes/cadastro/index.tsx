import { Cliente } from 'app/models/clientes'
import { Layout } from 'components'
import { ClientesForm } from './form'

export const CadastroClientes: React.FC = () => {

    const cliente: Cliente = {
        id: "1",
        nome: "Dougllas",
        cpf: "031.240.623-10"
    }

    const onSubmit = (cliente: Cliente) => {
        console.log(cliente)
    }

    return (
        <Layout titulo="Cadastro de Cliente">
            <ClientesForm cliente={cliente} onSubmit={onSubmit} />
        </Layout>
    )
}