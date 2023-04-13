import { IRootUser, IUsers } from "../interfaces"
import { Api } from "../providers"


const getAll = () => Api.get<IRootUser>('UserInternal/GetUsers')

const createUser = (data: IUsers) => Api.post<IUsers>('UserInternal/Create', data);


export const UsersService = {
    getAll,
    createUser,
}