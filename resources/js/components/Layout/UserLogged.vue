<template>
    <!-- 

        logeado-inicio-submenu (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/2d509df8-9e0a-46f2-8d88-ab5a18b3c688/logeado-inicio-submenu)

    -->

    <div v-scroll="handleScroll">
        <div class="logged">
            <div class="logged-container">
                <div class="dropdown">
                    <div class="notification-btn mr-3">
                        <w-btn :icon="true" @click="showNoti()">
                            <w-icon icon="notification" h="45px"></w-icon>
                        </w-btn>
                        <div class="badge">3</div>
                    </div>
                    <transition @enter="enterDrop('notiDrop')">
                        <div class="drop-body" v-if="notiDrop" ref="notiDrop">
                            <div class="noti-drop" v-for="(noti, i) in notifications" :key="i">
                                <div class="flex flex-row justify-between flex-wrap">
                                    <div class="w-1/4">
                                        <div class="avatar">
                                            <img :src="noti.image" />
                                        </div>
                                    </div>
                                    <div class="w-3/4 flex flex-col-reverse justify-between">
                                        <div class="w-full flex flex-row justify-between flex-wrap">
                                            <div class="w-full">
                                                <p class="bold ml-2">{{ noti.name }}</p>
                                            </div>
                                            <div class="w-full self-center px-2">
                                                <p>{{ noti.content }}</p>
                                            </div>
                                            <div class="w-full self-center px-2">
                                                <p class="bold text-left mb-5 mt-1">{{ noti.date }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div
                                class="load-more"
                                @click="$router.push('/notificaciones'); notiDrop = false;"
                            >
                                <p class="bold">VER MÁS NOTIFICACIONES</p>
                            </div>
                        </div>
                    </transition>
                </div>

                <div class="avatar mr-5">
                    <img src="/images/rostros/4.png" />
                </div>
                <div class="dropdown" v-if="windowWidth >= 768">
                    <div class="drop-header" @click="drop = !drop">
                        Hola Diego
                        <div class="arrow"></div>
                    </div>
                    <transition @enter="enterDrop('userDrop')">
                        <div class="drop-body" v-if="drop" ref="userDrop">
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
        notiDrop: false,
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
        ],
        notifications: [
            {
                state: "guardar",
                stars: 3,
                image: "/images/rostros/1.png",
                name: "Kazmer Maxi",
                content:
                    "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
                date: "Hace 2 días"
            },
            {
                state: "guardar",
                stars: 3,
                image: "/images/rostros/2.png",
                name: "Escobar German",
                content:
                    "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
                date: "Hace 2 días"
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

        showNoti() {
            if (this.windowWidth <= 768) {
                this.$router.push("/notificaciones");
                this.notiDrop = false;
            } else {
                this.notiDrop = !this.notiDrop;
            }
        },

        handleScroll(evt, el) {
            if (window.scrollY > 0) {
                this.drop = false;
                this.notiDrop = false;
            }
        },

        logout() {
            localStorage.setItem("logged", JSON.stringify(false));
            this.drop = !this.drop;
        },

        enterDrop(drop) {
            let dropElement = this.$refs[drop];
            anime({
                targets: dropElement,
                scale: [0, 1],
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
            -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
            box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
            .noti-drop {
                max-width: 355px;
                .avatar {
                    width: 62px;
                    height: 62px;
                }
            }
            .divider {
                border: 1px solid $default;
            }
            .load-more {
                width: 100%;
                padding: 26px 12px 0px 12px;
                text-align: center;
                cursor: pointer;
            }
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