import { useState } from 'react'
import { Layout, Input } from 'components'

export const CadastroProdutos: React.FC = () => {

    const [ sku, setSku ] = useState<string>('')
    const [ preco, setPreco ] = useState<string>('')
    const [ nome, setNome ] = useState<string>('')
    const [ descricao, setDescricao ] = useState<string>('')    

    const submit = () => {
        const produto = {
            sku, 
            preco, 
            nome, 
            descricao
        }
        console.log(produto)
    }

    return (
        <Layout titulo="Produtos">
            <div className="columns">
                <Input label="SKU: *" 
                       columnClasses="is-half" 
                       onChange={setSku}
                       value={sku}
                       id="inputSku"
                       placeholder="Digite o SKU do produto" 
                       />

                <Input label="Preço: *" 
                       columnClasses="is-half" 
                       onChange={setPreco}
                       value={preco}
                       id="inputPreco"
                       placeholder="Digite o Preço do produto" 
                       />
           </div>

           <div className="columns">
                <Input label="Nome: *" 
                       columnClasses="is-full" 
                       onChange={setNome}
                       value={nome}
                       id="inputNome"
                       placeholder="Digite o Nome do produto"
                    />
           </div>

           <div className="columns">
            <div className="field column is-full">
                    <label className="label" htmlFor="inputDesc">Descrição: *</label>
                    <div className="control">
                        <textarea className="textarea" 
                            id="inputDesc" value={descricao}
                            onChange={ event => setDescricao(event.target.value) }
                            placeholder="Digite a Descrição detalhada do produto" />
                    </div>
            </div>
           </div>

           <div className="field is-grouped">
                <div className="control is-link">
                    <button onClick={submit} className="button">Salvar</button>
                </div>
                <div className="control">
                    <button className="button">Voltar</button>
                </div>
           </div>

        </Layout>
    )
}

