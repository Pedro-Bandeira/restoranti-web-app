import { useCallback, useState } from "react"
import { IRootUser, IUsers } from "../interfaces";
import { UsersService } from "../services"

export const useUsers = () => {
    const [users, setUsers] = useState<IRootUser>();

    const getAllUsers = useCallback(async () => {
        const { status, data } = await UsersService.getAll();

        if(status != 200) throw new Error();

        setUsers(data);

    }, [])


    const createUser = useCallback(async (userData: IUsers) => {
        const { status, data } = await UsersService.createUser(userData);

        if(status != 200) throw new Error();  
    }, [])

    const editUser = useCallback(async (userData: IUsers) => {
        const { status, data } = await UsersService.editUser(userData);

        if(status != 200) throw new Error();  
        return data
    }, [])

    const deleteUser = useCallback(async (employeeId: number) => {
        const { status, data } = await UsersService.deleteUser(employeeId);

        if(status != 200) throw new Error();  
    }, [])

    return {
        users,
        getAllUsers,
        createUser,
        deleteUser,
        editUser,
    }
}