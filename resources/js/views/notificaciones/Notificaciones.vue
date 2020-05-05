<template>
    <!-- 

        lista-de-notificaciones-del-usuario (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/629a1aff-a853-4e98-926d-2a4724a012d5/logeado-Lista-de-Notiicaciones-del-usuario-)
        MB-lista-de-notificaciones-del-usuario (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/0543b284-4a94-4a3b-a981-643ca857c6d3/MB-notificaciones/)    

    -->
    <div class="notificaciones">
        <div class="notificaciones-container">
            <w-card :shadow="false" class="container-card">
                <p class="subtitle bold ml-2">Notificaciones</p>
                <p class="ml-2">Se tienen 12 notificaciones</p>
                <div class="my-6" v-for="(noti, i) in notifications" :key="i">
                    <w-card :shadow="false" class="noti-card">
                        <div class="flex flex-row justify-between flex-wrap">
                            <div class="w-1/6 md:hidden">
                                <div class="avatar">
                                    <img :src="noti.image" />
                                </div>
                            </div>
                            <div
                                class="w-5/6 md:w-full flex flex-col-reverse md:flex-row justify-between"
                            >
                                <div class="w-full md:w-1/2 flex flex-row flex-wrap">
                                    <!-- BOTON -->
                                    <div class="w-1/2 xl:w-1/3 self-center px-0 md:px-5">
                                        <w-btn
                                            :color="noti.state == 'guardar' ? 'secondary' : 'primary'"
                                            :dark="true"
                                            :rounded="true"
                                            :fullwidth="true"
                                            :small="true"
                                            style="margin: 0px;"
                                        >{{ noti.state }}</w-btn>
                                    </div>
                                    <!-- ESTRELLAS -->
                                    <div
                                        class="w-1/2 xl:w-1/3 md:hidden xl:flex flex-row justify-center px-1 md:px-5"
                                    >
                                        <w-btn
                                            :icon="true"
                                            v-for="i in 5"
                                            :key="i"
                                            :disabled="true"
                                            style="margin: 2px; background-color: transparent !important;"
                                        >
                                            <w-icon
                                                :icon="noti.stars >= i ? 'star-brown' : 'star-grey'"
                                                h="14px"
                                            ></w-icon>
                                        </w-btn>
                                    </div>
                                    <!-- IMAGEN Y NOMBRE -->
                                    <div class="hidden md:block w-1/2 md:w-1/3 self-center">
                                        <div class="flex flex-row justify-center">
                                            <div class="w-1/2">
                                                <div class="avatar">
                                                    <img :src="noti.image" />
                                                </div>
                                            </div>
                                            <div class="w-1/2 self-center">
                                                <p
                                                    class="bold"
                                                    style="line-height: 1.2;"
                                                >{{ noti.name }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="w-full md:w-1/2 flex flex-row justify-between flex-wrap"
                                >
                                    <div class="w-full md:hidden">
                                        <p class="body bold ml-2">{{ noti.name }}</p>
                                    </div>
                                    <div class="w-full md:w-5/6 self-center px-2">
                                        <p>{{ noti.content }}</p>
                                    </div>
                                    <div class="w-full md:w-1/6 self-center px-2">
                                        <p
                                            class="bold text-left md:text-center mb-5 mt-1 md:mb-0 mb:mt-0"
                                        >{{ noti.date }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </w-card>
                </div>
                <br />
                <div class="flex justify-center lg:justify-end">
                    <w-pagination v-model="page" :length="4" @click="navigate()"></w-pagination>
                </div>
            </w-card>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        page: 1,
        notifications: [
            {
                state: "guardar",
                stars: 3,
                image: "/images/rostros/1.png",
                name: "Kazmer Maxi",
                content:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. consectetue ipsum dolor sit",
                date: "Hace 2 días"
            },
            {
                state: "guardar",
                stars: 3,
                image: "/images/rostros/2.png",
                name: "Escobar German",
                content:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. consectetue ipsum dolor sit",
                date: "Hace 2 días"
            },
            {
                state: "finalizado",
                stars: 3,
                image: "/images/rostros/3.png",
                name: "Franco Di Campli",
                content:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. consectetue ipsum dolor sit",
                date: "Hace 2 días"
            },
            {
                state: "finalizado",
                stars: 3,
                image: "/images/rostros/4.png",
                name: "David Nester",
                content:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. consectetue ipsum dolor sit",
                date: "Hace 2 días"
            },
            {
                state: "guardar",
                stars: 3,
                image: "/images/rostros/4.png",
                name: "Bruno Diaz",
                content:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. consectetue ipsum dolor sit",
                date: "Hace 2 días"
            }
        ]
    })
};
</script>

<style lang="scss">
@import "../../components/wlinii_components/sass/_variables.scss";

.notificaciones {
    .notificaciones-container {
        padding: 35px 150px;
        .noti-card {
            .card-text {
                background-color: #f5f5f5;
                .avatar {
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 2px solid $secondary;
                }
            }
        }
    }
}

@media (max-width: 1024px) {
    .notificaciones {
        .notificaciones-container {
            padding: 0px !important;
            margin-top: -20px;
            .container-card {
                border-radius: 0px !important;
            }
            .noti-card {
                .card-text {
                    padding: 25px 15px;
                }
            }
        }
    }
}
</style>