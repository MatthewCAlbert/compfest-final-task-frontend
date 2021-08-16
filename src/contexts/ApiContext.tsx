import { AxiosInstance } from "axios";
import { createContext } from "react";

export interface ApiContextInterface{
  axios: AxiosInstance | null
}

const intialContext: ApiContextInterface = {
  axios: null
};

const ApiContext = createContext(intialContext);

export default ApiContext;