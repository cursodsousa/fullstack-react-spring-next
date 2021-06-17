import { Produto } from 'app/models/produtos'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { confirmDialog } from 'primereact/confirmdialog'

interface TabelaProdutosProps {
    produtos: Array<Produto>;
    onEdit: (produto) => void;
    onDelete: (produto) => void;
}

export const TabelaProdutos: React.FC<TabelaProdutosProps> = ({
    produtos,
    onDelete,
    onEdit
}) => {

    const actionTemplate = (registro: Produto) => {
        const url = `/cadastros/produtos?id=${registro.id}`
        return (
            <div>
                <Button label="Editar" 
                        className="p-button-rounded p-button-info"
                        onClick={e => onEdit(registro)}
                        />
                <Button label="Deletar" 
                    className="p-button-rounded p-button-danger"
                    onClick={event => {
                        confirmDialog({
                            message: "Confirma a exclusão deste registro?",
                            acceptLabel: "Sim",
                            rejectLabel: "Não",
                            accept: () => onDelete(registro),
                            header: "Confirmação"
                        })
                    }}
                     />
            </div>
        )
    }

    return (
        <DataTable value={produtos} paginator rows={5}>
            <Column field="id" header="Código"/>
            <Column field="sku" header="SKU"/>
            <Column field="nome" header="Nome"/>
            <Column field="preco" header="Preço"/>
            <Column header="" body={actionTemplate} />
        </DataTable>
    )
}
