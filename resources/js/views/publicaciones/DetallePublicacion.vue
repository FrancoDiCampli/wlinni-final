<template>
    <div class="publicacion-detalle">
        <div class="detalle-container">
            <w-card>
                <div class="flex flex-col-reverse md:flex-row justify-between flex-wrap">
                    <p class="subtitle bold self-start md:self-center ml-5">{{ property.name }}</p>
                    <w-btn
                        :small="true"
                        :disabled="true"
                        :dark="true"
                        class="self-start md:self-center m-btn"
                    >Comisión {{ property.comision }}</w-btn>
                </div>
                <p class="ml-5">{{ property.dir }}</p>
                <div class="block md:hidden my-5">
                    <w-carousel
                        :items="1"
                        :pagination="false"
                        :navigation="true"
                        class="media-carousel"
                    >
                        <slide v-for="(media, i) in property.media" :key="i">
                            <div class="media-item">
                                <div class="media-source">
                                    <div class="media-banner">{{ property.state }}</div>
                                    <img :src="media.url" v-if="media.type == 'img'" />
                                    <video v-else-if="media.type == 'video'" autoplay>
                                        <source :src="media.url" />
                                    </video>
                                </div>
                            </div>
                        </slide>
                    </w-carousel>
                </div>
                <div class="flex flex-row justify-between flex-wrap m-5">
                    <div class="w-full md:w-1/5 self-center">
                        <p
                            class="subtitle bold tertiary-text text-center md:text-left"
                        >{{ property.price }}</p>
                    </div>
                    <div
                        class="w-full md:w-4/5 self-center flex flex-row justify-center md:justify-end flex-wrap"
                    >
                        <div class="w-full md:w-auto">
                            <w-btn
                                color="#41C541"
                                :dark="true"
                                :fullwidth="windowWidth <= 768"
                                class="m-btn"
                            >
                                <div class="flex flex-row justify-center md:justify-between">
                                    <w-icon icon="whatsapp" h="21px" class="self-center mr-5"></w-icon>
                                    <p class="self-center">WHATSAPP</p>
                                </div>
                            </w-btn>
                        </div>
                        <div class="w-full md:w-auto">
                            <w-btn
                                color="#000"
                                :outlined="true"
                                :fullwidth="windowWidth <= 768"
                                class="m-btn"
                            >
                                <div class="flex flex-row justify-center md:justify-between">
                                    <w-icon icon="upload-file" h="18px" class="self-center mr-5"></w-icon>
                                    <p class="self-center">FICHA TÉCNICA</p>
                                </div>
                            </w-btn>
                        </div>
                        <div class="w-full md:w-auto">
                            <w-btn
                                color="#000"
                                :outlined="true"
                                :fullwidth="windowWidth <= 768"
                                class="m-btn"
                            >
                                <div class="flex flex-row justify-center md:justify-between">
                                    <w-icon icon="mail" h="13px" class="self-center mr-5"></w-icon>
                                    <p class="self-center">CONSULTAR</p>
                                </div>
                            </w-btn>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="media-player">
                        <img width="100%" :src="activeMedia.url" v-if="activeMedia.type == 'img'" />
                        <video
                            width="100%"
                            ref="propertyVideo"
                            v-else-if="activeMedia.type == 'video'"
                        >
                            <source :src="activeMedia.url" />
                        </video>
                        <div class="media-content">
                            <div class="media-state">{{ property.state }}</div>
                            <div class="media-control" v-if="activeMedia.type == 'video'">
                                <w-btn :icon="true" @click="playPauseVideo">
                                    <w-icon icon="pause" h="132px" v-if="mediaPlay"></w-icon>
                                    <w-icon icon="play" h="132px" v-else></w-icon>
                                </w-btn>
                            </div>
                            <div class="media-description-container">
                                <div class="media-description">{{ property.description }}</div>
                            </div>
                        </div>
                    </div>

                    <w-carousel
                        :items="4"
                        :pagination="false"
                        :navigation="true"
                        class="media-carousel"
                    >
                        <slide v-for="(media, i) in property.media" :key="i">
                            <div class="media-item" @click="activeMedia = media">
                                <div
                                    class="media-source"
                                    :class="activeMedia.url == media.url ? 'active' : ''"
                                >
                                    <img :src="media.url" v-if="media.type == 'img'" />
                                    <video v-else-if="media.type == 'video'">
                                        <source :src="media.url" />
                                    </video>
                                    <w-icon icon="play" h="50px" v-if="media.type == 'video'"></w-icon>
                                </div>
                            </div>
                        </slide>
                    </w-carousel>
                </div>
                <div class="flex flex-row">
                    <div class="p-5 md:p-10">
                        <p>Tipo Propiedad</p>
                        <p class="body bold">{{ property.type }}</p>
                    </div>
                    <div class="my-5 md:my-10">
                        <div class="vertical-divider"></div>
                    </div>
                    <div class="p-5 md:p-10">
                        <p>Publicado</p>
                        <p class="body bold">{{ property.date }}</p>
                    </div>
                </div>
                <div>
                    <w-carousel
                        :items="windowWidth <= 768 ? 1 : 5"
                        :pagination="windowWidth <= 768"
                        :navigation="false"
                        class="feature-carousel my-5"
                    >
                        <slide class="feature-item">
                            <w-card :shadow="false" class="feature-card">
                                <div class="flex flex-col items-center">
                                    <w-icon icon="plans" h="45px"></w-icon>
                                    <p class="bold mt-5">AREA-T</p>
                                    <div class="divider my-5"></div>
                                    <p class="body bold">{{ property.areat }}</p>
                                </div>
                            </w-card>
                        </slide>
                        <slide class="feature-item">
                            <w-card :shadow="false" class="feature-card">
                                <div class="flex flex-col items-center">
                                    <w-icon icon="plans" h="45px"></w-icon>
                                    <p class="bold mt-5">AREA-C</p>
                                    <div class="divider my-5"></div>
                                    <p class="body bold">{{ property.areac }}</p>
                                </div>
                            </w-card>
                        </slide>
                        <slide class="feature-item">
                            <w-card :shadow="false" class="feature-card">
                                <div class="flex flex-col items-center">
                                    <w-icon icon="room-regular" h="45px"></w-icon>
                                    <p class="bold mt-5">DORMITORIOS</p>
                                    <div class="divider my-5"></div>
                                    <p class="body bold">{{ property.rooms }}</p>
                                </div>
                            </w-card>
                        </slide>
                        <slide class="feature-item">
                            <w-card :shadow="false" class="feature-card">
                                <div class="flex flex-col items-center">
                                    <w-icon icon="bath-regular" h="45px"></w-icon>
                                    <p class="bold mt-5">BAÑOS</p>
                                    <div class="divider my-5"></div>
                                    <p class="body bold">{{ property.bath }}</p>
                                </div>
                            </w-card>
                        </slide>
                        <slide class="feature-item">
                            <w-card :shadow="false" class="feature-card">
                                <div class="flex flex-col items-center">
                                    <w-icon icon="parking-regular" h="45px"></w-icon>
                                    <p class="bold mt-5">COCHERA</p>
                                    <div class="divider my-5"></div>
                                    <p class="body bold">{{ property.parking }}</p>
                                </div>
                            </w-card>
                        </slide>
                    </w-carousel>
                </div>
                <div class="flex flex-row justify-between flex-wrap m-10">
                    <div class="w-full md:w-1/2 md:pr-16">
                        <p class="body bold">Descripción</p>
                        <br />
                        <p>{{ property.description }}</p>
                    </div>
                    <div class="w-full md:w-1/2 mt-8 md:mt-0 md:pl-16">
                        <p class="body bold">Características generales</p>
                        <br />
                        <ul>
                            <li v-for="(feature, i) in property.features" :key="i">• {{ feature }}</li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-row flex-wrap md:flex-no-wrap justify-between feature-banner">
                    <div class="w-1/2 md:w-auto px-5 md:px-10 banner-item">
                        <p>Entrega</p>
                        <p class="body-md bold">{{ property.delivery }}</p>
                    </div>
                    <div class="w-1/2 md:w-auto banner-item">
                        <p>Metros techados</p>
                        <p class="body-md bold">{{ property.metersOut }}</p>
                    </div>
                    <div class="w-1/2 md:w-auto banner-item">
                        <p>Unidades</p>
                        <p class="body-md bold">{{ property.units }}</p>
                    </div>
                    <div class="w-1/2 md:w-auto banner-item">
                        <p>Dormitorios</p>
                        <p class="body-md bold">{{ property.rooms }}</p>
                    </div>
                    <div class="w-1/2 md:w-auto banner-item">
                        <p>Metros totales</p>
                        <p class="body-md bold">{{ property.metersTotals }}</p>
                    </div>
                    <div class="w-1/2 md:w-auto banner-item">
                        <p>Estacionamientos</p>
                        <p class="body-md bold">{{ property.parking }}</p>
                    </div>
                </div>
            </w-card>
            <w-card class="my-10">
                <p class="body bold my-10">Ubicación en mapa</p>
                <mapas :center="property.mapLocation.position" :markers="[property.mapLocation]"></mapas>
            </w-card>
            <w-card class="my-10">
                <div class="perfil-agente-container">
                    <Perfil></Perfil>
                </div>
            </w-card>
        </div>
    </div>
