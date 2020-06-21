import { App, Auth, Home, Projects, Profile } from "../../pages";

export const ROUTE_AUTH = {
  componentToRender: Auth,
  exact: true,
  path: "/auth",
};
export const ROUTE_DEFAULT = {
  componentToRender: Home,
  exact: true,
  path: "/",
};

export const ROUTE_APP = {
  componentToRender: App,
  exact: true,
  path: "/app/:id",
};

export const ROUTE_HOME = {
  componentToRender: Home,
  exact: true,
  path: "/home",
};
export const ROUTE_PROJECTS = {
  componentToRender: Projects,
  exact: true,
  path: "/projects",
};

export const ROUTE_PROFILE = {
  componentToRender: Profile,
  exact: true,
  path: "/profile",
};

export const routes = [
  ROUTE_DEFAULT,
  ROUTE_APP,
  ROUTE_AUTH,
  ROUTE_HOME,
  ROUTE_PROJECTS,
  ROUTE_PROFILE,
];
