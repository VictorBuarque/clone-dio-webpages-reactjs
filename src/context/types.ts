import { IUserProps } from "../types/user"

export interface IAuthContext {
    user: IUserProps
    handleLogin: (loginData: ILoginData) => Promise<void>  //because it's asynchronous
    handleSignOut: () => void  
}

export interface IAuthContextProviderProps {
    children: React.ReactNode
}

export interface ILoginData {
    email: string;
    password: string;
}