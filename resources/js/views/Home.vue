<template>
    <!-- 
        
        inicio (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/)
        logeado-inicio (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/a761e489-2781-4fc0-8d1f-6853ec803c9b/logeado-inicio)
        MB-inicio (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/44d3fef0-9f22-4e6b-a5a9-688fbb628403/MB-inico)
        MB-inicio-logueo (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/f4572e37-78b9-48ad-9f33-4ca30e529602/MB-inico-logeo)

    -->

    <div class="home">
        <!-- BANNER PRINCIPAL -->
        <w-parallax image="/images/banners/4.png" height="120">
            <div class="flex flex-row justify-between home-container">
                <div class="w-3/3 md:w-1/3 self-center">
                    <h1 class="home-title bold white-text">
                        Profesionales inmobiliarios dedicados a usted
                    </h1>
                </div>
                <div class="hidden md:block w-1/3"></div>
                <div class="hidden md:block w-2/3 self-center">
                    <w-card :shadow="false" class="banner-card">
                        <div class="flex flex-row items-center">
                            <h1 class="body bold white-text">Busqueda</h1>
                            <w-icon icon="map" h="17px"></w-icon>
                        </div>
                        <p class="white-text mt-5">
                            Atención!! Se filtraran las propiedades en el mapa
                            automáticamente se elija la condición
                        </p>
                        <form class="mt-10">
                            <w-input
                                :dark="true"
                                color="tertiary"
                                label="Buscar"
                                placeholder=" "
                                v-model="homeForm.buscar"
                            ></w-input>
                            <w-input
                                :dark="true"
                                color="tertiary"
                                label="Tipo de venta"
                                placeholder=" "
                                v-model="homeForm.inmueble"
                            ></w-input>
                            <w-input
                                :dark="true"
                                color="tertiary"
                                label="Tipo de inmueble"
                                placeholder=" "
                                v-model="homeForm.venta"
                            ></w-input>
                            <w-checkbox
                                :dark="true"
                                label="¿Mostrar busqueda en el mapa?"
                                v-model="homeForm.mapa"
                                color="tertiary"
                            ></w-checkbox>
                            <w-btn
                                :rounded="true"
                                :fullwidth="true"
                                color="tertiary"
                                :dark="true"
                                >Buscar</w-btn
                            >
                        </form>
                    </w-card>
                </div>
            </div>
            <div class="parallax-tag">
                <div
                    class="flex flex-row justify-between flex-wrap md:flex-no-wrap"
                >
                    <div
                        class="w-2/2 md:w-2/3 flex flex-row justify-center md:justify-start"
                    >
                        <w-icon
                            icon="lock"
                            h="45px"
                            class="hidden md:block mt-3 mr-5"
                        ></w-icon>
                        <div>
                            <p
                                class="body subtitle-md light white-text text-center md:text-left"
                            >
                                Eres Agente Inmobiliaria
                            </p>
                            <p
                                class="body tertiary-text text-center md:text-left"
                            >
                                solicíta tu cuenta en pocos minutos
                            </p>
                        </div>
                    </div>
                    <div class="hidden md:block md:w-1/3"></div>
                    <div
                        class="w-full md:w-1/3 mb-2 flex flex-row justify-center"
                    >
                        <w-btn color="secondary" :dark="true" :fullwidth="true"
                            >INICIA TU CUENTA AHORA</w-btn
                        >
                    </div>
                </div>
            </div>
        </w-parallax>
        <div class="home-fix"></div>
        <!-- PORQUE WLINII -->
        <div class="flex flex-row justify-center">
            <h1 class="subtitle bold">¿Porqué usar Wlinii?</h1>
        </div>
        <div class="divider"></div>
        <div class="flex flex-row justify-between flex-wrap">
            <div class="w-3/3 md:w-1/3 home-item">
                <w-icon icon="house-man" h="130px"></w-icon>
                <p class="body bold mt-5">Agentes Expertos</p>
                <p class="mt-5">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat.
                </p>
            </div>
            <div class="w-3/3 md:w-1/3 home-item">
                <w-icon icon="building-price" h="130px"></w-icon>
                <p class="body bold mt-5">Acelera tus Ventas</p>
                <p class="mt-5">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat.
                </p>
            </div>
            <div class="w-3/3 md:w-1/3 home-item">
                <w-icon icon="house-secure" h="130px"></w-icon>
                <p class="body bold mt-5">Confiabilidad</p>
                <p class="mt-5">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat.
                </p>
            </div>
        </div>
        <!-- CAROUSELES -->
        <div class="white">
            <!-- PROPIEDADES -->
            <div class="flex flex-row justify-center">
                <w-icon icon="lock" h="45px" class="mt-5"></w-icon>
            </div>
            <div class="flex flex-row justify-center mt-5">
                <h1 class="subtitle bold">Propiedades</h1>
            </div>
            <div class="divider"></div>
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
                    <div class="px-5">
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
                                <p class="body bold tertiary-text">
                                    {{ card.mes }}
                                </p>
                            </div>

                            <template slot="footer">
                                <div class="flex flex-row justify-between">
                                    <div class="flex flex-row justify-between">
                                        <div class="info-item">
                                            <w-icon
                                                icon="room-solid"
                                                h="12px"
                                            ></w-icon>
                                            <p class="white-text">
                                                {{ card.info.habitaciones }}
                                            </p>
                                        </div>
                                        <div class="info-item">
                                            <w-icon
                                                icon="bath-solid"
                                                h="15px"
                                            ></w-icon>
                                            <p class="white-text">
                                                {{ card.info.baños }}
                                            </p>
                                        </div>
                                        <div class="info-item">
                                            <w-icon
                                                icon="parking-solid"
                                                h="12px"
                                            ></w-icon>
                                            <p class="white-text">
                                                {{ card.info.estacionamiento }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="info-item">
                                        <w-icon icon="size" h="15px"></w-icon>
                                        <p class="white-text">
                                            {{ card.info.tamaño }}
                                        </p>
                                    </div>
                                </div>
                            </template>
                        </w-card>
                    </div>
                </slide>
            </w-carousel>
            <!-- INGRESOS -->
            <div class="flex flex-row justify-center mt-20">
                <w-btn :outlined="true" color="tertiary">
                    <p class="body bold">ÚLTIMOS INGRESOS</p>
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
                    <div class="px-5">
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
                                <p class="body bold tertiary-text">
                                    {{ card.mes }}
                                </p>
                            </div>

                            <template slot="footer">
                                <div class="flex flex-row justify-between">
                                    <div class="flex flex-row justify-between">
                                        <div class="info-item">
                                            <w-icon
                                                icon="room-solid"
                                                h="12px"
                                            ></w-icon>
                                            <p class="white-text">
                                                {{ card.info.habitaciones }}
                                            </p>
                                        </div>
                                        <div class="info-item">
                                            <w-icon
                                                icon="bath-solid"
                                                h="15px"
                                            ></w-icon>
                                            <p class="white-text">
                                                {{ card.info.baños }}
                                            </p>
                                        </div>
                                        <div class="info-item">
                                            <w-icon
                                                icon="parking-solid"
                                                h="12px"
                                            ></w-icon>
                                            <p class="white-text">
                                                {{ card.info.estacionamiento }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="info-item">
                                        <w-icon icon="size" h="15px"></w-icon>
                                        <p class="white-text">
                                            {{ card.info.tamaño }}
                                        </p>
                                    </div>
                                </div>
                            </template>
                        </w-card>
                    </div>
                </slide>
            </w-carousel>
            <div class="flex flex-row justify-center mt-10">
                <w-btn
                    :dark="true"
                    :large="true"
                    @click="$router.push('/inmuebles')"
                    >VER MÁS PROPIEDADES</w-btn
                >
            </div>
            <!-- AGENTES -->
            <div class="flex flex-row justify-center mt-20">
                <h1 class="subtitle bold">Agentes</h1>
            </div>
            <div class="divider"></div>
            <div class="flex flex-row justify-center mt-5">
                <div class="w-2/3 md:1/3">
                    <p class="text-center">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna nibh, viverra
                        non, semper suscipit, posuere a, pede.
                    </p>
                </div>
            </div>
            <w-carousel
                :background="windowWidth >= 768 ? '/images/banners/1.png' : ''"
                :items="windowWidth >= 768 ? 4 : 1"
                :pagination="windowWidth < 768"
                :navigation="windowWidth >= 768"
                class="agent-carousel mt-10"
            >
                <slide v-for="(agent, i) in agents" :key="i">
                    <div class="px-5">
                        <w-card :image="agent.image" hover="top-hover">
                            <template slot="image">
                                <div style="margin-top: 160px;">
                                    <div class="flex flex-row justify-center">
                                        <div
                                            class="w-full flex flex-row justify-between items-center px-8"
                                        >
                                            <w-icon
                                                icon="mail-white"
                                                h="16px"
                                            ></w-icon>
                                            <w-icon
                                                icon="facebook-white"
                                                h="20px"
                                            ></w-icon>
                                            <w-icon
                                                icon="instagram-white"
                                                h="18px"
                                            ></w-icon>
                                            <w-icon
                                                icon="twitter-white"
                                                h="18px"
                                            ></w-icon>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <div class="flex flex-row justify-between">
                                <div
                                    class="w-auto flex flex-row justify-between self-center"
                                >
                                    <w-icon
                                        style="margin: 0px 2px !important;"
                                        icon="star-brown"
                                        h="13px"
                                        v-for="i in 5"
                                        :key="i"
                                    ></w-icon>
                                </div>
                                <div class="w-auto flex flex-row justify-end">
                                    <w-btn
                                        style="margin: 0px !important;"
                                        :rounded="true"
                                        :small="true"
                                        :outlined="true"
                                        color="secondary"
                                    >
                                        <p class="secondary-text">ver más</p>
                                    </w-btn>
                                </div>
                            </div>
                            <div class="w-full mt-3 mb-2">
                                <p
                                    class="bold text-center"
                                    style="white-space: nowrap;"
                                >
                                    {{ agent.name }}
                                </p>
                            </div>
                            <hr style="border-color: #9e9e9e;" />
                            <div
                                class="flex flex-row justify-center items-center mt-2"
                            >
                                <w-icon
                                    icon="phone-brown"
                                    h="13px"
                                    class="mr-2"
                                ></w-icon>
                                <p>{{ agent.tel }}</p>
                            </div>
                            <template slot="footer">
                                <p class="text-center white-text">
                                    {{ agent.posts }} Pub. Activas
                                </p>
                            </template>
                        </w-card>
                    </div>
                </slide>
            </w-carousel>

            <!-- BANNER MERCADO -->
            <div class="publi-banner mt-20">
                <div class="flex flex-row justify-center md:justify-end py-16">
                    <div class="flex flex-col justify-center items-center">
                        <w-icon
                            icon="lock-transparent"
                            h="217px"
                            class="absolute"
                        ></w-icon>
                        <p class="subtitle light white-text">
                            Plataforma con Análisis
                        </p>
                        <p class="subtitle bold tertiary-text">
                            de Mercado Comparativo
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- NOTICIAS -->
        <div class="flex flex-row justify-center mt-20">
            <h1 class="subtitle bold">Noticias</h1>
        </div>
        <div class="divider"></div>
        <div class="flex flex-row justify-between flex-wrap px-10 mt-10">
            <div
                class="w-full md:w-1/3 p-5 px-0 md:px-5"
                v-for="(noti, i) in news"
                :key="i"
            >
                <w-card :image="noti.image" imageHeight="200px" state="tile">
                    <template slot="state">
                        <p class="body bold white-text">
                            {{ parseDate(noti.date).day }}
                        </p>
                        <p class="caption bold white-text">
                            {{ parseDate(noti.date).month }}
                        </p>
                    </template>
                    <p class="body bold mt-5">{{ noti.title }}</p>
                    <p>{{ noti.body }}</p>
                </w-card>
            </div>
        </div>

        <!-- BANNER ESTADISTICAS -->
        <div class="graph-banner mt-20">
            <div class="flex flex-row justify-between flex-wrap">
                <div class="w-full md:mt-0 md:w-1/4">
                    <div class="flex flex-col justify-center items-center">
                        <w-icon icon="house-price" h="130px"></w-icon>
                        <p class="subtitle title-md bold white-text mt-5">
                            755 300
                        </p>
                        <p class="caption bold white-text">
                            TRANSACCIONES REALIZADAS
                        </p>
                    </div>
                </div>
                <div class="w-full mt-20 md:mt-0 md:w-1/4">
                    <div class="flex flex-col justify-center items-center">
                        <w-icon icon="house-care" h="130px"></w-icon>
                        <p class="subtitle title-md bold white-text mt-5">
                            17 620
                        </p>
                        <p class="caption bold white-text">AGENTES EN LINEA</p>
                    </div>
                </div>
                <div class="w-full mt-20 md:mt-0 md:w-1/4">
                    <div class="flex flex-col justify-center items-center">
                        <w-icon icon="building" h="130px"></w-icon>
                        <p class="subtitle title-md bold white-text mt-5">
                            790
                        </p>
                        <p class="caption bold white-text">INMOBILIARIA</p>
                    </div>
                </div>
                <div class="w-full mt-20 md:mt-0 md:w-1/4">
                    <div class="flex flex-col justify-center items-center">
                        <w-icon icon="house-graph" h="130px"></w-icon>
                        <p class="subtitle title-md bold white-text mt-5">
                            1 580 715
                        </p>
                        <p class="caption bold white-text">
                            MONTOS DE TRANSACCIÓN
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    data: () => ({
        homeForm: {},
        windowWidth: window.innerWidth,
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
                    tamaño: "120m",
                },
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
                    tamaño: "120m",
                },
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
                    tamaño: "120m",
                },
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
                    tamaño: "120m",
                },
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
                    tamaño: "120m",
                },
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
                    tamaño: "120m",
                },
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
                    tamaño: "120m",
                },
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
                    tamaño: "120m",
                },
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
                    tamaño: "120m",
                },
            },
        ],
        agents: [
            {
                image: "/images/rostros/1.png",
                name: "PETER LLANOS BARNACHEA",
                tel: "+ 51 994781355",
                posts: 10,
            },
            {
                image: "/images/rostros/2.png",
                name: "CHRISTOPHER PAKULLA",
                tel: "+ 51 994781355",
                posts: 10,
            },
            {
                image: "/images/rostros/3.png",
                name: "VLADIMIR BABIC",
                tel: "+ 51 994781355",
                posts: 10,
            },
            {
                image: "/images/rostros/4.png",
                name: "MARIUSZ CIESLA",
                tel: "+ 51 994781355",
                posts: 10,
            },
            {
                image: "/images/rostros/1.png",
                name: "PETER LLANOS BARNACHEA",
                tel: "+ 51 994781355",
                posts: 10,
            },
            {
                image: "/images/rostros/2.png",
                name: "CHRISTOPHER PAKULLA",
                tel: "+ 51 994781355",
                posts: 10,
            },
            {
                image: "/images/rostros/3.png",
                name: "VLADIMIR BABIC",
                tel: "+ 51 994781355",
                posts: 10,
            },
            {
                image: "/images/rostros/4.png",
                name: "MARIUSZ CIESLA",
                tel: "+ 51 994781355",
                posts: 10,
            },
        ],
        news: [
            {
                date: "2020-01-25",
                image: "/images/departamentos/6.jpg",
                title: "Curso introductorio a los indicadores de ventas",
                body:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio...",
            },
            {
                date: "2020-02-18",
                image: "/images/departamentos/7.jpg",
                title: "Curso introductorio a los indicadores de ventas",
                body:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio...",
            },
            {
                date: "2020-03-31",
                image: "/images/departamentos/8.jpg",
                title: "Curso introductorio a los indicadores de ventas",
                body:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio...",
            },
        ],
    }),

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    },

    methods: {
        parseDate(date) {
            let parseDate = {
                day: moment(date).format("DD"),
                month: moment(date).format("MMM"),
            };

            return parseDate;
        },
    },
};
</script>

