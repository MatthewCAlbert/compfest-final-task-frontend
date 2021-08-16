import dayjs from "dayjs";
import Cookies, { CookieAttributes } from "js-cookie";

export interface cookieOption{
  expires: number, //second
  path?: string,
  domain?: string
}

export function setUnecryptedCookie(name: string, value: string, options: cookieOption){
  const finalOptions: CookieAttributes = {
    ...options,
    secure: process.env.NODE_ENV === "production",
    expires: dayjs().add(options.expires, 's').toDate()
  };
  Cookies.set(name, value, finalOptions)
}

export function getUnecryptedCookie(name: string){
  return Cookies.get(name);
}