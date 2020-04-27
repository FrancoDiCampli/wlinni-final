<template>
    <!-- 
        
        perfil-del-agente-trabajador (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/a82326a5-df19-4a0b-8bf3-0ffc9ebacba4/-perfil-del-agente-trabajador)
        perfil-del-agente-trabajador-1 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/04b236a4-6d84-48b4-95bf-0128bbd86c67/-perfil-del-agente-trabajador-1)
        MB-perfil-del-agente-trabajador (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/78ea51c5-58e6-478d-abb9-a31678b41cf0/MB-perfil-del-agente-trabajador)

    -->

    <div>
        <!-- PERFIL -->
        <div class="agente-container">
            <w-card :shadow="false">
                <Perfil></Perfil>
                <div class="flex flex-row justify-end">
                    <div class="w-full md:w-2/3">
                        <div class="flex flex-row md:justify-end flex-wrap">
                            <div
                                class="w-1/2 md:w-1/4 info-card-container"
                                v-for="(t, i) in transacciones"
                                :key="i"
                            >
                                <div class="info-card">
                                    <p class="bold">{{ t.name }}</p>
                                    <p class="title">{{ t.n }}</p>
                                    <div class="flex flex-row">
                                        <p>{{ t.state }} {{ t.percentaje }}</p>
                                        <div v-if="t.state == 'up'" class="arrow-up"></div>
                                        <div v-if="t.state == 'down'" class="arrow-down"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </w-card>
        </div>
        <!-- ULTIMOS INGRESOS -->
        <div class="flex flex-row justify-center mt-20">
            <w-btn :outlined="true" color="tertiary">
                <p class="body bold">ÚLTIMOS INGRESOS</p>
            </w-btn>
        </div>
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
                                        <p class="white-text">{{ card.info.estacionamiento }}</p>
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
                                        <p class="white-text">{{ card.info.estacionamiento }}</p>
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
        <br />
    </div>
</template>

<script>
import Perfil from "../../components/agentes/Perfil";

export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            transacciones: [
                {
                    name: "Transacciones",
                    n: 200,
                    state: "up",
                    percentaje: "3%"
                },
                {
                    name: "Activas",
                    n: 25,
                    state: "down",
                    percentaje: "1%"
                },
                {
                    name: "Cancelada",
                    n: 10
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

    components: {
        Perfil
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    },

    methods: {
        showForm() {
            console.log(this.form);
        }
    }
};
</script>

<style lang="scss">
@import "../../components/wlinii_components/sass/_variables.scss";

.agente-container {
    width: 90%;
    margin: auto;

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
    .info-card-container {
        padding: 10px;
        .info-card {
            background-color: #2f3a4a;
            border-radius: 7px;
            padding: 12px 20px;
            color: white;
            height: 100%;
            .arrow-up {
                height: 13px;
                width: 13px;
                border: 2px solid #56d837;
                border-top: none;
                border-left: none;
                margin: 8px 0px 0px 12px;
                transform: rotate(-135deg);
            }
            .arrow-down {
                height: 13px;
                width: 13px;
                border: 2px solid #ff0000;
                border-left: none;
                border-bottom: none;
                margin: 0px 0px 8px 12px;
                transform: rotate(135deg);
            }
        }
    }
}

@media (max-width: 764px) {
    .agente-container {
        width: 95%;
        font-size: 12px;
        .info-card-container {
            padding: 5px;
        }
    }
}
</style>
