<template>
    <!-- 

        listado-de-publicacion (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/2deb2d30-7c24-47ac-abd0-9ccb7e8b36a0/listado-de-publicacion)    
        listado-de-publicacion-1 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/78933429-40cb-4660-9cd7-d39369f157a6/listado-de-publicacion-1)
        listado-de-publicacion-2 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/9c805ad2-bc8b-473c-8bc7-760f59becdeb/listado-de-publicacion-2)
        listado-de-publicacion-3 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/5c65027e-2c50-473b-90a2-9703b73fb9be/listado-de-publicacion-3)
        MB-listado-de-publicacion (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/82301175-3fef-44c3-8991-844d69c18bf7/MB-listado-de-publicacion)
        

    -->

    <div>
        <div class="publicaciones-container">
            <div class="flex flex-row justify-around">
                <div class="w-3/12 hidden lg:block">
                    <div>
                        <w-card :shadow="false">
                            <template slot="header">
                                <p class="caption bold white-text">
                                    ORDENAR POR
                                </p>
                            </template>

                            <FiltroPublicacion></FiltroPublicacion>

                            <w-btn
                                :large="true"
                                :dark="true"
                                :fullwidth="true"
                                color="secondary"
                                @click="$router.push('publicaciones/nueva')"
                                >nueva publicación</w-btn
                            >
                        </w-card>
                    </div>
                </div>
                <div class="w-full" v-if="filtrar">
                    <div class="filter">
                        <div class="filter-header">filtros</div>
                        <div class="filter-body">
                            <FiltroPublicacion></FiltroPublicacion>
                            <w-btn
                                :fullwidth="true"
                                color="secondary"
                                :dark="true"
                                @click="filtrar = false"
                                >filtrar</w-btn
                            >
                        </div>
                    </div>
                </div>
                <div class="sm:w-full lg:w-9/12 px-6" v-else>
                    <w-card :shadow="false">
                        <h1 class="subtitle bold lg:pl-3">
                            Listado de Publicaciones
                        </h1>
                        <br />
                        <w-btn
                            class="lg:hidden"
                            :dark="true"
                            color="secondary"
                            @click="filtrar = true"
                            >filtrar</w-btn
                        >
                        <br />
                        <div class="flex flex-row justify-between flex-wrap">
                            <div
                                class="sm:w-full lg:w-1/3 p-3"
                                v-for="(card, i) in cards"
                                :key="i"
                            >
                                <w-card
                                    :image="card.foto"
                                    imageHeight="200px"
                                    v-model="card.showForm"
                                    :activeContent="true"
                                >
                                    <template
                                        slot="header"
                                        v-if="!card.showForm"
                                    >
                                        <div
                                            class="flex flex-row justify-between"
                                        >
                                            <div class="info-item">
                                                <div
                                                    v-if="
                                                        card.state ==
                                                        'Publicado'
                                                    "
                                                    class="dot success"
                                                ></div>
                                                <div
                                                    v-if="
                                                        card.state == 'Borrador'
                                                    "
                                                    class="dot tertiary"
                                                ></div>
                                                <div
                                                    v-if="
                                                        card.state == 'Vendido'
                                                    "
                                                    class="dot secondary"
                                                ></div>
                                                <p class="white-text">
                                                    {{ card.state }}
                                                </p>
                                            </div>
                                            <div>
                                                <w-btn :icon="true">
                                                    <w-icon
                                                        icon="edit-white"
                                                        h="13px"
                                                    ></w-icon>
                                                </w-btn>
                                                <w-btn
                                                    :icon="true"
                                                    @click="
                                                        card.showForm = true
                                                    "
                                                >
                                                    <w-icon
                                                        icon="trash-white"
                                                        h="13px"
                                                    ></w-icon>
                                                </w-btn>
                                            </div>
                                        </div>
                                    </template>
                                    <div v-if="card.showForm">
                                        <p class="body bold white-text">
                                            Dar de Baja
                                        </p>
                                        <br />
                                        <form>
                                            <w-select
                                                placeholder="Elegir Motivo"
                                                :options="[
                                                    'porque si',
                                                    'se me ocurrio',
                                                    'asi nomas',
                                                ]"
                                                v-model="card.form.motivo"
                                                :dark="true"
                                                :tile="true"
                                                color="secondary"
                                            ></w-select>
                                            <w-input
                                                label="Buscar Asesor"
                                                :tile="true"
                                                color="secondary"
                                                v-model="card.form.asesor"
                                                :dark="true"
                                            ></w-input>
                                            <w-input
                                                label="Elegir Moneda"
                                                :tile="true"
                                                color="secondary"
                                                v-model="card.form.moneda"
                                                :dark="true"
                                            ></w-input>
                                            <w-input
                                                label="Monto de Venta"
                                                :tile="true"
                                                color="secondary"
                                                v-model="card.form.venta"
                                                :dark="true"
                                            ></w-input>
                                        </form>
                                        <w-btn
                                            :fullwidth="true"
                                            :dark="true"
                                            @click="card.showForm = false"
                                            >guardar</w-btn
                                        >
                                    </div>
                                    <div v-else>
                                        <p class="caption bold tertiary-text">
                                            {{ card.title }}
                                        </p>
                                        <br />
                                        <p>{{ card.body }}</p>

                                        <div v-if="card.boton">
                                            <w-btn
                                                :fullwidth="true"
                                                :small="true"
                                                color="primary"
                                                :dark="true"
                                                >{{ card.boton }}</w-btn
                                            >
                                        </div>
                                    </div>
                                </w-card>
                            </div>
                        </div>
                        <br />
                    </w-card>
                </div>
            </div>
        </div>
        <br />
    </div>
