import { IRootRequests } from "../interfaces"
import { Api } from "../providers"


const getAll = () => Api.get<IRootRequests>('Request/Request/GetList')


export const SolicitacoesService = {
    getAll,
}