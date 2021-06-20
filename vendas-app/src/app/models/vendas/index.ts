import { Cliente } from "app/models/clientes";
import { Produto } from "app/models/produtos";

export interface Venda {
    cliente?: Cliente;
    produtos?: Array<Produto>;
    formaPagamento?: string;
    total: number;
}