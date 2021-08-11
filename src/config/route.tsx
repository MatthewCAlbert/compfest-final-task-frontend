
interface RouteItemInterface{
  menu: {
    name: string,
    icon?: any
  },
  path: string,
  component: any,
  exact: boolean
}

const route: RouteItemInterface[] = [
  {
    menu: {
      name: "Home",
      icon: "",
    },
    path: "/",
    component: "",
    exact: true
  },
];

export default route;