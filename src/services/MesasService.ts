import { IMesas } from "../interfaces"
import { Api } from "../providers"


const getAll = () => Api.get<IMesas[]>('Table')


export const MesasService = {
    getAll,
}