<template>
    <div class="main-layout">
        <!-- NAVBAR -->
        <w-navbar :main="currentPath == '/'" v-scroll="handleScroll">
            <w-top-bar class="desktop-bar">
                <div class="flex flex-row justify-between">
                    <div>
                        <w-nav-btn :disabled="true">
                            <w-icon icon="flag" h="17px"></w-icon>
                            <p class="caption bold white-text">ENG</p>
                        </w-nav-btn>
                        <w-nav-btn :disabled="true">
                            <w-icon icon="globe" h="17px"></w-icon>
                            <p class="caption bold white-text">ESP</p>
                        </w-nav-btn>
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-row justify-end">
                            <div class="custom-items-margin">
                                <w-nav-btn :disabled="true">
                                    <w-icon icon="phone-brown" h="17px"></w-icon>
                                    <p class="caption bold white-text">+51 994641341</p>
                                </w-nav-btn>
                            </div>
                            <div class="custom-items-margin hidden lg:block">
                                <w-nav-btn icon="facebook-white" iconH="16px"></w-nav-btn>
                                <w-nav-btn icon="instagram-white" iconH="16px"></w-nav-btn>
                                <w-nav-btn icon="twitter-white" iconH="15px"></w-nav-btn>
                                <w-nav-btn icon="youtube-white" iconH="13px"></w-nav-btn>
                            </div>
                            <div v-if="logged">
                                <UserLogged></UserLogged>
                            </div>
                            <div v-else>
                                <w-nav-btn
                                    @click="$router.push('/login', () => {})"
                                    :icon="
                                        currentPath == '/login'
                                            ? 'user-white'
                                            : 'user-brown'
                                    "
                                    iconH="30px"
                                ></w-nav-btn>
                                <w-nav-btn
                                    @click="$router.push('/register', () => {})"
                                    :icon="
                                        currentPath == '/register'
                                            ? 'edit-circle-white'
                                            : 'edit-circle-brown'
                                    "
                                    iconH="30px"
                                ></w-nav-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </w-top-bar>
            <w-bottom-bar class="desktop-bar">
                <div class="flex flex-row justify-between">
                    <div class="flex-1">
                        <w-nav-btn :icon="logo" iconH="56px" @click="$router.push('/', () => {})"></w-nav-btn>
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-row justify-end">
                            <div v-for="(route, i) in routes" :key="i">
                                <w-nav-btn
                                    @click="$router.push(route.path, () => {})"
                                    :class="
                                        currentPath == route.path
                                            ? 'active'
                                            : ''
                                    "
                                >{{ route.name }}</w-nav-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </w-bottom-bar>

            <w-bottom-bar class="mobile-bar">
                <div class="flex flex-row justify-between">
                    <div class="flex-auto">
                        <w-nav-btn :icon="logo" iconH="56px" @click="$router.push('/', () => {})"></w-nav-btn>
                    </div>
                    <div class="flex-auto">
                        <div class="flex flex-row justify-end">
                            <div v-if="logged" class="mt-3">
                                <UserLogged :barIcon="barBtn">
                                    <template name="bars">asdf</template>
                                </UserLogged>
                            </div>
                            <div v-else>
                                <w-nav-btn
                                    @click="$router.push('/login', () => {})"
                                    :icon="
                                    currentPath == '/login'
                                        ? 'user-white'
                                        : 'user-brown'
                                "
                                    iconH="30px"
                                ></w-nav-btn>
                                <w-nav-btn
                                    @click="$router.push('/register', () => {})"
                                    :icon="
                                    currentPath == '/register'
                                        ? 'edit-circle-white'
                                        : 'edit-circle-brown'
                                "
                                    iconH="30px"
                                ></w-nav-btn>
                                <w-nav-btn :icon="barBtn" iconH="30px" @click="drawer = true"></w-nav-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </w-bottom-bar>
        </w-navbar>

        <!-- SIDENAV -->
        <Drawer v-model="drawer"></Drawer>

        <!-- PAGES -->
        <router-view></router-view>

        <!-- FOOTER -->
        <div class="app-footer">
            <br />
            <br />
            <div class="w-full flex flex-row justify-center">
                <w-icon icon="wlinii-black" h="82px"></w-icon>
            </div>
            <br />
            <div class="w-full flex flex-row justify-center flex-wrap mobile-footer-content">
                <div v-for="(route, i) in routes" :key="i">
                    <w-btn @click="$router.push(route.path, () => {})" color="white">
                        <p class="caption bold">{{ route.name }}</p>
                    </w-btn>
                </div>
            </div>
            <br />
            <div class="w-full flex flex-row justify-center items-center flex-wrap">
                <div class="custom-item-margin fix-footer-btn">
                    <w-btn color="white" :disabled="true">
                        <div class="flex">
                            <w-icon icon="phone-black" h="15px" class="custom-icon-margin"></w-icon>
                            <p class="caption bold">+51 994641341</p>
                        </div>
                    </w-btn>
                </div>
                <div class="custom-item-margin fix-footer-btn">
                    <w-btn color="white" :disabled="true">
                        <div class="flex">
                            <w-icon icon="address" h="15px" class="custom-icon-margin"></w-icon>
                            <p class="caption bold">Av. Javier Prado 1278 - San Isidro</p>
                        </div>
                    </w-btn>
                </div>
                <div class="fix-footer-btn social-btn">
                    <w-btn :icon="true">
                        <w-icon icon="facebook-black" h="16px"></w-icon>
                    </w-btn>
                    <w-btn :icon="true">
                        <w-icon icon="instagram-black" h="16px"></w-icon>
                    </w-btn>
                    <w-btn :icon="true">
                        <w-icon icon="twitter-black" h="15px"></w-icon>
                    </w-btn>
                    <w-btn :icon="true">
                        <w-icon icon="youtube-black" h="13px"></w-icon>
                    </w-btn>
                </div>
            </div>
            <br />
            <div class="wlinii-copyright">© Wlinii 2020 - Todos Los Derechos Reservados.</div>
        </div>
    </div>
