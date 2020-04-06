<template>
    <!-- 
        
        AMC-4 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/e4e8172f-1a17-4470-bff7-97de21426ac3/AMC-4)
        MB-AMC-3-1 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/37cc59df-25a9-4a41-b5b2-bef83ec1fc3e/MB-AMC-3-1)

    -->

    <div class="amc-4">
        <div class="amc-container py-16">
            <w-card :shadow="false">
                <div>
                    <p class="body subtitle-md bold md:ml-5">
                        Análisis de Mercado Comparativo (AMC)
                    </p>
                    <p class="caption primary-text md:ml-5">
                        Aplicación de analisis de precios
                    </p>
                    <w-btn
                        :disabled="true"
                        :rounded="true"
                        :dark="true"
                        :small="true"
                        color="primary"
                        class="step-btn"
                        >02 PASO</w-btn
                    >
                    <p class="body subtitle-md bold md:ml-5">
                        Resultado Final
                    </p>
                    <div class="w-full md:px-5">
                        <progress
                            value="100"
                            max="100"
                            class="amc-progress"
                        ></progress>
                    </div>
                </div>
                <p class="body bold ml-3 md:ml-5 my-5">OFERTA</p>
                <div class="amc-table-container">
                    <table class="amc-table">
                        <tr>
                            <th>Dirección</th>
                            <th>Precio</th>
                            <th class="hidden-cell">M2</th>
                            <th class="hidden-cell">S/m2</th>
                        </tr>
                        <tr>
                            <td>Miraflores</td>
                            <td>10000000</td>
                            <td class="hidden-cell">200</td>
                            <td class="hidden-cell">481</td>
                        </tr>
                    </table>
                </div>
                <p class="body bold ml-3 md:ml-5 my-5">VENDIDOS</p>
                <div class="amc-table-container">
                    <table class="amc-table">
                        <tr>
                            <th>Dirección</th>
                            <th>Precio</th>
                            <th class="hidden-cell">M2</th>
                            <th class="hidden-cell">S/m2</th>
                        </tr>
                        <tr>
                            <td>Miraflores</td>
                            <td>15000000</td>
                            <td class="hidden-cell">350</td>
                            <td class="hidden-cell">481</td>
                        </tr>
                    </table>
                </div>
                <div class="amc-table-container mt-5">
                    <table class="amc-table">
                        <tr>
                            <th></th>
                            <th>Máximo</th>
                            <th>Mínimo</th>
                            <th class="hidden-cell">Promedio</th>
                            <th class="hidden-cell">Desviación Estandar</th>
                        </tr>
                        <tr>
                            <td>OFERTAS</td>
                            <td>Miraflores</td>
                            <td>105045614</td>
                            <td class="hidden-cell">201</td>
                            <td class="hidden-cell">480</td>
                        </tr>
                        <tr>
                            <td>VENDIDOS</td>
                            <td>Miraflores</td>
                            <td>852568840</td>
                            <td class="hidden-cell">2010</td>
                            <td class="hidden-cell">470</td>
                        </tr>
                    </table>
                </div>
                <div class="w-full md:px-5 my-10">
                    <div class="primary alert">
                        <div
                            class="flex flex-row justify-center md:justify-between flex-wrap"
                        >
                            <div class="w-full md:w-auto">
                                <p
                                    class="body bold white-text text-center md:text-left"
                                >
                                    PRECIO SUGERIDO:
                                    <span class="hidden md:block">S/100</span>
                                </p>
                            </div>
                            <div class="w-full md:w-auto">
                                <p
                                    class="body bold white-text text-center md:text-right"
                                >
                                    M2:1245
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:px-5 mt-10 mb-5">
                    <form>
                        <w-textarea
                            label="OBSERVACIONES"
                            placeholder=" "
                            v-model="form.observaciones"
                        ></w-textarea>
                    </form>
                </div>
                <div class="flex flex-row justify-center">
                    <div class="w-full md:w-1/2">
                        <div class="flex flex-row justify-between flex-wrap">
                            <div class="w-full md:w-1/2 px-2">
                                <w-btn
                                    :fullwidth="true"
                                    :large="true"
                                    :dark="true"
                                    color="secondary"
                                    >DESCARGAR PDF</w-btn
                                >
                            </div>
                            <div class="w-full md:w-1/2 px-2">
                                <w-btn
                                    :fullwidth="true"
                                    :large="true"
                                    :dark="true"
                                    color="primary"
                                    >GUARDAR ANÁLISiS</w-btn
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </w-card>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        form: {},
    }),
};
</script>

<style lang="scss">
.amc-4 {
    .amc-container {
        max-width: 90%;
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
        .amc-table-container {
            padding: 0px 20px;
            table {
                &.amc-table {
                    background-color: rgba($color: #aaaaaa, $alpha: 0.18);
                    overflow: hidden;
                    width: 100%;
                    border-radius: 32px;
                    th,
                    td {
                        text-align: left;
                        padding: 32px 64px;
                    }
                    th {
                        background-color: rgba($color: #aaaaaa, $alpha: 0.18);
                        &:first-child {
                            border-bottom-left-radius: 32px;
                        }

                        &:last-child {
                            border-bottom-right-radius: 32px;
                        }
                    }
                }
            }
        }

        .alert {
            border-radius: 31px;
            padding: 34px 75px;
        }
    }
}

@media (max-width: 768px) {
    .amc-4 {
        .amc-container {
            width: 95%;
            .step-btn {
                padding: 5px 25px;
                margin: 20px 0px !important;
            }

            .amc-table-container {
                padding: 0px !important;
                table {
                    &.amc-table {
                        th,
                        td {
                            padding: 16px 32px !important;
                        }
                        .hidden-cell {
                            display: none;
                        }
                        th {
                            &:first-child {
                                border-bottom-left-radius: 32px;
                            }
                            &:not(.hidden-cell) {
                                &:not(:first-child) {
                                    border-bottom-right-radius: 32px;
                                }
                            }
                        }
                    }
                }
            }

            .alert {
                border-radius: 31px;
                padding: 14px 45px;
            }
        }
    }
}
</style>
