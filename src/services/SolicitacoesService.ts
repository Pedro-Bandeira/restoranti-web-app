import { ISolicitacoes } from "../interfaces"
import { Api } from "../providers"


const getAll = () => Api.get<ISolicitacoes[]>('solicitacoes/')


export const SolicitacoesService = {
    getAll,
}