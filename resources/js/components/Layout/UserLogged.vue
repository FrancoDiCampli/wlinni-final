<template>
    <!-- 

        logeado-inicio-submenu (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/2d509df8-9e0a-46f2-8d88-ab5a18b3c688/logeado-inicio-submenu)

    -->

    <div>
        <div class="logged">
            <div class="logged-container">
                <div class="notification-btn mr-3">
                    <w-btn :icon="true" @click="$router.push('/notificaciones')">
                        <w-icon icon="notification" h="45px"></w-icon>
                    </w-btn>
                    <div class="badge">3</div>
                </div>
                <div class="avatar mr-5">
                    <img src="/images/rostros/4.png" />
                </div>
                <div class="dropdown" v-if="windowWidth >= 768">
                    <div class="drop-header" @click="drop = !drop">
                        Hola Diego
                        <div class="arrow"></div>
                    </div>
                    <transition @enter="enterDrop">
                        <div class="drop-body" v-if="drop" ref="dropElement">
                            <w-btn
                                v-for="(action, i) in actions"
                                :key="i"
                                :fullwidth="true"
                                @click="action.path ? surf(action.path) : logout()"
                            >
                                <w-icon :icon="action.icon" h="15px"></w-icon>
                                {{ action.name }}
                            </w-btn>
                        </div>
                    </transition>
                </div>
                <div v-else style="align-self: center;">
                    <w-btn :icon="true" @click="drawer = true">
                        <w-icon v-if="barIcon" :icon="barIcon" h="30px"></w-icon>
                    </w-btn>
                </div>
            </div>
        </div>
        <DrawerLogged v-model="drawer"></DrawerLogged>
    </div>
</template>

<script>
import anime from "animejs";
import DrawerLogged from "./DrawerLogged.vue";

export default {
    data: () => ({
        drop: false,
        drawer: false,
        windowWidth: window.innerWidth,
        actions: [
            {
                name: "Perfil",
                icon: "user",
                path: "/agente"
            },
            {
                name: "Perfil Brocker",
                icon: "user",
                path: "/perfil/brocker"
            },
            {
                name: "Publicación",
                icon: "edit",
                path: "/publicaciones/nueva"
            },
            {
                name: "AMC",
                icon: "database",
                path: "/amc/1"
            },
            {
                name: "Cerrar Sesión",
                icon: "logout"
            }
        ]
    }),

    props: ["barIcon"],

    components: {
        DrawerLogged
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    },

    methods: {
        surf(path) {
            this.$router.push(path);
            this.drop = !this.drop;
        },

        logout() {
            localStorage.setItem("logged", JSON.stringify(false));
            this.drop = !this.drop;
        },

        enterDrop() {
            let dropElement = this.$refs.dropElement;
            anime({
                targets: dropElement,
                scaleY: [0, 1],
                duration: 250,
                easing: "easeInOutSine"
            });
        }
    }
};
</script>

<style lang="scss">
@import "../wlinii_components/sass/_variables.scss";

.logged {
    height: 100%;
    .logged-container {
        height: inherit;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 4px;
        .notification-btn {
            position: relative;
            .badge {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                text-align: center;
                background-color: #000;
                color: white;
                font-size: 12px;
            }
        }
    }
    .avatar {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid $secondary;
    }

    .dropdown {
        align-self: center;
        .drop-header {
            color: white;
            font-size: 13px;
            display: flex;
            flex-direction: row;
            cursor: pointer;
            .arrow {
                width: 10px;
                height: 10px;
                border: 2px solid white;
                border-top: none;
                border-right: none;
                margin: 2px 0px 0px 12px;
                transform: rotate(-45deg);
            }
        }
        .drop-body {
            position: absolute;
            top: 82px;
            right: 56px;
            display: flex;
            flex-direction: column;
            background-color: white;
            padding: 26px;
            border-radius: $full_radius;
            transform-origin: 0 0;
            .btn {
                display: flex;
                flex-direction: row;
                margin: 0px !important;
                padding-left: 0px !important;
                background-color: white !important;
                .icon,
                p {
                    align-self: center;
                }
                .icon {
                    margin-right: 12px;
                }
            }
        }
    }
}
</style>