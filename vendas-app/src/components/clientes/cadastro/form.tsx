import { Cliente } from 'app/models/clientes'
import { useFormik } from 'formik'
import { Input, InputCPF, InputTelefone, InputDate } from 'components'

interface ClienteFormProps {
    cliente: Cliente;
    onSubmit: (cliente: Cliente) => void;
}

const formScheme: Cliente = {
    cadastro: '',
    cpf: '',
    dataNascimento: '',
    email: '',
    endereco: '',
    id: '',
    nome: '',
    telefone: ''
}

export const ClienteForm: React.FC<ClienteFormProps> = ({
    cliente,
    onSubmit
}) => {

    const formik = useFormik<Cliente>({
        initialValues: {...formScheme, ...cliente},
        onSubmit,
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            {formik.values.id &&
                <div className="columns">
                    <Input id="id" 
                            name="id"
                            label="Código: "
                            autoComplete="off" 
                            disabled
                            columnClasses="is-half"
                            value={formik.values.id} />

                    <Input id="cadastro" 
                        name="cadastro"
                        label="Data Cadastro: "
                        autoComplete="off" 
                        disabled
                        columnClasses="is-half"
                        value={formik.values.cadastro} />
            </div>   
            }
           <div className="columns">
               <Input id="nome" 
                      name="nome"
                      label="Nome: *"
                      autoComplete="off" 
                      columnClasses="is-full"
                      onChange={formik.handleChange} 
                      value={formik.values.nome} />
           </div>   
           <div className="columns">
               <InputCPF id="cpf" 
                      name="cpf"
                      label="CPF: *"
                      autoComplete="off" 
                      columnClasses="is-half"
                      onChange={formik.handleChange} 
                      value={formik.values.cpf} />

                <InputDate id="dataNascimento" 
                      name="dataNascimento"
                      label="Data Nascimento: *"
                      autoComplete="off" 
                      columnClasses="is-half"
                      onChange={formik.handleChange} 
                      value={formik.values.dataNascimento} />
           </div> 
           <div className="columns">
               <Input id="endereco" 
                      name="endereco"
                      label="Endereço: *"
                      autoComplete="off" 
                      columnClasses="is-full"
                      onChange={formik.handleChange} 
                      value={formik.values.endereco} />
           </div>  
           <div className="columns">
               <Input id="email" 
                      name="email"
                      label="Email: *"
                      autoComplete="off" 
                      columnClasses="is-half"
                      onChange={formik.handleChange} 
                      value={formik.values.email} />

                <InputTelefone id="telefone" 
                      name="telefone"
                      label="Telefone: *"
                      autoComplete="off" 
                      columnClasses="is-half"
                      onChange={formik.handleChange} 
                      value={formik.values.telefone} />
           </div>   
           <div className="field is-grouped">
               <div className="control is-link">
                    <button type="submit" className="button">
                        { formik.values.id ? "Atualizar" : "Salvar" }                        
                    </button>
               </div>
            </div>          
        </form>
    )
}