</template>

<script>
import Mapas from "../../components/mapas/Mapas";
import Perfil from "../../components/agentes/Perfil";

export default {
    data: () => ({
        windowWidth: window.innerWidth,
        activeMedia: {
            type: "img",
            url: "/images/departamentos/9.jpg"
        },
        mediaPlay: false,
        property: {
            name: "Torre valdelomar",
            comision: "5%",
            dir: "Av. Montreal 2178 - Lima / MIralfores",
            price: "S/ 2,399,900",
            state: "ALQUILER",
            description:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.",
            type: "Apartamento",
            date: "11/03/2020",
            areat: 120,
            areac: 180,
            rooms: 5,
            bath: 3,
            parking: 2,
            delivery: "Diciembre 2021",
            metersOut: "40 a 105 m²",
            metersTotals: "40 a 105 m²",
            units: "62",
            features: [
                "Centros Comerciales Cercanos",
                "Piscina",
                "Cerca a colegios",
                "Ascensor(es): 4",
                " Cerca Hospital",
                "Número de pisos: 20",
                "Cerca a Parque (a menos de 2 cdras)",
                "Parrilla",
                "Sala de Reuniones",
                "Area de lavandería",
                "Juegos infantiles",
                "Gimnasio"
            ],
            media: [
                {
                    type: "img",
                    url: "/images/departamentos/9.jpg"
                },
                {
                    type: "video",
                    url: "/videos/depto.mp4"
                },
                {
                    type: "img",
                    url: "/images/departamentos/10.jpg"
                },
                {
                    type: "img",
                    url: "/images/departamentos/11.jpg"
                },
                {
                    type: "img",
                    url: "/images/departamentos/12.jpg"
                },
                {
                    type: "img",
                    url: "/images/departamentos/13.jpg"
                }
            ],
            mapLocation: {
                position: { lat: -12.1221005, lng: -77.0315953 },
                title: "Miraflores",
                image: "/images/departamentos/8.jpg",
                dir: "Calle los ficus Mz B lt. 10",
                description: " 19 unidades 1 a 3 dormitorio 45m a 97m techados",
                precio: "86,723",
                entrega: "Inmediata",
                condicion: "Preventa en planos"
            }
        }
    }),

    components: {
        Mapas,
        Perfil
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    },

    methods: {
        playPauseVideo() {
            this.mediaPlay
                ? this.$refs.propertyVideo.pause()
                : this.$refs.propertyVideo.play();

            this.mediaPlay = !this.mediaPlay;
        }
    }
};
</script>

