export const authContext = {
  setToken: (token: string)=>{
    localStorage.setItem(process.env.REACT_TOKEN_NAME || "penta--token_storage", token);
  },
  getToken: ()=>{
    const token = localStorage.getItem(process.env.REACT_TOKEN_NAME || "penta--token_storage");
    return token;
  },
  isAuthenticated: ()=>{
    return authContext.getToken() ? true : false
  }
}