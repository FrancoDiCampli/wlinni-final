<template>
    <!--
        
        AMC-1 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/429a258a-2780-4f5f-8cb3-6bcf4b4673ea/AMC-1)
        MB-AMC-1 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/63922af1-b1ae-4f85-89ee-8dc06a07e288/MB-AMC-1)

    -->
    <div class="amc-1">
        <div class="amc-container">
            <w-card :shadow="false">
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
                    >01 PASO</w-btn>
                    <p class="body subtitle-md bold ml-5">Completar Formulario</p>
                    <div class="w-full px-5">
                        <progress value="25" max="100" class="amc-progress"></progress>
                    </div>
                </div>
                <div class="px-5 my-5">
                    <form @submit.prevent>
                        <div class="flex flex-row justify-between flex-wrap">
                            <div class="w-full md:w-1/2">
                                <w-select
                                    label="TIPO DE INMUEBLE"
                                    placeholder="Lara Group"
                                    :options="['a', 'b', 'c']"
                                    v-model="form.tipoInmueble"
                                ></w-select>
                                <div class="w-full">
                                    <p class="bold ml-4">TIPO DE OPERACIÓN</p>
                                    <div class="flex flex-row justify-between">
                                        <div class="w-1/2 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.operacion == 'VENTA' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.operacion = 'VENTA'"
                                            >VENTA</w-btn>
                                        </div>
                                        <div class="w-1/2 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.operacion == 'ALQUILER' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.operacion = 'ALQUILER'"
                                            >ALQUILER</w-btn>
                                        </div>
                                    </div>
                                </div>
                                <w-input
                                    class="mt-10"
                                    label="DIRECCIÓN"
                                    placeholder="Av- Juan Velasco, Sector 2 lote 1"
                                    v-model="form.direccion"
                                ></w-input>
                                <w-input
                                    label="PRECIO"
                                    placeholder="S/ 140.45"
                                    v-model="form.precio"
                                ></w-input>
                            </div>
                            <div class="w-full md:w-1/2 md:px-16">
                                <w-input
                                    label="ANTIGUEDAD"
                                    placeholder="1 año"
                                    v-model="form.antiguedad"
                                ></w-input>
                                <w-input
                                    label="HABITACIONES"
                                    placeholder="4 Habitaciones"
                                    v-model="form.habitaciones"
                                ></w-input>
                                <w-input
                                    label="CUARTO DE SERVICIO"
                                    placeholder="SI"
                                    v-model="form.cuartoServicio"
                                ></w-input>
                                <w-input label="BAÑOS" placeholder="4 baños" v-model="form.banios"></w-input>
                                <w-input
                                    label="COCHERAS"
                                    placeholder="2 cocheras"
                                    v-model="form.cocheras"
                                ></w-input>
                                <w-select
                                    label="Zonificación"
                                    placeholder="Residencial Multifamiliar"
                                    :options="['a', 'b', 'c']"
                                    v-model="form.zonificacion"
                                ></w-select>
                            </div>
                            <div class="w-full md:w-1/2">
                                <div class="w-full my-5">
                                    <p class="bold ml-4">CALIDAD DE CONSTRUCCIÓN</p>
                                    <div class="flex flex-row justify-center flex-wrap">
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.calidadConstruccion == 'EXCELENTE' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.calidadConstruccion = 'EXCELENTE'"
                                            >EXCELENTE</w-btn>
                                        </div>
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.calidadConstruccion == 'BUENO' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.calidadConstruccion = 'BUENO'"
                                            >BUENO</w-btn>
                                        </div>
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.calidadConstruccion == 'REGULAR' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.calidadConstruccion = 'REGULAR'"
                                            >REGULAR</w-btn>
                                        </div>
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.calidadConstruccion == 'MALO' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.calidadConstruccion = 'MALO'"
                                            >MALO</w-btn>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full my-5">
                                    <p class="bold ml-4">CALIDAD DE ACABADOS</p>
                                    <div class="flex flex-row justify-center flex-wrap">
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.calidadAcabados == 'EXCELENTE' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.calidadAcabados = 'EXCELENTE'"
                                            >EXCELENTE</w-btn>
                                        </div>
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.calidadAcabados == 'BUENO' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.calidadAcabados = 'BUENO'"
                                            >BUENO</w-btn>
                                        </div>
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.calidadAcabados == 'REGULAR' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.calidadAcabados = 'REGULAR'"
                                            >REGULAR</w-btn>
                                        </div>
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.calidadAcabados == 'MALO' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.calidadAcabados = 'MALO'"
                                            >MALO</w-btn>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full my-5">
                                    <p class="bold ml-4">CALIDAD DE CONSERVACIÓN</p>
                                    <div class="flex flex-row justify-center flex-wrap">
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.calidadConservacion == 'EXCELENTE' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.calidadConservacion = 'EXCELENTE'"
                                            >EXCELENTE</w-btn>
                                        </div>
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.calidadConservacion == 'BUENO' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.calidadConservacion = 'BUENO'"
                                            >BUENO</w-btn>
                                        </div>
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.calidadConservacion == 'REGULAR' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.calidadConservacion = 'REGULAR'"
                                            >REGULAR</w-btn>
                                        </div>
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.calidadConservacion == 'MALO' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.calidadConservacion = 'MALO'"
                                            >MALO</w-btn>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full my-5">
                                    <p class="bold ml-4">UBICACIÓN</p>
                                    <div class="flex flex-row justify-center flex-wrap">
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.ubicacion == 'EXCELENTE' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.ubicacion = 'EXCELENTE'"
                                            >EXCELENTE</w-btn>
                                        </div>
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.ubicacion == 'BUENO' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.ubicacion = 'BUENO'"
                                            >BUENO</w-btn>
                                        </div>
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.ubicacion == 'REGULAR' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.ubicacion = 'REGULAR'"
                                            >REGULAR</w-btn>
                                        </div>
                                        <div class="w-1/2 md:w-1/3 px-2">
                                            <w-btn
                                                :fullwidth="true"
                                                :rounded="true"
                                                :color="form.ubicacion == 'MALO' ? 'tertiary' : '#aaaaaa'"
                                                :dark="true"
                                                @click="form.ubicacion = 'MALO'"
                                            >MALO</w-btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row justify-center">
                            <div class="w-full md:w-1/2">
                                <div class="flex flex-row justify-between flex-wrap">
                                    <div class="w-full md:w-1/2 px-2">
                                        <w-btn
                                            type="submit"
                                            :fullwidth="true"
                                            :large="true"
                                            :dark="true"
                                            color="secondary"
                                        >GUARDAR CAMBIOS</w-btn>
                                    </div>
                                    <div class="w-full md:w-1/2 px-2">
                                        <w-btn
                                            :fullwidth="true"
                                            :large="true"
                                            :dark="true"
                                            color="primary"
                                            @click="$router.push('/amc/2')"
                                        >SIGUIENTE</w-btn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </w-card>
            <br />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                operacion: "VENTA",
                calidadConstruccion: "",
                calidadAcabados: "",
                calidadConservacion: "",
                ubicacion: ""
            }
        };
    }
};
</script>

<style lang="scss">
.amc-1 {
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
    }
}

@media (max-width: 768px) {
    .amc-1 {
        .amc-container {
            width: 100%;
        }
    }
}
</style>
