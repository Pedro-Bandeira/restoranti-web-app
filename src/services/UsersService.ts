import { IRootUser } from "../interfaces"
import { Api } from "../providers"


const getAll = () => Api.get<IRootUser>('UserInternal/GetUsers')


export const UsersService = {
    getAll,
}