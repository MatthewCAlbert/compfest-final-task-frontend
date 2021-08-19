import { UserObject } from "@/types/redux";

export const authContext = {
  setUser: (user: UserObject)=>{
    localStorage.setItem("penta--user_storage", JSON.stringify(user));
  },
  getUser: ()=>{
    try {
      const user: UserObject = JSON.parse(localStorage.getItem("penta--user_storage"));
      return user;
    } catch (error) {
      return null;
    }
  },
  setToken: (token: string)=>{
    localStorage.setItem(process.env.REACT_TOKEN_NAME || "penta--token_storage", token);
  },
  getToken: ()=>{
    const token = localStorage.getItem(process.env.REACT_TOKEN_NAME || "penta--token_storage");
    return token;
  },
  logoutUser: ()=>{
    localStorage.removeItem(process.env.REACT_TOKEN_NAME || "penta--token_storage");
    localStorage.removeItem("penta--user_storage");
  },
  isAuthenticated: ()=>{
    return authContext.getToken() ? true : false
  }
}