<style lang="scss">
@import "../components/wlinii_components/sass/_variables.scss";
.home {
    .home-container {
        padding: 165px 150px 0px 150px;
        .home-title {
            font-size: 55px;
            font-weight: bold;
            text-align: left;
            color: white;
        }
    }
    .banner-card {
        &.card {
            &:not(.active-state) {
                &:not(:hover) {
                    background: transparent !important;
                }
            }
            &:hover {
                background-color: transparent !important;
            }
            .card-text {
                background-color: rgba($color: #000000, $alpha: 0.66);
                padding-right: 50px;
                padding-left: 50px;
            }

            .icon {
                margin-left: 10px;
            }
        }
    }

    .parallax-tag {
        position: absolute;
        bottom: -86px;
        left: 5%;
        width: 90%;
        background-color: $primary;
        border-top: 2px solid $tertiary;
        padding: 32px 64px;
        border-radius: 0px 0px 15px 15px;
    }

    .home-fix {
        border: 2px solid transparent;
        margin-bottom: 128px;
    }

    .divider {
        height: 0px;
        width: 32px;
        border: thin solid $tertiary;
        margin: auto;
    }

    .home-item {
        text-align: center;
        padding: 50px;
        .icon {
            img {
                margin: auto !important;
            }
        }
    }

    .agent-carousel {
        .carousel {
            width: 95%;
            .VueCarousel {
                .VueCarousel-navigation {
                    button {
                        padding: 0px !important;
                    }
                    .VueCarousel-navigation-prev {
                        margin-left: 48px !important;
                    }
                    .VueCarousel-navigation-next {
                        margin-right: 48px !important;
                    }
                }
            }
        }
    }

    .publi-banner {
        background-image: url("/images/banners/2.png");
        text-align: center;
    }

    .graph-banner {
        background-image: url("/images/banners/3.png");
    }

    .publi-banner,
    .graph-banner {
        background-size: cover;
        background-position: center center;
        padding: 85px 75px;
    }
}

@media (max-width: 768px) {
    .home {
        .home-container {
            padding: 128px 48px 0px 48px;
            .home-title {
                font-size: 45px;
                font-weight: bold;
                text-align: center;
                color: white;
            }
        }
    }

    .publi-banner {
        background-position: top right !important;
        padding-right: 12px !important;
        padding-left: 12px !important;
    }

    .parallax-tag {
        bottom: -230px !important;
        left: 0 !important;
        width: 100% !important;
        border-top: none !important;
    }

    .home-fix {
        margin-bottom: 300px !important;
    }
}
</style>
