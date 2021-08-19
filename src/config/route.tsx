import IndexPage from "@/pages";
import ChangePasswordPage from "@/pages/account/changePassword";
import DonationHistoryPage from "@/pages/account/donationHistory";
import EditProfilePage from "@/pages/account/edit";
import AccountPage from "@/pages/account/index";
import AdminPage from "@/pages/admin";
import AdminFundraiserListPage from "@/pages/admin/fundraiserList";
import AdminProgramDetailPage from "@/pages/admin/programDetail";
import AdminProgramListPage from "@/pages/admin/programList";
import AdminWithdrawalListPage from "@/pages/admin/withdrawalList";
import DompetPage from "@/pages/dompet";
import DompetHistoryPage from "@/pages/dompetHistory";
import AddFundraisingProgramPage from "@/pages/fundraiser/AddFundraisingProgramPage";
import FundraiserProgramListPage from "@/pages/fundraiser/MyProgramList";
import InboxPage from "@/pages/inbox";
import LoginPage from "@/pages/login";
import ProgramPage from "@/pages/program";
import RegisterPage from "@/pages/register";
import SearchPage from "@/pages/search";
import { rolesEnum } from "./enums";

interface RouteItemInterface{
  menu: {
    name: string,
    icon?: any
  },
  path: string,
  requiredRoles?: rolesEnum[],
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
      name: "Dompet History",
      icon: "",
    },
    path: "/dompet/history",
    component: DompetHistoryPage,
    exact: true
  },
  {
    menu: {
      name: "Galang Dana",
      icon: "",
    },
    path: "/fundme",
    component: AddFundraisingProgramPage,
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
    path: "/account",
    component: AccountPage,
    exact: true
  },
  {
    menu: {
      name: "Change Account Password",
      icon: "",
    },
    path: "/account/change-password",
    component: ChangePasswordPage,
    exact: true
  },
  {
    menu: {
      name: "Edit Account",
      icon: "",
    },
    path: "/account/edit",
    component: EditProfilePage,
    exact: true
  },
  {
    menu: {
      name: "Donation History",
      icon: "",
    },
    path: "/donation/history",
    component: DonationHistoryPage,
    exact: true
  },
  {
    menu: {
      name: "Admin Dashboard",
      icon: "",
    },
    path: "/admin",
    component: AdminPage,
    exact: true
  },
  {
    menu: {
      name: "Admin Program",
      icon: "",
    },
    path: "/admin/program",
    component: AdminProgramListPage,
    exact: true
  },
  {
    menu: {
      name: "Admin Withdrawal",
      icon: "",
    },
    path: "/admin/withdrawal",
    component: AdminWithdrawalListPage,
    exact: true
  },
  {
    menu: {
      name: "Admin Fundraiser",
      icon: "",
    },
    path: "/admin/fundraiser",
    component: AdminFundraiserListPage,
    exact: true
  },
  {
    menu: {
      name: "My Fundraiser Program List",
      icon: "",
    },
    path: "/fundraiser/program",
    component: FundraiserProgramListPage,
    exact: true
  },
  {
    menu: {
      name: "Fundraiser Program Detail",
      icon: "",
    },
    path: "/fundraiser/program/:id",
    component: AdminProgramDetailPage,
    exact: true
  },
];