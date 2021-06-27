import { Layout } from 'components'
import { useFormik } from 'formik'
import { Page } from 'app/models/common/page'
import { Cliente } from 'app/models/clientes'
import { Button } from 'primereact/button'
import { InputDate } from 'components'
import { AutoComplete, AutoCompleteChangeParams, AutoCompleteCompleteMethodParams } from 'primereact/autocomplete'
import { useState } from 'react'
import { useClienteService, useVendaService } from 'app/services'

interface RelatorioVendasForm {
    cliente: Cliente;
    dataInicio: string;
    dataFim: string;
}

export const RelatorioVendas: React.FC = () => {

    const vendasService = useVendaService()
    const clienteService = useClienteService()
    const [ listaClientes, setListaClientes ] = useState<Page<Cliente>>({
        content: [], first: 0, number: 0, size: 20, totalElements: 0
    })

    const handleSubmit = (formData: RelatorioVendasForm) => {
        vendasService.gerarRelatorioVendas(
            formData.cliente?.id, 
            formData.dataInicio,
            formData.dataFim
        ).then(blob => {
            const fileURL = URL.createObjectURL(blob);
            window.open(fileURL)
        })
    }

    const formik = useFormik<RelatorioVendasForm>({
        onSubmit: handleSubmit,
        initialValues: { cliente: null, dataFim: '', dataInicio: '' }
    })

    const handleClienteAutoComplete = (e: AutoCompleteCompleteMethodParams) => {
        const nome = e.query
        clienteService
            .find(nome, '', 0, 20)
            .then(clientes => setListaClientes(clientes))
    }

    return (
        <Layout titulo="Relatório de Vendas">
            <form onSubmit={formik.handleSubmit}>
                <div className="p-fluid">
                    <div className="p-grid">
                        <div className="p-col-12">
                            <AutoComplete suggestions={listaClientes.content}
                                        completeMethod={handleClienteAutoComplete}
                                        value={formik.values.cliente}
                                        field="nome"
                                        id="cliente"
                                        name="cliente"
                                        onChange={(e: AutoCompleteChangeParams) => {
                                            formik.setFieldValue("cliente", e.value)
                                        }}
                            />
                        </div>
                        <div className="p-col-6">
                            <InputDate id="dataInicio" 
                                    label="Data Início"
                                    name="dataInicio" 
                                    value={formik.values.dataInicio}
                                    onChange={formik.handleChange} />
                        </div>
                        <div className="p-col-6">
                            <InputDate id="dataFim" 
                                    name="dataFim" 
                                    label="Data Fim"
                                    value={formik.values.dataFim}
                                    onChange={formik.handleChange} />
                        </div>
                        <div className="p-col">
                            <Button label="Gerar Relatório" type="submit" />
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    )
}