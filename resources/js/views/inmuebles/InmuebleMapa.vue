<template>
    <!-- Paginas 30 - 36 - 39 - 41 -->

    <div>
        <div class="inmuebles-container">
            <div class="flex flex-row justify-around gap-8">
                <div class="w-3/12 hidden lg:block">
                    <div>
                        <w-card :shadow="false">
                            <template slot="header">
                                <p class="caption bold white-text">FILTROS APLICADOS</p>
                            </template>

                            <FiltrosMapa></FiltrosMapa>
                        </w-card>
                    </div>
                </div>
                <div class="w-full pb-16" v-if="filtrar">
                    <div class="filter">
                        <div class="filter-header">filtros</div>
                        <div class="filter-body">
                            <FiltrosMapa></FiltrosMapa>
                            <w-btn
                                :fullwidth="true"
                                color="secondary"
                                :dark="true"
                                @click="filtrar = false"
                            >filtrar</w-btn>
                        </div>
                    </div>
                </div>
                <div class="sm:w-full lg:w-9/12 px-6" v-else>
                    <w-card :shadow="false">
                        <div class="flex flex-row justify-between flex-wrap">
                            <div class="lg:pl-3">
                                <h1 class="subtitle bold">Listado de Inmuebles</h1>
                            </div>
                        </div>

                        <div class="pb-2 lg:pb-0">
                            <w-btn
                                class="lg:hidden"
                                :dark="true"
                                color="secondary"
                                @click="filtrar = true"
                            >filtrar</w-btn>
                        </div>
                        <br />

                        <Mapas :center="center" :markers="markers"></Mapas>

                        <br />
                    </w-card>
                </div>
            </div>
        </div>
        <br />
    </div>
</template>

<script>
import FiltrosMapa from "../../components/inmuebles/FiltrosMapa";
import Mapas from "../../components/mapas/Mapas";

export default {
    data: () => ({
        filtrar: false,
        center: { lat: -12.1122095, lng: -77.047945 },
        markers: [
            {
                position: { lat: -12.1221005, lng: -77.0315953 },
                image: "/images/departamentos/8.jpg",
                dir: "Calle los ficus Mz B lt. 10",
                description: " 19 unidades 1 a 3 dormitorio 45m a 97m techados",
                precio: "86,723",
                entrega: "Inmediata",
                condicion: "Preventa en planos"
            },
            {
                position: { lat: -12.1001099, lng: -77.0554858 },
                image: "/images/departamentos/7.jpg",
                dir: "Calle los ficus Mz B lt. 10",
                description: " 19 unidades 1 a 3 dormitorio 45m a 97m techados",
                precio: "90,232",
                entrega: "Inmediata",
                condicion: "Preventa en planos"
            },
            {
                position: { lat: -12.1206998, lng: -77.0347257 },
                image: "/images/departamentos/6.jpg",
                dir: " Calle los ficus Mz B lt. 10",
                description: "19 unidades 1 a 3 dormitorio 45m a 97m techados",
                precio: "90,232",
                entrega: "Inmediata",
                condicion: "Preventa en planos"
            }
        ]
    }),

    components: {
        FiltrosMapa,
        Mapas
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