<style lang="scss">
@import "../../components/wlinii_components/sass/_variables.scss";

.publicacion-detalle {
    .detalle-container {
        width: 90%;
        margin: auto;

        .m-btn {
            &:not(.full-width) {
                margin: 6px 18px;
            }
        }

        .media-player {
            position: relative;
            .media-content {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                padding: 26px 0px 52px 0px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                &:hover {
                    .media-control {
                        display: inline;
                    }
                }

                .media-state {
                    background-color: $secondary;
                    width: auto;
                    height: auto;
                    max-height: 45px;
                    margin-left: -16px;
                    padding: 14px 32px;
                    font-size: 13px;
                    color: white;
                    text-align: center;
                    text-transform: uppercase;
                }

                .media-control {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: none;
                }

                .media-description-container {
                    background-color: rgba($color: $primary, $alpha: 0.9);
                    align-self: flex-end;
                    padding: 32px 56px;
                    height: auto;
                    width: auto;
                    max-height: 164px;
                    max-width: 456px;

                    .media-description {
                        max-height: 96px;
                        color: white;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
        }

        .media-carousel {
            margin-top: -68px;
            .carousel {
                width: 95%;
                .VueCarousel {
                    .VueCarousel-navigation {
                        button {
                            padding: 0px !important;
                        }
                        .VueCarousel-navigation-prev {
                            margin-left: 38px !important;
                        }
                        .VueCarousel-navigation-next {
                            margin-right: 38px !important;
                        }
                    }
                }

                .media-item {
                    width: 100%;
                    height: 100%;
                    padding: 0px 12px;
                    cursor: pointer;
                    .media-source {
                        position: relative;
                        width: inherit;
                        height: inherit;
                        border: 4px solid #fff;
                        &.active {
                            border-color: $primary;
                        }
                        .icon {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }
                        img,
                        video {
                            width: inherit;
                            height: inherit;
                        }
                        .media-banner {
                            background-color: $secondary;
                            width: 145px;
                            height: 45px;
                            padding: 12px 32px;
                            font-size: 13px;
                            color: white;
                            text-align: center;
                            text-transform: uppercase;
                            position: absolute;
                        }
                    }
                }
            }
        }

        .vertical-divider {
            width: 0px;
            height: 100%;
            border: 1px solid rgba($color: #000000, $alpha: 0.66);
        }
        .feature-carousel {
            .carousel {
                width: 100%;
                padding: 0px 20px;
                .feature-item {
                    padding: 0px 20px;
                    .feature-card {
                        .card-text {
                            background-color: $primary;
                            color: white;
                            .divider {
                                width: 72px;
                                height: 0px;
                                border: 1px solid $tertiary;
                            }
                        }
                    }
                }
            }
        }
        .feature-banner {
            background-color: rgba($color: #8291a7, $alpha: 0.15);
            border-radius: 15px;
            padding: 32px 0px;
            margin: 0px 24px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: nowrap;
            .banner-item {
                padding: 0px 24px;
                &:not(:first-child) {
                    border-left: 1px solid rgba($color: #000000, $alpha: 0.66);
                }
            }
        }
        .perfil-agente-container {
            .divider {
                height: 0px;
                width: 32px;
                border: thin solid $tertiary;
            }

            .full-divider {
                height: 0px;
                width: 100%;
                border: thin solid rgba($color: $primary, $alpha: 0.12);
            }
        }
    }
}

@media (max-width: 768px) {
    .publicacion-detalle {
        .detalle-container {
            width: 95%;
        }
    }

    .media-carousel {
        margin-top: 0px !important;
        .carousel {
            width: 100% !important;
            .VueCarousel {
                .VueCarousel-navigation {
                    button {
                        height: 35px !important;
                        width: 35px !important;
                        padding: 0px !important;
                        img {
                            height: inherit !important;
                        }
                    }
                }
            }
            .media-item {
                padding: 0px 2px !important;
                .media-source {
                    border: none !important;
                }
            }
        }
    }

    .feature-carousel {
        .carousel {
            .feature-item {
                padding: 0px 60px !important;
            }
        }
    }

    .feature-banner {
        margin: 0px !important;
        padding: 16px 0px !important;
        flex-wrap: wrap !important;
        .banner-item {
            padding: 12px 24px !important;
            border: none !important;
        }
    }
}
</style>
