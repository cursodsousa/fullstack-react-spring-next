import { Cliente } from 'app/models/clientes'
import { Layout } from 'components'
import { Input, InputCPF } from 'components'
import { useFormik } from 'formik'
import { useState } from 'react'
import { DataTable, DataTablePageParams } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useClienteService } from 'app/services'
import { Page } from 'app/models/common/page'

interface ConsultaClientesForm {
    nome?: string;
    cpf?: string;
}

export const ListagemClientes: React.FC = () => {
    
    const service = useClienteService();
    const [ clientes, setClientes ] = useState<Page<Cliente>>({
        content: [],
        number: 0,
        size: 10,
        totalElements: 0,
        first: 0
    })
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = (filtro: ConsultaClientesForm) => {
        handlePage(null)
    }
    const { 
        handleSubmit: formikSubmit, 
        values: filtro,
        handleChange 
    } = useFormik<ConsultaClientesForm>({
        onSubmit: handleSubmit,
        initialValues: { nome: '', cpf: '' }
    })

    const handlePage = (event: DataTablePageParams) => {
        setLoading(true)
        
        service.find(filtro.nome, filtro.cpf, event?.page, event?.rows)
        .then(result => {
            setClientes({...result, first: event?.first})
        }).finally(() => setLoading(false))
    }


    return (
        <Layout titulo="Clientes">
            <form onSubmit={formikSubmit}>
                <div className="columns">
                    <Input label="Nome" id="nome" 
                           columnClasses="is-half"
                           autoComplete="off"
                           onChange={handleChange}
                           name="nome"
                           value={filtro.nome} />

                    <InputCPF label="CPF" id="cpf" 
                           columnClasses="is-half"
                           onChange={handleChange}
                           name="cpf" value={filtro.cpf} />
                           
                </div>

                <div className="field is-grouped">
                    <div className="control is-link">
                        <button type="submit" className="button is-success">
                            Consultar                     
                        </button>
                    </div>
                </div>  

            </form>
            <br />
            <div className="columns">
                <div className="is-full">
                    <DataTable totalRecords={clientes.totalElements} 
                               value={clientes.content} loading={loading}
                               lazy={true} emptyMessage={"Nenhum Resultado "}
                               paginator 
                               first={clientes.first}
                               rows={clientes.size}
                               onPage={handlePage} >
                        <Column field="id" header="Código"  />
                        <Column field="nome" header="Nome"  />
                        <Column field="cpf" header="CPF"  />
                        <Column field="email" header="Email" />
                    </DataTable>
                </div>
            </div>
        </Layout>
    )
}