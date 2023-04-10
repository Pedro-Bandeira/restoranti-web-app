import { useCallback, useState } from "react"
import { IRootUser } from "../interfaces";
import { UsersService } from "../services"

export const useUsers = () => {
    const [users, setUsers] = useState<IRootUser>();

    const getAllUsers = useCallback(async () => {
        const { status, data } = await UsersService.getAll();

        if(status != 200) throw new Error();

        setUsers(data);

    }, [])

    return {
        users,
        getAllUsers,
    }
}