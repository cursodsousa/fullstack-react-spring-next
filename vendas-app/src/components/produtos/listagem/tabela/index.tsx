import { Produto } from 'app/models/produtos'
import { useState } from 'react'

interface TabelaProdutosProps {
    produtos: Array<Produto>;
    loading?: boolean;
    onEdit: (produto) => void;
    onDelete: (produto) => void;
}

export const TabelaProdutos: React.FC<TabelaProdutosProps> = ({
    produtos,
    loading,
    onEdit,
    onDelete
}) => {
    return (
        <table className="table is-striped is-hoverable">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>SKU</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {loading &&
                    <td colSpan={5}>
                       <progress className="progress is-small is-primary" max="100">15%</progress>
                    </td>
                }
                {!loading &&
                    produtos.map( produto => <ProdutoRow onEdit={onEdit} onDelete={onDelete} key={produto.id} produto={produto} />)
                }
            </tbody>
        </table>
    )
}

interface ProdutoRowProps {
    produto: Produto;
    onEdit: (produto) => void;
    onDelete: (produto) => void;
}

const ProdutoRow: React.FC<ProdutoRowProps> = ({
    produto,
    onEdit,
    onDelete
}) => {

    const [ deletando, setDeletando ] = useState<boolean>(false)
    
    const deletar = (produto: Produto) => {
        if(!deletando){
            setDeletando(true)
        }else {
            onDelete(produto)
            setDeletando(false)
        }
    }

    const cancelaDeletar = () => {
        setDeletando(false)
    }

    return (
        <tr>
            <td>{ produto.id }</td>
            <td>{ produto.sku }</td>
            <td>{ produto.nome }</td>
            <td>{ produto.preco }</td>
            <td>
                {!deletando &&
                    <button className="button is-success is-small  is-rounded" onClick={e => onEdit(produto)}>Editar</button>
                }
                <button className="button is-danger is-small is-rounded" onClick={e => deletar(produto)}>
                    {deletando ? "Confirma" : "Excluir"}
                </button>
                {deletando &&
                    <button className="button is-small is-rounded" onClick={cancelaDeletar}>
                       Cancela
                    </button>
                }
            </td>
        </tr>
    )
}