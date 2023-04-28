import { useState } from "react"
import { IAuthUser } from "../interfaces";
import { AuthService } from "../services"

export const useAuth = () => {
    const [user, setUser] = useState<IAuthUser | null> ();

    async function authenticate(username:string, password: string, confirmpassword: string) {
        try {
            const response = await AuthService.LoginRequest(username, password, confirmpassword)
            if (response === null){
                alert("Erro ao fazer login, usuario ou senha inválidos!")
            }
            else {
                const payload = {
                    username: response.username,
                    email: response.email,
                    employeeId: response.employeeId,
                    name: response.name,
                }
                setUser(payload);
                AuthService.setUserLocalStorage(payload);
        }
        }catch(error) {
            alert("Ocorreu algum erro ao fazer login, tente novamente!")
        }
    }

    async function getUserSigned() {
        const response = AuthService.getUserLocalStorage();
        if(response != null){
            return {name: response.name, username: response.username};
        }
    }

    async function logout() {
        setUser(null);
        localStorage.clear();
        location.reload();
    }

    return {
        authenticate,
        getUserSigned,
        logout,
        user,
    }
}

