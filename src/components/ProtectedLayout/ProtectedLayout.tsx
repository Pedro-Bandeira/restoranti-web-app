import { AuthService } from "../../services"

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
    const userAuth = AuthService.getUserLocalStorage()

    if(!userAuth) {
        return (
            <div>
                <h2>Usuário não autorizado!</h2>
                <a href="/login">Clique aqui para fazer login</a>
            </div>
        )
    }
    return children;
}