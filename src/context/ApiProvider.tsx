import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import ApiContext from "./ApiContext";
import { AuthContextInterface } from "./AuthContext";

const { default: AuthContext } = require("./AuthContext");


const ApiProvider: React.FC = ({ children }) => {
  const [currentToken, setToken] = useState<string | null>(null);
  const authContext = useContext<AuthContextInterface>(AuthContext);
  let baseURL = process.env.REACT_APP_ENDPOINT_URL;
  if (!baseURL) {
    baseURL = process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_API_PROD}/` : `${process.env.REACT_APP_API_DEV}/`;
  }
  const axiosInstance = Axios.create({
    baseURL,
    timeout: 1000*5,
    withCredentials: true
  });
  
  axiosInstance.interceptors.request.use((config) => {
    config.headers.common[
      "Authorization"
    ] = `Bearer ${currentToken}`;

    return config;
  });

  useEffect(() => {
    if (authContext.token) {
      if( authContext.token.token !== currentToken )
        setToken(authContext.token.token);
    }
  }, [authContext.token])

  axiosInstance.interceptors.response.use(
    res => res,
    err => {
      if( authContext.loaded && !authContext.isExpired() ){
        if ( (err.response && err.response.status === 401) ) {
          authContext.logout();
          if( authContext.user !== null ){
            window.location.reload();
          }
        }
      }
      return Promise.reject(err);
    }
  );

  return (
    <ApiContext.Provider value={{
      axios: axiosInstance
    }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;