</template>

<script>
import FiltroPublicacion from "./FiltroPublicacion.vue";

export default {
    data() {
        return {
            filtrar: false,
            cards: [
                {
                    showForm: false,
                    state: "Publicado",
                    foto: "/images/departamentos/1.jpg",
                    title: "850 Pennsylvania",
                    body:
                        "Philiadelphia, Cherry Hill, DC205500 Modificación: 2020/09/05",
                    form: {},
                },
                {
                    showForm: false,
                    state: "Vendido",
                    foto: "/images/departamentos/2.jpg",
                    title: "850 Pennsylvania",
                    body:
                        "Philiadelphia, Cherry Hill, DC205500 Modificación: 2020/09/05",

                    form: {},
                },
                {
                    showForm: false,
                    state: "Borrador",
                    foto: "/images/departamentos/3.jpg",
                    title: "850 Pennsylvania",
                    body:
                        "Philiadelphia, Cherry Hill, DC205500 Modificación: 2020/09/05",
                    form: {},
                },
                {
                    showForm: false,
                    state: "Vendido",
                    foto: "/images/departamentos/4.jpg",
                    title: "850 Pennsylvania",
                    body:
                        "Philiadelphia, Cherry Hill, DC205500 Modificación: 2020/09/05",
                    boton: "cerrar publicación",
                    form: {},
                },
                {
                    showForm: false,
                    state: "Vendido",
                    foto: "/images/departamentos/5.jpg",
                    title: "850 Pennsylvania",
                    body:
                        "Philiadelphia, Cherry Hill, DC205500 Modificación: 2020/09/05",
                    boton: "cerrar publicación",
                    form: {},
                },
                {
                    showForm: false,
                    state: "Vendido",
                    foto: "/images/departamentos/6.jpg",
                    title: "850 Pennsylvania",
                    body:
                        "Philiadelphia, Cherry Hill, DC205500 Modificación: 2020/09/05",
                    boton: "cerrar publicación",
                    form: {},
                },
                {
                    showForm: false,
                    state: "Vendido",
                    foto: "/images/departamentos/7.jpg",
                    title: "850 Pennsylvania",
                    body:
                        "Philiadelphia, Cherry Hill, DC205500 Modificación: 2020/09/05",
                    boton: "cerrar publicación",
                    form: {},
                },
                {
                    showForm: false,
                    state: "Vendido",
                    foto: "/images/departamentos/8.jpg",
                    title: "850 Pennsylvania",
                    body:
                        "Philiadelphia, Cherry Hill, DC205500 Modificación: 2020/09/05",
                    boton: "cerrar publicación",
                    form: {},
                },
                {
                    showForm: false,
                    state: "Vendido",
                    foto: "/images/departamentos/9.jpg",
                    title: "850 Pennsylvania",
                    body:
                        "Philiadelphia, Cherry Hill, DC205500 Modificación: 2020/09/05",
                    boton: "cerrar publicación",
                    form: {},
                },
            ],
        };
    },

    components: {
        FiltroPublicacion,
    },
};
</script>

<style lang="scss" scoped>
.publicaciones-container {
    width: 95%;
    margin: auto;
}

@media (max-width: 764px) {
    .publicaciones-container {
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
