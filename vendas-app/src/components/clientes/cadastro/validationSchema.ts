import * as Yup from 'yup'

const campoObrigatorioMensagem = "Campo obrigatório";
const campoObrigatorioValidation = Yup.string().trim().required(campoObrigatorioMensagem);

export const validationScheme = Yup.object().shape({
    cpf: Yup.string().trim()
        .required(campoObrigatorioMensagem)
        .length(14, "CPF Inválido!"),
    dataNascimento: Yup.string().trim()
        .required(campoObrigatorioMensagem)
        .length(10, "Data Inválida"),
    email: Yup.string().trim()
        .required("Campo obrigatório")
        .email("Email inválido!"),
    endereco: campoObrigatorioValidation,
    nome: campoObrigatorioValidation,
    telefone: campoObrigatorioValidation
})