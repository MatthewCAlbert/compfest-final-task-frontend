import { authContext } from "@/utils/auth";
import axios from "axios";
import toast from "react-hot-toast";

let baseURL = process.env.REACT_APP_ENDPOINT_URL;

if (!baseURL) {
  baseURL = process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_API_PROD}/` : `${process.env.REACT_APP_API_DEV}/`;
}

const axiosInstance = axios.create({
  baseURL,
  timeout: 1000*5,
  withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.common[
    "Authorization"
  ] = `${authContext.getToken()}`;

  return config;
});


axiosInstance.interceptors.response.use(
  res => res,
  err => {
    if( err?.response?.status === 401 ){
      // authContext.logoutUser();
      // toast.error("Sesi Habis!");
      // setTimeout(()=>{
      //   window.location.replace("/login");
      // },1000);
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;