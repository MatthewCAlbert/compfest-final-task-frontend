import IndexPage from "@/pages";
import AccountPage from "@/pages/account";
import DompetPage from "@/pages/dompet";
import InboxPage from "@/pages/inbox";
import LoginPage from "@/pages/login";
import ProgramPage from "@/pages/program";
import RegisterPage from "@/pages/register";
import SearchPage from "@/pages/search";

interface RouteItemInterface{
  menu: {
    name: string,
    icon?: any
  },
  path: string,
  component: any,
  exact: boolean
}

export const publicRoute: RouteItemInterface[] = [
  {
    menu: {
      name: "Homepage",
      icon: "",
    },
    path: "/",
    component: IndexPage,
    exact: true
  },
  {
    menu: {
      name: "Program",
      icon: "",
    },
    path: "/program/:id",
    component: ProgramPage,
    exact: true
  },
  {
    menu: {
      name: "Search",
      icon: "",
    },
    path: "/search",
    component: SearchPage,
    exact: true
  },
  {
    menu: {
      name: "Register",
      icon: "",
    },
    path: "/register",
    component: RegisterPage,
    exact: true
  },
  {
    menu: {
      name: "Login",
      icon: "",
    },
    path: "/login",
    component: LoginPage,
    exact: true
  },
];

export const privateRoute: RouteItemInterface[] = [
  {
    menu: {
      name: "Dompet",
      icon: "",
    },
    path: "/dompet",
    component: DompetPage,
    exact: true
  },
  {
    menu: {
      name: "Inbox",
      icon: "",
    },
    path: "/inbox",
    component: InboxPage,
    exact: true
  },
  {
    menu: {
      name: "Account",
      icon: "",
    },
    path: "/akun",
    component: AccountPage,
    exact: true
  },
];