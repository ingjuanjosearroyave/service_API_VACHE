import Login from "./views/Login/Login.jsx";


var routesSession = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/auth",
  },

];

export default routesSession;