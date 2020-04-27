<template>
    <!--
        AMC-2 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/a65a74cc-d205-4719-82f8-8e12fd489483/AMC-2)
        MB-AMC-2 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/69f65c4f-6de4-4cb9-aec9-12ba0bdac37e/MB-AMC-2)
        MB-AMC-2-1 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/dd038808-f064-4b0d-963b-bc5fe4209bfc/MB-AMC-2-1)
        AMC-3 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/719ad7aa-aa1a-47a1-86a8-74e58a4110e5/AMC-3)
        MB-AMC-3 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/537968de-610f-4f6f-87cc-b43a657829c0/MB-AMC-3)

    -->
    <div class="amc-2">
        <div class="amc-container md:py-16">
            <div class="w-full" v-if="filtrar">
                <div class="filter">
                    <div class="filter-header">filtros</div>
                    <div class="filter-body">
                        <FiltroInmueble></FiltroInmueble>
                        <w-btn
                            :fullwidth="true"
                            color="secondary"
                            :dark="true"
                            @click="filtrar = false"
                        >filtrar</w-btn>
                    </div>
                </div>
            </div>
            <w-card :shadow="false" v-else>
                <div>
                    <p class="body subtitle-md bold ml-5">Análisis de Mercado Comparativo (AMC)</p>
                    <p class="caption primary-text ml-5">Aplicación de analisis de precios</p>
                    <w-btn
                        :disabled="true"
                        :rounded="true"
                        :dark="true"
                        :small="true"
                        color="primary"
                        class="step-btn"
                    >02 PASO</w-btn>
                    <p class="body subtitle-md bold ml-5">Agregar Oferta Pública</p>
                    <div class="w-full px-5">
                        <progress value="50" max="100" class="amc-progress"></progress>
                    </div>
                </div>
                <div class="flex flex-row justify-between flex-wrap">
                    <div class="w-full md:w-1/2 p-5 md:pl-5 md:pr-2">
                        <div class="tertiary alert">
                            <div class="flex flex-row justify-between">
                                <div>
                                    <p
                                        class="caption body-md bold white-text"
                                    >Publicaciones seleccionadas (3)</p>
                                    <p class="white-text">Seleccionadas</p>
                                </div>
                                <div>
                                    <w-icon icon="pen-edit" h="32px"></w-icon>
                                    <p class="white-text">Editar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 p-5 md:pr-5 md:pl-2">
                        <div class="primary alert">
                            <p class="body bold white-text">Ingeso Manual</p>
                            <p class="white-text">Insertar datos para el cálculo</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-around">
                    <div class="w-3/12 hidden lg:block pt-5 px-5">
                        <div>
                            <w-card :shadow="false">
                                <template slot="header">
                                    <p class="caption bold white-text">FILTROS</p>
                                </template>

                                <FiltroInmueble></FiltroInmueble>
                            </w-card>
                        </div>
                    </div>

                    <div class="sm:w-full lg:w-9/12">
                        <w-btn
                            class="lg:hidden"
                            :dark="true"
                            color="secondary"
                            @click="filtrar = true"
                        >filtrar</w-btn>
                        <div class="flex flex-row justify-between flex-wrap">
                            <div
                                class="sm:w-full lg:w-1/3 pt-5 md:pr-5"
                                v-for="(card, i) in cards"
                                :key="i"
                            >
                                <w-card
                                    :image="card.image"
                                    :value="card.selected"
                                    @change="card.selected = !card.selected"
                                    style="cursor: pointer;"
                                >
                                    <template slot="image">
                                        <p class="bold">{{ card.direccion }}</p>
                                        <br />
                                        <p>{{ card.descripcion }}</p>
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
                                                    <p class="white-text">
                                                        {{
                                                        card.info
                                                        .habitaciones
                                                        }}
                                                    </p>
                                                </div>
                                                <div class="info-item">
                                                    <w-icon icon="bath-solid" h="15px"></w-icon>
                                                    <p class="white-text">{{ card.info.baños }}</p>
                                                </div>
                                                <div class="info-item">
                                                    <w-icon icon="parking-solid" h="12px"></w-icon>
                                                    <p class="white-text">
                                                        {{
                                                        card.info
                                                        .estacionamiento
                                                        }}
                                                    </p>
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
                        </div>
                        <br />
                    </div>
                </div>
                <div class="flex flex-row justify-center md:justify-end md:mr-5">
                    <div class="w-full md:w-1/5">
                        <w-btn
                            :large="true"
                            :dark="true"
                            :fullwidth="true"
                            color="primary"
                            @click="$router.push('/amc/3')"
                        >siguiente</w-btn>
                    </div>
                </div>
            </w-card>
            <br />
        </div>
    </div>
</template>

<script>
import FiltroInmueble from "../../components/inmuebles/FiltroInmueble";

export default {
    data() {
        return {
            checked: true,
            windowWidth: window.innerWidth,
            select: true,
            form: {},
            filtrar: false,
            cards: [
                {
                    tipo: "Alquiler",
                    image: "/images/departamentos/1.jpg",
                    title: "958 Calle Montreal",
                    body: "Av.montreal",
                    comision: "5%",
                    mes: "S/ 86,723",
                    direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
                    selected: true,
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
                    selected: false,
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
                    selected: false,
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
                    selected: false,
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
                    selected: false,
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
                    selected: false,
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
                    selected: false,
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
                    selected: false,
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
                    selected: false,
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
        FiltroInmueble
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    },

    methods: {
        setOperation(op) {
            this.form.operacion = op;
        },
        setCuality(op) {
            this.form.cuality = op;
        },
        setDetails(op) {
            this.form.details = op;
        },
        setConservation(op) {
            this.form.conservation = op;
        },
        setLocation(op) {
            this.form.location = op;
        },

        showForm() {
            console.log(this.form);
        }
    }
};
</script>

<style lang="scss">
.amc-2 {
    .amc-container {
        width: 95%;
        margin: auto;
        .step-btn {
            padding: 5px 25px;
            margin: 20px 18px;
        }

        .amc-progress {
            width: inherit;
            margin: 20px 0px;
            &[value] {
                &::-webkit-progress-bar {
                    background-color: #aaaaaa;
                    border-radius: 15px;
                }
                &::-webkit-progress-value {
                    background-color: #ff7500;
                    border-radius: 15px;
                }
            }
        }

        .alert {
            border-radius: 8px;
            padding: 18px 36px;
        }

        .filter {
            background-color: white;
            .filter-header {
                width: 100%;
                background-color: #ff7500;
                color: white;
                text-align: center;
                font-size: 13px;
                font-weight: bold;
                text-transform: uppercase;
                padding: 12px;
            }
            .filter-body {
                padding: 12px;
            }
        }
    }
}

@media (max-width: 768px) {
    .amc-2 {
        .amc-container {
            width: 100%;
        }
    }
}
</style>
