import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";

// BORRAR________________________
import Test from "../views/Test";
// ______________________________

// AUTH
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import RegisterSuccessful from "../views/auth/RegisterSuccessful";

// PRECIOS
import Precios from "../views/precios/Precios";

// PUBLICACIONES
import Publicaciones from "../views/publicaciones/Publicaciones";
import NuevaPublicacion from "../views/publicaciones/NuevaPublicacion";
import DetallePublicacion from "../views/publicaciones/DetallePublicacion";

// INMUEBLES
import Inmuebles from "../views/inmuebles/Inmuebles";
import InmueblesMapa from "../views/inmuebles/InmuebleMapa";

// NOTIFICACIONES
import Notificaciones from "../views/notificaciones/Notificaciones";

// AMC
import AMC1 from "../views/amc/AMC1";
import AMC2 from "../views/amc/AMC2";
import AMC4 from "../views/amc/AMC3";

// Brocker
import Brocker from "../views/brocker/Brocker";

// Agente
import Agente from "../views/agentes/Agente";
import PerfilDeAgente from "../views/agentes/PerfilDeAgente";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        // BORRAR___________
        {
            path: "/test",
            name: "test",
            component: Test
        },
        // _________________

        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/test",
            name: "test",
            component: AMC2
        },

        // AUTH
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
        {
            path: "/register/successful",
            name: "register_successful",
            component: RegisterSuccessful
        },

        // PRECIOS
        {
            path: "/precios",
            name: "precios",
            component: Precios
        },

        // PUBLICACIONES

        {
            path: "/publicaciones",
            name: "publicaciones",
            component: Publicaciones
        },
        {
            path: "/publicaciones/nueva",
            name: "publicaciones_nueva",
            component: NuevaPublicacion
        },
        {
            path: "/publicaciones/detalle",
            name: "publicaciones_detalle",
            component: DetallePublicacion
        },

        // INMUEBLES
        {
            path: "/inmuebles",
            name: "inmuebles",
            component: Inmuebles
        },
        {
            path: "/inmuebles/mapa",
            name: "inmuebles_mapa",
            component: InmueblesMapa
        },

        // NOTIFICACIONES
        {
            path: "/notificaciones",
            name: "notificaciones",
            component: Notificaciones
        },

        // AMC
        {
            path: "/amc/1",
            name: "amc_1",
            component: AMC1
        },
        {
            path: "/amc/2",
            name: "amc_2",
            component: AMC2
        },
        {
            path: "/amc/3",
            name: "amc_3",
            component: AMC4
        },

        // Brocker
        {
            path: "/perfil/brocker",
            name: "perfil_brocker",
            component: Brocker
        },

        // Agente
        {
            path: "/agente",
            name: "agente",
            component: Agente
        },
        {
            path: "/agente/perfil",
            name: "agente_perfil",
            component: PerfilDeAgente
        }
    ]
});
