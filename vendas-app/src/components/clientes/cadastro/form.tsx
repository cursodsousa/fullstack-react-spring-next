import { Cliente } from 'app/models/clientes'
import { useFormik } from 'formik'
import { InputText } from 'components'
import * as Yup from 'yup'

const formScheme: Cliente = {}
const validationScheme = Yup.object().shape({
    nome: Yup.string().trim().required("Nome é obrigatório"),
    cpf: Yup.string().trim().required("CPF é obrigatório")
})

interface ClientesFormProps {
    cliente?: Cliente;
    onSubmit: (cliente: Cliente) => void;
}

export const ClientesForm: React.FC<ClientesFormProps> = ({ cliente, onSubmit }) => {

    const formik = useFormik<Cliente>({
        initialValues: { ...formScheme, ...cliente},
        onSubmit,
        validationSchema: validationScheme
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="columns">
                <InputText label="Nome: "  
                    columnClasses="is-half" 
                    id="nome" 
                    name="nome" 
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                    error={formik.errors.nome} />

                <InputText label="CPF: "  
                    columnClasses="is-half" 
                    id="cpf" 
                    name="cpf" 
                    value={formik.values.cpf}
                    onChange={formik.handleChange}
                    error={formik.errors.cpf} />
            </div>

            <div className="field is-grouped">  
                <div className="control is-link">
                    <button type="submit" className="button">
                        { formik.values?.id ? "Atualizar" : "Salvar" }                        
                    </button>
                </div>
           </div>
        </form>
    )    
}