</template>

<script>
import UserLogged from "./UserLogged";
import Drawer from "./Drawer";

export default {
    data: () => ({
        logged: JSON.parse(localStorage.getItem("logged")),
        drawer: false,
        routes: [
            { name: "precios", path: "/precios" },
            { name: "alquiler", path: "/alquiler" },
            { name: "venta", path: "/venta" },
            { name: "nosotros", path: "/nosotros" },
            { name: "contacto", path: "/contacto" }
        ],
        currentPath: "/",
        scroll: false
    }),

    components: {
        UserLogged,
        Drawer
    },

    mounted() {
        this.currentPath = this.$router.currentRoute.path;
    },

    watch: {
        $route(to, from) {
            this.currentPath = to.path;
        }
    },

    computed: {
        logo() {
            if (this.currentPath == "/") {
                return this.scroll ? "wlinii-black" : "wlinii-white";
            } else {
                return "wlinii-black";
            }
        },

        barBtn() {
            if (this.currentPath == "/") {
                return this.scroll ? "bars-black" : "bars-white";
            } else {
                return "bars-black";
            }
        }
    },

    methods: {
        handleScroll(evt, el) {
            window.scrollY > window.innerHeight / 2
                ? (this.scroll = true)
                : (this.scroll = false);
        }
    }
};
</script>

<style lang="scss">
.main-layout {
    .custom-items-margin {
        margin-right: 65px;
    }

    .custom-icon-margin {
        margin-right: 17px;
    }

    .wlinii-copyright {
        background-color: black;
        color: white;
        padding: 16px;
        text-align: center;
    }

    .app-footer {
        background-color: white;
    }

    @media (max-width: 764px) {
        .mobile-footer-content {
            display: none;
        }
    }

    .fix-footer-btn {
        .btn {
            margin-top: 0px !important;
        }
    }
}
</style>
