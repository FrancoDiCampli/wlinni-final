<template>
    <!-- 
        
        listado-de-inmueble (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/6d821de4-bfa5-4d87-879d-d9416f6b55c6/listado-de-inmueble)
        listado-de-inmueble-1 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/9c9dddc1-3559-45ac-8344-5691f5ff4895/listado-de-inmueble-1)
        listado-de-inmueble-2 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/60ee5103-e431-4bdf-9aea-45af9d43e0fc/listado-de-inmueble-2)
        MB-listado-de-inmueble (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/7faff0ca-0105-4ce5-bd70-43cf949c00fb/MB-listado-de-inmueble)    

    -->

    <div>
        <div class="inmuebles-container">
            <div class="flex flex-row justify-around gap-8">
                <div class="w-3/12 hidden lg:block">
                    <div>
                        <w-card :shadow="false">
                            <template slot="header">
                                <p class="caption bold white-text">FILTROS</p>
                            </template>

                            <FiltroInmueble></FiltroInmueble>
                        </w-card>
                    </div>
                </div>
                <div class="w-full" v-if="filtrar">
                    <div class="filter">
                        <div class="filter-header">filtros</div>
                        <div class="filter-body">
                            <FiltroInmueble></FiltroInmueble>
                            <w-btn
                                :fullwidth="true"
                                color="secondary"
                                :dark="true"
                                @click="showFilters = false"
                            >filtrar</w-btn>
                        </div>
                    </div>
                </div>
                <div class="sm:w-full lg:w-9/12 px-6" v-else>
                    <w-card :shadow="false">
                        <div class="flex flex-row justify-between flex-wrap ml-3">
                            <div class="lg:pl-3">
                                <h1 class="subtitle bold">Listado de Inmuebles</h1>
                            </div>
                            <div class="lg:pr-3">
                                <w-btn
                                    color="tertiary"
                                    :dark="true"
                                    style=" margin: 0px !important; display: flex;"
                                    @click="$router.push('/inmuebles/mapa')"
                                >
                                    Búsqueda de mapa
                                    <w-icon
                                        style="margin: -6px 0px 0px 16px;"
                                        icon="address-map"
                                        h="26px"
                                    ></w-icon>
                                </w-btn>
                            </div>
                        </div>
                        <br />
                        <w-btn
                            class="lg:hidden"
                            :dark="true"
                            color="secondary"
                            @click="showFilters = true"
                        >filtrar</w-btn>
                        <br />
                        <div class="flex flex-row justify-between flex-wrap">
                            <div class="sm:w-full lg:w-1/3 p-3" v-for="(card, i) in cards" :key="i">
                                <w-card :image="card.image" hover="full-hover">
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
                        <div class="flex justify-center lg:justify-end">
                            <w-pagination v-model="page" :length="4" @click="navigate()"></w-pagination>
                        </div>
                    </w-card>
                </div>
            </div>
        </div>
        <br />
    </div>
</template>

<script>
import FiltroInmueble from "../../components/inmuebles/FiltroInmueble";

export default {
    data: () => ({
        page: 1,
        showFilters: false,
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
    }),

    components: {
        FiltroInmueble
    },

    computed: {
        filtrar() {
            if (this.showFilters) {
                if (this.windowWidth >= 768) {
                    this.showFilters = false;
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        }
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    }
};
</script>

<style lang="scss" scoped>
.inmuebles-container {
    width: 95%;
    margin: auto;
}

@media (max-width: 764px) {
    .inmuebles-container {
        width: 100%;
    }
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
</style>
