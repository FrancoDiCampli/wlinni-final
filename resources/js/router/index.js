import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";

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

// NOTIFICACIONES
import Notificaciones from "../views/notificaciones/Notificaciones";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
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

        // NOTIFICACIONES
        {
            path: "/notificaciones",
            name: "notificaciones",
            component: Notificaciones
        }
    ]
});
