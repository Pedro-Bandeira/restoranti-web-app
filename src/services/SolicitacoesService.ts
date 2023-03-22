import { ISolicitacoes } from "../interfaces"
import { Api } from "../providers"


const getAll = () => Api.get<ISolicitacoes[]>('solicitacoes?pendente=true')


export const SolicitacoesService = {
    getAll,
}