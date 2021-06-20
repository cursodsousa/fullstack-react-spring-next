import { ItemVenda, Venda } from 'app/models/vendas'
import { useFormik } from 'formik'
import { 
    AutoComplete, 
    AutoCompleteChangeParams, 
    AutoCompleteCompleteMethodParams 
} from 'primereact/autocomplete'
import { useState } from 'react'
import { Page } from 'app/models/common/page'

import { Cliente } from 'app/models/clientes'
import { Produto } from 'app/models/produtos'

import { useClienteService, useProdutoService } from 'app/services'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Dialog } from 'primereact/dialog'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { formatReal } from 'app/util/money'

interface VendasFormProps {
    onSubmit: (venda: Venda) => void;
}

const formScheme: Venda = {
    cliente: null ,
    itens: [],
    total: 0,
    formaPagamento: ''
}

export const VendasForm: React.FC<VendasFormProps> = ({
    onSubmit
}) => {

    const clienteService = useClienteService();
    const produtoService = useProdutoService();
    const [ listaProdutos, setListaProdutos ] = useState<Produto[]>([])
    const [ listaFiltradaProdutos, setListaFiltradaProdutos ] = useState<Produto[]>([])
    const [ mensagem, setMensagem] = useState<string>('')
    const [ codigoProduto, setCodigoProduto ] = useState<string>('');
    const [ quantidadeProduto, setQuantidadeProduto ] = useState<number>(0);
    const [ produto, setProduto ] = useState<Produto>(null);
    const [ listaClientes, setListaClientes ] = useState<Page<Cliente>>({
        content: [],
        first: 0,
        number: 0,
        size: 0,
        totalElements: 0
    })

    const formik = useFormik<Venda>({
        onSubmit,
        initialValues: formScheme
    })

    const handleClienteAutocomplete = (e: AutoCompleteCompleteMethodParams) => {
        const nome = e.query
        clienteService
            .find(nome, '', 0, 20)
            .then(clientes => setListaClientes(clientes))
    }

    const handleClienteChange = (e: AutoCompleteChangeParams) => {
        const clienteSelecionado: Cliente = e.value;
        formik.setFieldValue("cliente", clienteSelecionado)
    }

    const handleCodigoProdutoSelect = (event) => {
        if(codigoProduto){
            produtoService.carregarProduto(codigoProduto)
                        .then(produtoEncontrado => setProduto(produtoEncontrado))
                        .catch(error => {
                            setMensagem("Produto não encontrado!")
                        })
        }
    }

    const handleAddProduto = () => {
        const itensAdicionados = formik.values.itens

        const jaExisteOItemNaVenda = itensAdicionados.some( (iv: ItemVenda) => {
            return iv.produto.id === produto.id
        })

        if(jaExisteOItemNaVenda){
            itensAdicionados.forEach( (iv: ItemVenda) => {
                if(iv.produto.id === produto.id){
                    iv.quantidade = iv.quantidade + quantidadeProduto
                }
            })
        }else{
            itensAdicionados.push({
                produto: produto,
                quantidade: quantidadeProduto
            })    
        }
        
        setProduto(null)
        setCodigoProduto('')
        setQuantidadeProduto(0)
    }

    const handleFecharDialogProdutoNaoEncontrado = () => {
        setMensagem('')
        setCodigoProduto('')
        setProduto(null)
    }

    const handleProdutoAutocomplete = async (e: AutoCompleteCompleteMethodParams) => {
        if(!listaProdutos.length){
             const produtosEncontrados = await produtoService.listar();
             setListaProdutos(produtosEncontrados)
        }

        const produtosEncontrados = listaProdutos.filter( (produto: Produto) => {
            return produto.nome.toUpperCase().includes(e.query.toUpperCase())
        })

        setListaFiltradaProdutos(produtosEncontrados)
    }

    const dialogMensagemFooter = () => {
        return (
            <div>
                <Button label="Ok" onClick={handleFecharDialogProdutoNaoEncontrado} />
            </div>
        )
    }

    const disableAddProdutoButton = () => {
        return !produto || !quantidadeProduto
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor="cliente">Cliente: *</label>
                    <AutoComplete 
                            suggestions={listaClientes.content}
                            completeMethod={handleClienteAutocomplete}
                            value={formik.values.cliente}
                            field="nome"
                            id="cliente" 
                            name="cliente" 
                            onChange={handleClienteChange}
                            />
                </div>    

                <div className="p-grid">
                    <div className="p-col-2">
                        <span className="p-float-label">
                            <InputText id="codigoProduto" 
                                    onBlur={handleCodigoProdutoSelect}
                                    value={codigoProduto}
                                    onChange={e => setCodigoProduto(e.target.value)} />
                            <label htmlFor="codigoProduto">Código</label>
                        </span>
                    </div>

                    <div className="p-col-6">
                       <AutoComplete suggestions={listaFiltradaProdutos}
                                     id="produto"
                                     name="produto"
                                     completeMethod={handleProdutoAutocomplete}
                                     value={produto} 
                                     field="nome" 
                                     onChange={e => setProduto(e.value)}
                                     />
                    </div>

                    <div className="p-col-2">
                        <span className="p-float-label">
                            <InputText id="qtdProduto" 
                                       value={quantidadeProduto}
                                       onChange={e => setQuantidadeProduto(parseInt(e.target.value))}
                                       />
                            <label htmlFor="qtdProduto">QTD</label>
                        </span>
                    </div>

                    <div className="p-col-2">
                        <Button type="button" 
                                disabled={disableAddProdutoButton()}
                                label="Adicionar" 
                                onClick={handleAddProduto} />
                    </div>

                    <div className="p-col-12">
                        <DataTable value={formik.values.itens}>
                            <Column field="produto.id" header="Código" />
                            <Column field="produto.sku" header="SKU" />
                            <Column field="produto.nome" header="Produto" />
                            <Column field="produto.preco" header="Preço Unitário" />
                            <Column field="quantidade" header="QTD" />
                            <Column header="Total" body={ (iv: ItemVenda) => {
                                return (
                                    <div>
                                        { iv.produto.preco * iv.quantidade }
                                    </div>
                                )
                            } } />
                        </DataTable>
                    </div>


                </div>  
                <Button type="submit" label="Finalizar" />
            </div>
            <Dialog header="Atenção!" position="top" 
                    visible={!!mensagem} 
                    onHide={handleFecharDialogProdutoNaoEncontrado}
                    footer={dialogMensagemFooter}>
                {mensagem}
            </Dialog>
        </form>
    )
}