<template>
    <!--
        
        perfil-del-agente-trabajador (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/a82326a5-df19-4a0b-8bf3-0ffc9ebacba4/-perfil-del-agente-trabajador)
        perfil-del-agente-trabajador-1 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/04b236a4-6d84-48b4-95bf-0128bbd86c67/-perfil-del-agente-trabajador-1)
        MB-perfil-del-agente-trabajador (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/78ea51c5-58e6-478d-abb9-a31678b41cf0/MB-perfil-del-agente-trabajador)
        
    -->
    <div>
        <div class="precios-container py-16">
            <w-card :shadow="false">
                <div class="w-full lg:w-11/12 mx-auto mt-10">
                    <!-- Seccion perfil broker con img  -->
                    <div class="lg:flex justify-between">
                        <!-- Esta imagen desaparece en mobil  -->
                        <div class="lg:block p-5">
                            <div class="lg:hidden">
                                <h1 class="text-sm font-bold tracking-widest">
                                    PERFIL AGENTES
                                </h1>
                                <div
                                    class="border-t-2 tertiary-border w-2/12 my-5"
                                ></div>
                            </div>
                            <img
                                style="height: 300px;"
                                class="w-auto"
                                :src="agent.img"
                                alt
                            />
                            <div
                                class="lg:hidden flex items-center justify-between"
                            >
                                <h1 class="subtitle bold">{{ agent.name }}</h1>
                            </div>
                            <!-- valoraciones  -->
                            <div class="my-5">
                                <p class="text-center caption">
                                    Valoración del agente
                                </p>
                                <div class="flex justify-center">
                                    <svg
                                        v-for="star in agent.stars"
                                        :key="star"
                                        aria-hidden="true"
                                        data-prefix="fas"
                                        data-icon="star"
                                        class="h-5 svg-inline--fa fa-star fa-w-18 tertiary-text"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        />
                                    </svg>
                                    <svg
                                        v-for="i in (5-agent.stars)"
                                        :key="i * 5"
                                        aria-hidden="true"
                                        data-prefix="fas"
                                        data-icon="star"
                                        class="h-5 svg-inline--fa fa-star fa-w-18 text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <!-- sociales  -->
                            <div
                                class="mt-5 text-gray-600 flex items-center justify-center"
                            >
                                <router-link to="/">
                                    <svg
                                        aria-hidden="true"
                                        data-prefix="fas"
                                        data-icon="envelope"
                                        class="mr-5 h-6 svg-inline--fa fa-envelope fa-w-16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                                        />
                                    </svg>
                                </router-link>

                                <router-link to="/">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="facebook-f"
                                        class="mr-5 h-6 svg-inline--fa fa-facebook-f fa-w-10"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                        />
                                    </svg>
                                </router-link>
                                <router-link to="/">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="linkedin-in"
                                        class="mr-5 h-6 svg-inline--fa fa-linkedin-in fa-w-14"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                        />
                                    </svg>
                                </router-link>
                                <router-link to="/">
                                    <svg
                                        aria-hidden="true"
                                        data-prefix="fab"
                                        data-icon="twitter"
                                        class="mr-5 h-6 svg-inline--fa fa-twitter fa-w-16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M459.37 151.72c.33 4.54.33 9.1.33 13.64 0 138.72-105.59 298.56-298.56 298.56-59.45 0-114.68-17.22-161.14-47.1 8.45.97 16.57 1.3 25.34 1.3 49.05 0 94.21-16.58 130.27-44.84a105.12 105.12 0 01-98.1-72.77c6.49.97 12.99 1.62 19.81 1.62 9.42 0 18.84-1.3 27.61-3.57A104.95 104.95 0 0120.8 195.57v-1.3a105.68 105.68 0 0047.43 13.32 104.86 104.86 0 01-46.78-87.39c0-19.49 5.2-37.36 14.3-52.95a298.27 298.27 0 00216.36 109.8c-1.62-7.8-2.6-15.91-2.6-24.03 0-57.83 46.78-104.94 104.94-104.94 30.2 0 57.5 12.67 76.67 33.14a206.6 206.6 0 0066.6-25.34 104.65 104.65 0 01-46.14 57.83c21.12-2.28 41.59-8.13 60.43-16.25a225.57 225.57 0 01-52.63 54.26z"
                                        />
                                    </svg>
                                </router-link>
                            </div>
                        </div>
                        <!-- Texto  -->
                        <div class="lg:w-2/3 lg:mx-10 mx-auto">
                            <div class="hidden lg:block">
                                <h1 class="text-sm font-bold tracking-widest">
                                    PERFIL AGENTES
                                </h1>
                                <div
                                    class="border-t-2 tertiary w-2/12 my-5"
                                ></div>
                                <div class="flex items-center justify-between">
                                    <h1 class="fan subtitle-lg bold">
                                        {{ agent.name }}
                                    </h1>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="info-circle"
                                        class="hidden lg:block h-8 svg-inline--fa fa-info-circle fa-w-16"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p class="caption my-4">{{ agent.dir }}</p>
                            <p class="caption bold">{{ agent.job }}</p>
                            <p class="caption mb-5">
                                Codigo Ministerio de vivienda:{{ agent.cod }}
                            </p>

                            <div
                                class="hidden lg:block border-t w-full border-gray-600"
                            ></div>
                            <!-- <img class="lg:hidden" :src="agent.img" alt /> -->
                            <div class="my-5 lg:flex">
                                <h3
                                    class="tertiary-text font-bold lg:w-1/4 tertiary-text"
                                >
                                    Cel:
                                </h3>
                                <p class="caption lg:w-3/4">{{ agent.cel }}</p>
                            </div>
                            <div class="my-5 lg:flex">
                                <h3 class="tertiary-text font-bold lg:w-1/4">
                                    Email:
                                </h3>
                                <p class="caption lg:w-3/4">
                                    {{ agent.email }}
                                </p>
                            </div>
                            <div class="my-5 lg:flex">
                                <h3 class="tertiary-text font-bold lg:w-1/4">
                                    Descripcion:
                                </h3>
                                <p class="caption lg:w-3/4">
                                    {{ agent.description }}
                                </p>
                            </div>

                            <div id="cards" class="flex flex-wrap">
                                <div
                                    class="w-1/2 lg:w-1/3 rounded-lg primary text-white text-center p-3 m-1"
                                >
                                    <p class="caption">Transacciones</p>
                                    <p class="title">{{ agent.trans.n }}</p>

                                    <p class="uppercase">
                                        {{ agent.trans.state }}
                                        {{ agent.trans.stateN }}%
                                        <span class="inline-block">
                                            <svg
                                                :class="
                                                    agent.trans.state == 'up'
                                                        ? 'text-green-500'
                                                        : ' transform rotate-180 text-red-400 '
                                                "
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="arrow-up"
                                                class="h-5 svg-inline--fa fa-arrow-up fa-w-14"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                                                />
                                            </svg>
                                        </span>
                                    </p>
                                </div>

                                <div
                                    class="w-1/2 lg:w-1/3 rounded-lg primary text-white text-center p-3 m-1"
                                >
                                    <p class="caption">Activas</p>
                                    <p class="title">{{ agent.active.n }}</p>

                                    <p class="uppercase">
                                        {{ agent.active.state }}
                                        {{ agent.active.stateN }}%
                                        <span class="inline-block">
                                            <svg
                                                :class="
                                                    agent.active.state == 'up'
                                                        ? 'text-green-500'
                                                        : ' transform rotate-180 text-red-400 '
                                                "
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="arrow-up"
                                                class="h-5 svg-inline--fa fa-arrow-up fa-w-14"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                                                />
                                            </svg>
                                        </span>
                                    </p>
                                </div>

                                <div
                                    class="w-1/2 lg:w-1/3 rounded-lg primary text-white text-center p-5 m-1"
                                >
                                    <p class="caption">Canceladas</p>
                                    <p class="title">{{ agent.canceled }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Seccion perfil broker con img -->
                </div>
            </w-card>
        </div>

        <!-- carrusel Ultimos ingresos -->
        <div>
            <div class="flex justify-center my-10">
                <w-btn :outlined="true" color="tertiary" class>
                    <span class="body bold">ÚLTIMOS INGRESOS</span>
                </w-btn>
            </div>
            <div>
                <w-carousel
                    class="mt-10"
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
                                        <div
                                            class="flex flex-row justify-between"
                                        >
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
                                                    {{
                                                        card.info
                                                            .estacionamiento
                                                    }}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="info-item">
                                            <w-icon
                                                icon="size"
                                                h="15px"
                                            ></w-icon>
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
            </div>
        </div>
        <!-- end carrusel  -->

        <!-- carrusel Mas destacados -->
        <div>
            <div class="flex justify-center my-10">
                <w-btn :outlined="true" color="tertiary" class>
                    <span class="body bold">Mas destacados</span>
                </w-btn>
            </div>
            <div>
                <w-carousel
                    class="mt-10"
                    :background="
                        windowWidth >= 768 ? '/images/banners/1.png' : ''
                    "
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
                                        <div
                                            class="flex flex-row justify-between"
                                        >
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
                                                    {{
                                                        card.info
                                                            .estacionamiento
                                                    }}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="info-item">
                                            <w-icon
                                                icon="size"
                                                h="15px"
                                            ></w-icon>
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
            </div>
        </div>
        <!-- end carrusel  -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            img: "images/rostros/2.png",
            imagwn: "images/banners/1.png",
            agent: {
                name: "Peter Llanos Barnachea",
                dir: "Lima / San Borja",
                job: "Titanio Inversiones Inmobiliarias, SAC",
                cod: 382358412,
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae nihil a velit, dolor facere voluptate totam corrupti. Saepe quas voluptatibus tempora itaque",
                days: 3,
                img: "images/rostros/1.png",
                cel: 5194641341,
                email: "rs@agenlesasociados.com",
                stars: 2,
                trans: {
                    n: 200,
                    state: "up",
                    stateN: 3,
                },
                active: {
                    n: 25,
                    state: "down",
                    stateN: 1,
                },

                canceled: 10,
            },
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
            activeClass: "secondary",
            errorClass: "accent",
            selected: "primary text-white rounded-lg",
        };
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    },

    methods: {
        showForm() {
            console.log(this.form);
        },
    },
};
</script>

<style lang="scss">
.tertiary-border {
    background-color: #a08629;
}
.gris {
    background-color: #f5f5f5;
}
.bn {
    border: 1px solid black;
}
.fan {
    font-size: 28px;
}
.precios-container {
    width: 90%;
    margin: auto;
}

@media (max-width: 764px) {
    .precios-container {
        width: 95%;
    }
}
</style>
