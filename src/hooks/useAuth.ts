import { useContext } from "react";
import { AuthContext } from "../context/auth";

//every custom hook start with "use" and will return one function
export const useAuth = () => {
    const context = useContext(AuthContext);
    
    if (!context) {
        throw Error('Não existe um contexto')
    }
    return context;
}