<template>
    <!-- 
      
      perfil-brocker (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/b5f0b7d5-a936-492b-8c21-281c3b652875/perfil-brocker)
      MB-perfil-brocker (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/d1ba886f-f9ef-46e6-9300-740ebcbb070d/MB-perfil-broker)

    -->
    <div>
        <div class="brocker-container">
            <w-card :shadow="false">
                <!-- PERFIL -->
                <div class="flex flex-row justify-between flex-wrap">
                    <div class="w-full block md:hidden ml-2">
                        <p class="bold">PERFIL BROKER</p>
                        <div class="divider my-3"></div>
                        <p class="bold" style="font-size: 28px;">{{ company.name }}</p>
                        <p class="mb-8">{{ company.dir }}</p>
                    </div>
                    <div class="w-full md:w-1/3">
                        <div class="flex flex-col items-center flex-wrap">
                            <div class="w-full flex flex-row justify-center">
                                <div class="brocker-img"></div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-2/3">
                        <div class="hidden md:block">
                            <p class="bold">PERFIL BROKER</p>
                            <div class="divider my-5"></div>
                            <div class="flex justify-between items-center">
                                <p class="subtitle bold mt-5 md:mt-0">{{ company.name }}</p>
                                <w-snackbar class="mt-1">
                                    <w-icon icon="info" h="24px"></w-icon>
                                    <template slot="content">
                                        <p class="bold">Importante!</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit</p>
                                    </template>
                                </w-snackbar>
                            </div>

                            <p class="mb-8">{{ company.dir }}</p>
                        </div>
                        <div class="full-divider hidden md:block mt-5"></div>
                        <div class="flex flex-row flex-wrap mt-5 ml-2 md:mt-0 md:ml-0">
                            <div class="w-full md:w-1/3 my-0 md:my-3">
                                <p class="bold tertiary-text">Cel.</p>
                            </div>
                            <div class="w-full md:w-2/3 my-3 md:my-3">
                                <div class="flex flex-row justify-between">
                                    <p>{{ company.tel }}</p>
                                    <div
                                        class="hidden md:w-auto md:flex md:flex-row md:justify-end"
                                    >
                                        <w-btn :icon="true">
                                            <w-icon icon="mail-grey" h="12px"></w-icon>
                                        </w-btn>
                                        <w-btn :icon="true">
                                            <w-icon icon="facebook-grey" h="15px"></w-icon>
                                        </w-btn>
                                        <w-btn :icon="true">
                                            <w-icon icon="linkedin-grey" h="17px"></w-icon>
                                        </w-btn>
                                        <w-btn :icon="true">
                                            <w-icon icon="twitter-grey" h="15px"></w-icon>
                                        </w-btn>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/3 my-0 md:my-3">
                                <p class="bold tertiary-text">Email</p>
                            </div>
                            <div class="w-full md:w-2/3 my-3 md:my-3">
                                <p>{{ company.email }}</p>
                            </div>
                            <div class="w-full md:w-1/3 my-0 md:my-3">
                                <p class="bold tertiary-text">Acerca de mi</p>
                            </div>
                            <div class="w-full md:w-2/3 my-3 md:my-3">
                                <p>{{ company.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-row justify-start md:hidden">
                        <w-btn :icon="true">
                            <w-icon icon="mail-grey" h="12px"></w-icon>
                        </w-btn>
                        <w-btn :icon="true">
                            <w-icon icon="facebook-grey" h="15px"></w-icon>
                        </w-btn>
                        <w-btn :icon="true">
                            <w-icon icon="linkedin-grey" h="17px"></w-icon>
                        </w-btn>
                        <w-btn :icon="true">
                            <w-icon icon="twitter-grey" h="15px"></w-icon>
                        </w-btn>
                    </div>
                </div>
                <!-- USERS -->
                <div class="my-6 hidden md:block my-5" v-for="(user, i) in users" :key="i">
                    <w-card :shadow="false" class="user-row">
                        <div class="flex flex-row justify-between">
                            <div class="w-1/2 flex flex-row justify-between flex-wrap">
                                <div class="w-1/3 self-center px-0 md:px-5">
                                    <w-btn
                                        :color="user.state == 'AFILIADO' ? 'secondary' : 'primary'"
                                        :dark="true"
                                        :rounded="true"
                                        :fullwidth="true"
                                        :small="true"
                                        style="margin: 0px;"
                                    >{{ user.state == 'AFILIADO' ? 'Desafiliar' : 'Afiliar' }}</w-btn>
                                </div>
                                <div class="w-1/3 flex flex-row justify-center px-5">
                                    <w-btn
                                        :icon="true"
                                        v-for="i in 5"
                                        :key="i"
                                        :disabled="true"
                                        style="margin: 2px;"
                                    >
                                        <w-icon
                                            :icon="user.stars >= i ? 'star-brown' : 'star-grey'"
                                            h="14px"
                                        ></w-icon>
                                    </w-btn>
                                </div>
                                <div class="w-1/3 self-center">
                                    <div
                                        class="flex flex-row justify-center user-check mx-2"
                                        :class="user.state == 'AFILIADO' ? 'user-check-active' : ''"
                                        @click="$router.push('/agente/perfil')"
                                    >
                                        <div class="w-1/2">
                                            <div class="avatar">
                                                <img :src="user.image" />
                                            </div>
                                        </div>
                                        <div class="w-1/2 self-center">
                                            <p
                                                class="bold"
                                                style="line-height: 1.2;"
                                            >{{ user.name }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-1/2 flex flex-row justify-between flex-wrap">
                                <div class="w-4/6 self-center px-2">
                                    <p>{{ user.content }}</p>
                                </div>
                                <div class="w-1/6 self-center px-2">
                                    <p>ESTADO</p>
                                    <p
                                        :class="user.state == 'AFILIADO' ? 'success-text' : ''"
                                    >{{ user.state }}</p>
                                </div>
                            </div>
                        </div>
                    </w-card>
                </div>

                <div class="hidden md:flex lg:flex xl:flex justify-center lg:justify-end">
                    <w-pagination v-model="page" :length="4" @click="navigate()"></w-pagination>
                </div>

                <div class="block md:hidden my-5">
                    <w-carousel :items="1" :pagination="true" :navigation="false">
                        <slide v-for="(user, i) in users" :key="i">
                            <div class="px-1">
                                <w-card :shadow="false" class="user-card">
                                    <div class="flex flex-row justify-center flex-wrap">
                                        <div class="w-full self-center">
                                            <div
                                                class="flex flex-row justify-between user-check mx-2"
                                                :class="user.state == 'AFILIADO' ? 'user-check-active' : ''"
                                                @click="$router.push('/agente/perfil')"
                                            >
                                                <div class="w-1/4">
                                                    <div class="avatar">
                                                        <img :src="user.image" />
                                                    </div>
                                                </div>
                                                <div class="w-2/4 self-center">
                                                    <p
                                                        class="bold"
                                                        style="line-height: 1.2;"
                                                    >{{ user.name }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full my-5 px-5">
                                            <p class="text-center">{{ user.content }}</p>
                                        </div>
                                        <div class="w-full flex flex-row justify-center px-1">
                                            <w-btn
                                                :icon="true"
                                                v-for="i in 5"
                                                :key="i"
                                                :disabled="true"
                                                style="margin: 2px;"
                                            >
                                                <w-icon
                                                    :icon="user.stars >= i ? 'star-brown' : 'star-grey'"
                                                    h="14px"
                                                ></w-icon>
                                            </w-btn>
                                        </div>
                                        <div class="w-full my-5">
                                            <p class="text-center">
                                                Estado:
                                                <span
                                                    :class="user.state == 'AFILIADO' ? 'success-text' : ''"
                                                >{{ user.state }}</span>
                                            </p>
                                        </div>
                                        <w-btn
                                            :color="user.state == 'AFILIADO' ? 'secondary' : 'primary'"
                                            :dark="true"
                                            :rounded="true"
                                            :small="true"
                                            style="margin: 0px;"
                                        >{{ user.state == 'AFILIADO' ? 'Desafiliar' : 'Afiliar' }}</w-btn>
                                    </div>
                                </w-card>
                            </div>
                        </slide>
                    </w-carousel>
                </div>
                <!-- MAS DESTACADOS -->
                <div class="flex flex-row justify-center mt-5">
                    <w-btn :outlined="true" color="tertiary">
                        <p class="body bold">
                            <span class="secondary-text">+</span> MÁS DESTACADOS
                        </p>
                    </w-btn>
                </div>
                <w-carousel
                    class="mt-10"
                    :background="windowWidth >= 768 ? '/images/banners/1.png' : ''"
                    :items="windowWidth >= 768 ? 3 : 1"
                    :pagination="windowWidth < 768"
                    :navigation="windowWidth >= 768"
                >
                    <slide v-for="(card, i) in cards" :key="i">
                        <div class="px-2">
                            <w-card :image="card.image" hover="full-hover">
                                <template slot="image">
                                    <p class="bold">{{ card.direccion }}</p>
                                    <p class="mt-5">{{ card.descripcion }}</p>
                                </template>
                                <template slot="state">
                                    <p class="white-text">{{ card.tipo }}</p>
                                </template>
                                <p class="bold">{{ card.title }}</p>
                                <p>{{ card.body }}</p>
                                <p>Comisión</p>
                                <div class="flex flex-row justify-between">
                                    <p class="body bold">{{ card.comision }}</p>
                                    <p class="body bold tertiary-text">{{ card.mes }}</p>
                                </div>

                                <template slot="footer">
                                    <div class="flex flex-row justify-between">
                                        <div class="flex flex-row justify-between">
                                            <div class="info-item">
                                                <w-icon icon="room-solid" h="12px"></w-icon>
                                                <p class="white-text">{{ card.info.habitaciones }}</p>
                                            </div>
                                            <div class="info-item">
                                                <w-icon icon="bath-solid" h="15px"></w-icon>
                                                <p class="white-text">{{ card.info.baños }}</p>
                                            </div>
                                            <div class="info-item">
                                                <w-icon icon="parking-solid" h="12px"></w-icon>
                                                <p
                                                    class="white-text"
                                                >{{ card.info.estacionamiento }}</p>
                                            </div>
                                        </div>
                                        <div class="info-item">
                                            <w-icon icon="size" h="15px"></w-icon>
                                            <p class="white-text">{{ card.info.tamaño }}</p>
                                        </div>
                                    </div>
                                </template>
                            </w-card>
                        </div>
                    </slide>
                </w-carousel>
            </w-card>
            <br />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: 1,
            windowWidth: window.innerWidth,
            company: {
                name: "Empresa Gloden Star",
                dir: "Lima / MIraflores",
                tel: "+51 94641341",
                email: "rs@agenlesasociados.com",
                description:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
            },
            users: [
                {
                    state: "AFILIADO",
                    stars: 3,
                    image: "/images/rostros/1.png",
                    name: "Kazmer Maxi",
                    select: true,
                    content:
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. consectetue ipsum dolor sit"
                },
                {
                    state: "Sin afiliar",
                    stars: 3,
                    image: "/images/rostros/2.png",
                    name: "Escobar German",
                    select: false,
                    content:
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. consectetue ipsum dolor sit"
                },
                {
                    state: "Sin afiliar",
                    stars: 3,
                    image: "/images/rostros/3.png",
                    name: "Franco Di Campli",
                    select: false,
                    content:
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. consectetue ipsum dolor sit"
                },
                {
                    state: "Sin afiliar",
                    stars: 3,
                    image: "/images/rostros/4.png",
                    name: "David Nester",
                    select: false,
                    content:
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. consectetue ipsum dolor sit"
                },
                {
                    state: "Sin afiliar",
                    stars: 3,
                    image: "/images/rostros/4.png",
                    name: "Bruno Diaz",
                    select: false,
                    content:
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. consectetue ipsum dolor sit"
                }
            ],
            cards: [
                {
                    tipo: "Alquiler",
                    image: "/images/departamentos/1.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/2.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/3.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/4.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/5.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/6.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/7.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/8.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                },
                {
                    tipo: "En Venta",
                    image: "/images/departamentos/9.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    descripcion:
                        " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
                    info: {
                        habitaciones: 3,
                        baños: 2,
                        estacionamiento: 2,
                        tamaño: "120m"
                    }
                }
            ]
        };
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    }
};
</script>

<style lang="scss">
@import "../../components/wlinii_components/sass/_variables.scss";

.brocker-container {
    width: 90%;
    margin: auto;

    .brocker-img {
        width: 290px;
        height: 370px;
        background-image: url("/images/banners/3.png");
        background-repeat: no-repeat;
        background-position: top center;
    }

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

    .user-row {
        .card-text {
            background-color: #f5f5f5;
            .user-check {
                cursor: pointer;
                padding: 6px 0px;
                border-radius: 5px;
                &.user-check-active {
                    background-color: $primary;
                    color: white;
                }

                .avatar {
                    width: 45px;
                    height: 45px;
                    margin: auto;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 2px solid $secondary;
                }
            }
        }
    }

    .user-card {
        .card-text {
            background-color: #f5f5f5;
            padding: 16px;
            .user-check {
                cursor: pointer;
                padding: 8px 16px;
                border-radius: 5px;
                &.user-check-active {
                    background-color: $primary;
                    color: white;
                }

                .avatar {
                    width: 52px;
                    height: 52px;
                    margin: auto;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 2px solid $secondary;
                }
            }
        }
    }
}

@media (max-width: 764px) {
    .brocker-container {
        width: 95%;
        font-size: 12px;
    }
}
</style>
