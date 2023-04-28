import { IAuthUser, IRootUser } from "../interfaces"
import { Api } from "../providers"

const setUserLocalStorage = (user: IAuthUser | null) => {
    localStorage.setItem('u', JSON.stringify(user))
    localStorage.setItem('i', String(user?.employeeId))
}

const getUserLocalStorage = () => {
    const json = localStorage.getItem('u')

    if (!json) {
        return null;
    }

    const user = JSON.parse(json)

    return user ?? null;
}

async function LoginRequest (username: string, password: string, confirmpassword: string) {
    try {
        const request = await Api.post<IRootUser>('UserInternal/Login', { username, password, confirmpassword})
        if (!request.data.hasError){
            return request.data.entity;
        }
        else {
            return null
        }
        
    }
    catch (error) {
        return null
    }
    
} 

export const AuthService = {
    LoginRequest,
    getUserLocalStorage,
    setUserLocalStorage
}