export interface IAuthUser {
    username?: string;
    email?: string;
    employeeId?: number;
    name?: string;
}

export interface IAuthContext extends IAuthUser{
    authenticate: (username: string, password: string, confirmpassword: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider{
    children: JSX.Element;
}