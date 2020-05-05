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
                                <w-select
                                    label="MONEDA"
                                    :options="['Dolares americanos', 'Soles']"
                                    placeholder="Dolares americanos"
                                    v-model="form.moneda"
                                ></w-select>
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
                        </div>
                        <div class="flex flex-row justify-center">
                            <div class="w-full md:w-2/3 lg:w-1/2">
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
@import "../../components/wlinii_components/sass/_variables.scss";

.amc-1 {
    .amc-container {
        width: 90%;
        max-width: 1180px;
        margin: auto;
        .step-btn {
            padding: 5px 25px;
            margin: 20px 18px;
            background-color: $primary !important;
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
</style>
