import { Cliente } from 'app/models/clientes'
import { useFormik } from 'formik'
import { Input as InputText, InputCPF  } from 'components'
import * as Yup from 'yup'
import { InputDate, InputNumber, InputPhone } from 'components/common/input/input'

const formScheme: Cliente = {
    cpf: '',
    email: '',
    nascimento: '',
    telefone: ''
}
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

                <InputCPF label="CPF: "  
                    columnClasses="is-half" 
                    id="cpf" 
                    name="cpf" 
                    value={formik.values.cpf}
                    onChange={formik.handleChange}
                    error={formik.errors.cpf} />
            </div>

            <div className="columns">
                <InputDate label="Data Nascimento: "  
                    columnClasses="is-half" 
                    id="nascimento" 
                    name="nascimento" 
                    value={formik.values.nascimento}
                    onChange={formik.handleChange}
                    error={formik.errors.nascimento} />

                <InputPhone label="Telefone: "  
                    columnClasses="is-half" 
                    id="telefone" 
                    name="telefone" 
                    value={formik.values.telefone}
                    onChange={formik.handleChange}
                    error={formik.errors.telefone} />
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