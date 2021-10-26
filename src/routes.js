
import Index from "../src/views/Index";
import Profile from "../src/views/examples/Profile.js";
import Maps from "../src/views/examples/Maps.js";
import Register from "../src/views/examples/Register.js";
import Login from "../src/views/Login/Login";
import Tables from "../src/views/examples/Tables.js";
import Icons from "../src/views/examples/Icons.js";
import Cita from "../src/views/Cita/cita"
import Pedido from "../src/views/Pedidos/pedidos";
import Pacientes from "../src/views/Pacientes/pacientes";

var routes = [
  {
    path: "/index",
    name: "Citas",
    icon: "ni ni-calendar-grid-58 text-blue",
    component: Cita,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Doctores",
    icon: "ni ni-single-02 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/pacientes",
    name: "Pacientes",
    icon: "ni ni-circle-08 text-red",
    component: Pacientes,
    layout: "/admin",
  },
  {
    path: "/pedidos",
    name: "Pedidos",
    icon: "ni ni-single-copy-04 text-green",
    component: Pedido,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Productos",
    icon: "ni ni-bag-17 text-blue",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    component: Login,
    layout: "/auth",
  },
];
export default routes;
