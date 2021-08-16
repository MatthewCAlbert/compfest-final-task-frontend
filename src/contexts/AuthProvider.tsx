import React from "react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { roles } from "@/config/enums";

export interface UserDataInterface{
  username: string,
  email: string,
  id: string,
  name: string,
  role: roles
}

export interface TokenDataInterface{
  expires: string,
  token: string
}

const AuthProvider: React.FC = ({children})=>{
  const [user, setUser] = useState<UserDataInterface | null>(null);
  const [token, setToken] = useState<TokenDataInterface | null>(null);
  const [loaded, setLoaded] = useState(false);

  const USER_STORAGE = process.env.REACT_USER_NAME || "user-storage";
  const TOKEN_STORAGE = process.env.REACT_TOKEN_NAME || "user-token";

  const isExpired = ()=>{
    return token ? !dayjs(token.expires).subtract(1, 'm').isAfter(Date.now()) : false;
  }

  const isAuthenticated = () => {
    return Boolean(loaded && token && !isExpired());
  }

  useEffect(() => {
    const userStorage = localStorage.getItem(USER_STORAGE);
    const tokenStorage = localStorage.getItem(TOKEN_STORAGE);
    if (userStorage && tokenStorage) {
      setUser(JSON.parse(userStorage));
      setToken(JSON.parse(tokenStorage));
    }
    setLoaded(true);
  }, [])

  const updateUserData = (data: UserDataInterface)=>{
    const newData = data;
    setUser(newData);
    localStorage.setItem(USER_STORAGE, JSON.stringify(newData) );
  }

  const updateToken = (data: TokenDataInterface)=>{
    setToken(data);
    localStorage.setItem(TOKEN_STORAGE, JSON.stringify(data) );
  }

  const login = (data: {
    token: TokenDataInterface,
    user: UserDataInterface
  })=>{
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem(TOKEN_STORAGE, JSON.stringify(data.token) );
    localStorage.setItem(USER_STORAGE, JSON.stringify(data.user) );
  }
  const logout = ()=>{
    setUser(null);
    setToken(null);
    localStorage.removeItem(TOKEN_STORAGE);
    localStorage.removeItem(USER_STORAGE);
  }

  const context = { user, token, isAuthenticated, login, logout, loaded, updateUserData, isExpired, updateToken }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;