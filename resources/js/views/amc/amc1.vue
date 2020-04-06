<template>
    <!--
        
        AMC-1 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/429a258a-2780-4f5f-8cb3-6bcf4b4673ea/AMC-1)
        MB-AMC-1 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/63922af1-b1ae-4f85-89ee-8dc06a07e288/MB-AMC-1)

    -->
    <div>
        <div class="precios-container py-16">
            <w-card :shadow="false">
                <div class="lg:w-11/12 mx-auto">
                    <h1 class="subtitle-lg fan bold">
                        Análisis de Mercado Comparativo (AMC)
                    </h1>
                    <p class="caption">Aplicación de analisis de precios</p>
                    <p
                        class="uppercase text-white primary px-2 my-5 lg:mt-5 w-1/3 lg:w-2/12 rounded-full text-center"
                    >
                        01 paso
                    </p>
                    <h1 class="subtitle-lg fan bold">Completar Formulario</h1>
                    <div class="shadow w-full rounded-full default my-5">
                        <div
                            class="secondary leading-none text-center rounded-full p-2"
                            style="width: 25%;"
                        ></div>
                    </div>
                </div>
                <br />

                <!-- Comienza el formulario  -->
                <div
                    id="form"
                    class="mt-5 lg:flex items-start lg:w-11/12 mx-auto"
                >
                    <form class="w-full lg:pr-10">
                        <div class="form-group mt-5">
                            <w-select
                                label="TIPO DE INMUEBLE"
                                placeholder="Pendientes"
                                :options="['a', 'b', 'c']"
                                v-model="form.tipoinmueble"
                            ></w-select>
                        </div>
                        <div class="form-group">
                            <label class="caption uppercase bold ml-5"
                                >TIPO DE OPERACION</label
                            >
                            <div class="flex justify-between">
                                <w-btn
                                    class="full-width mr-2"
                                    color="tertiary"
                                    :rounded="true"
                                    :dark="true"
                                    @click.prevent="setOperation('venta')"
                                    >venta</w-btn
                                >
                                <w-btn
                                    class="full-width"
                                    color="tertiary"
                                    :rounded="true"
                                    :dark="true"
                                    @click.prevent="setOperation('alquiler')"
                                    >alquiler</w-btn
                                >
                            </div>
                        </div>

                        <div class="form-group mt-5">
                            <label class="caption uppercase bold ml-5"
                                >DIRECCIÓN</label
                            >
                            <w-input v-model="form.dir"></w-input>
                        </div>
                        <div class="form-group mt-5">
                            <label class="caption uppercase bold ml-5"
                                >precio</label
                            >
                            <w-input v-model="form.price"></w-input>
                        </div>
                    </form>

                    <form class="w-full lg:pl-10">
                        <div class="form-group">
                            <label class="caption uppercase bold ml-5"
                                >ANTIGUEDAD</label
                            >
                            <w-input v-model="form.years"></w-input>
                        </div>
                        <div class="form-group">
                            <label class="caption uppercase bold ml-5"
                                >HABITACIONES</label
                            >
                            <w-input v-model="form.room"></w-input>
                        </div>
                        <div class="form-group">
                            <label class="caption uppercase bold ml-5"
                                >CUARTO DE SERVICIO</label
                            >
                            <w-input v-model="form.service"></w-input>
                        </div>
                        <div class="form-group">
                            <label class="caption uppercase bold ml-5"
                                >BAÑOS</label
                            >
                            <w-input></w-input>
                        </div>
                        <div class="form-group">
                            <label class="caption uppercase bold ml-5"
                                >COCHERAS</label
                            >
                            <w-input v-model="form.bath"></w-input>
                        </div>
                        <div class="form-group">
                            <!-- <label class="caption uppercase bold ml-5">Zonificación</label> -->
                            <w-select
                                label="ZONIFICACION"
                                placeholder="Pendientes"
                                :options="['a', 'b', 'c']"
                                v-model="form.zonificación"
                            ></w-select>
                        </div>
                    </form>
                </div>

                <!-- Botones  -->
                <!-- Botones  -->
                <div class="lg:w-11/12 mx-auto">
                    <!-- Calidad de construccion  -->
                    <div class="w-full lg:w-6/12 my-10">
                        <label class="caption uppercase bold ml-5"
                            >CALIDAD DE CONSTRUCCIÓN</label
                        >
                        <div class="flex flex-wrap caption">
                            <button
                                @click.prevent="setCuality('EXCELENTE')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                EXCELENTE
                            </button>
                            <button
                                @click.prevent="setCuality('BUENO')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                BUENO
                            </button>
                            <button
                                @click.prevent="setCuality('REGULAR')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                REGULAR
                            </button>
                            <button
                                @click.prevent="setCuality('MALO')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                MALO
                            </button>
                        </div>
                    </div>

                    <!-- Calidad de construccion  -->
                    <div class="w-full lg:w-6/12 my-10">
                        <label class="caption uppercase bold ml-5"
                            >CALIDAD DE ACABADOS</label
                        >
                        <div class="flex flex-wrap caption">
                            <button
                                @click.prevent="setDetails('EXCELENTE')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                EXCELENTE
                            </button>
                            <button
                                @click.prevent="setDetails('BUENO')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                BUENO
                            </button>
                            <button
                                @click.prevent="setDetails('REGULAR')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                REGULAR
                            </button>
                            <button
                                @click.prevent="setDetails('MALO')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                MALO
                            </button>
                        </div>
                    </div>
                    <!-- Calidad de conservacion  -->
                    <div class="w-full lg:w-6/12 my-10">
                        <label class="caption uppercase bold ml-5"
                            >CALIDAD DE CONSERVACIÓN</label
                        >
                        <div class="flex flex-wrap caption">
                            <button
                                @click.prevent="setConservation('EXCELENTE')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                EXCELENTE
                            </button>
                            <button
                                @click.prevent="setConservation('BUENO')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                BUENO
                            </button>
                            <button
                                @click.prevent="setConservation('REGULAR')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                REGULAR
                            </button>
                            <button
                                @click.prevent="setConservation('MALO')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                MALO
                            </button>
                        </div>
                    </div>
                    <!-- Calidad de conservacion  -->
                    <div class="w-full lg:w-6/12 my-10">
                        <label class="caption uppercase bold ml-5"
                            >UBICACIÓN</label
                        >
                        <div class="flex flex-wrap caption">
                            <button
                                @click.prevent="setLocation('EXCELENTE')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                EXCELENTE
                            </button>
                            <button
                                @click.prevent="setLocation('BUENO')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                BUENO
                            </button>
                            <button
                                @click.prevent="setLocation('REGULAR')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                REGULAR
                            </button>
                            <button
                                @click.prevent="setLocation('MALO')"
                                style="width: 135px;"
                                class="default text-white text-center px-3 py-2 rounded-full m-1"
                            >
                                MALO
                            </button>
                        </div>
                    </div>
                </div>

                <div class="lg:flex justify-around mt-10">
                    <w-btn
                        @click="showForm"
                        class="bold w-full lg:w-1/3"
                        :large="true"
                        :dark="true"
                        >GUARDAR CAMBIOS</w-btn
                    >
                    <w-btn
                        class="bold w-full lg:w-1/3"
                        :large="true"
                        :dark="true"
                        color="primary"
                        >siguiente</w-btn
                    >
                </div>
            </w-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: true,
            windowWidth: window.innerWidth,
            select: null,
            form: {},
        };
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
        },
    },
};
</script>

<style lang="scss">
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

.custom-carousel {
    .carousel {
        width: 95% !important;
    }
}
</style>
