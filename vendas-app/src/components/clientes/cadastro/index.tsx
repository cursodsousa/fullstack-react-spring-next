import { Layout } from 'components'
import { useState } from 'react'
import { ClienteForm } from './form'
import { Cliente } from 'app/models/clientes'

export const CadastroCliente: React.FC = () => {

    const [cliente, setCliente] = useState<Cliente>({
        nome: 'Fulano',
        cpf: '000.000.000-01',
        dataNascimento: '08/06/1988'
    });

    const handleSubmit = (cliente: Cliente) => {
        console.log(cliente);        
    }

    return (
        <Layout titulo="Clientes">
            <ClienteForm cliente={cliente} onSubmit={handleSubmit} />
        </Layout>
    )
}