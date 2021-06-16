import { Cliente } from 'app/models/clientes'
import { Layout } from 'components'
import { Input, InputCPF } from 'components'
import { useFormik } from 'formik'
import { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

interface ConsultaClientesForm {
    nome?: string;
    cpf?: string;
}

export const ListagemClientes: React.FC = () => {

    const [ clientes, setClientes]  = useState<Cliente[]>([
        { id: "1" , 
            nome: "fulano", 
            email: "fulano@email.com", 
            cpf: "000.000.000-00" 
        }
    ]);

    const handleSubmit = (filtro: ConsultaClientesForm) => {
        console.log(filtro)
    }

    const { 
        handleSubmit: formikSubmit, 
        values: filtro,
        handleChange 
    } = useFormik<ConsultaClientesForm>({
        onSubmit: handleSubmit,
        initialValues: { nome: '', cpf: '' }
    })

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
            <div className="columns">
                <div className="is-full">
                    <DataTable value={clientes}>
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