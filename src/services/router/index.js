import { 
    App,
    Auth,
    Home,
    Projects 
} from "../../pages"

export const ROUTE_AUTH = {
    componentToRender: Auth,
    exact: true,
    path: "/auth"
}
export const ROUTE_DEFAULT = {
    componentToRender: Home,
    exact: true,
    path: "/"
}

export const ROUTE_APP = {
    componentToRender: App,
    exact: true,
    path: "/app"
}

export const ROUTE_HOME = {
    componentToRender: Home,
    exact: true,
    path: "/home"
}
export const ROUTE_PROJECTS = {
    componentToRender: Projects,
    exact: true,
    path: "/projects"
}

export const routes = [
    ROUTE_DEFAULT,
    ROUTE_APP,
    ROUTE_AUTH,
    ROUTE_HOME,
    ROUTE_PROJECTS
]