import { IMesas } from "../interfaces"
import { Api } from "../providers"


const getAll = () => Api.get<IMesas[]>('mesas')


export const MesasService = {
    getAll,
}