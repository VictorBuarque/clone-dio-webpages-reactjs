import { createContext, useState } from "react";
import { IAuthContextProviderProps, IAuthContext, ILoginData } from "./types";
import { IUserProps } from "../types/user";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUserProps>({} as IUserProps);
  const navigate = useNavigate();

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(
        `users?email=${loginData.email}&password=${loginData.password}`
      );
      if (data.length === 1) {
        setUser(data[0]);
        navigate("/feed");
      } else {
        alert("Wrong e-mail or passaword!");
      }
    } catch {
      alert("Error, try again");
    }
  };

  const handleSignOut = () =>{
    setUser({} as IUserProps);
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
