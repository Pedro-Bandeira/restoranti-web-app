import { IRootUser, IUsers } from "../interfaces"
import { Api } from "../providers"


const getAll = () => Api.get<IRootUser>('UserInternal/GetUsers')

const createUser = (data: IUsers) => Api.post<IUsers>('UserInternal/Create', data);

const editUser = (data: IUsers) => Api.put<IRootUser>('UserInternal/Update', data);

const deleteUser = (employeeId: number) => Api.delete(`UserInternal/Delete/${employeeId}`);


export const UsersService = {
    getAll,
    createUser,
    deleteUser,
    editUser
}