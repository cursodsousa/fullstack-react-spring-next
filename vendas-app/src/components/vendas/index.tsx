import { Venda } from 'app/models/vendas'
import { Layout } from 'components'
import { VendasForm } from './form'
import { useVendaService } from 'app/services'
import { Alert } from 'components/common/message'
import { useState } from 'react'

export const Vendas: React.FC = () => {

    const service = useVendaService();
    const [ messages, setMessages ] = useState<Alert[]>([])
    const [ vendaRealizada, setVendaRealizada ] = useState<boolean>(false)

    const handleSubmit = (venda: Venda) => {
        service.realizarVenda(venda).then(response => {
            setMessages([{ 
                texto: "Venda realizada com sucesso!", 
                tipo: "success" ,
            }])
            setVendaRealizada(true)
        }).catch(error => {
            console.log(error);            
            setMessages([{ 
                texto: "Ocorreu um erro, entre em contato com a administração.", 
                tipo: "danger" ,
            }])
        })
    }

    const handleNovaVenda = () => {
        setVendaRealizada(false)
        setMessages([])
    }

    return (
        <Layout titulo="Venda" mensagens={messages}>
            <VendasForm onSubmit={handleSubmit} 
                        onNovaVenda={handleNovaVenda}
                        vendaRealizada={vendaRealizada} />
        </Layout>
    )
}