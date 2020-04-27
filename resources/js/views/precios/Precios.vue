<template>
    <!-- 
        
        precios-de-subscripcion (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/e20ae64d-28f7-44bf-8603-409a756dd42c/precios-de-suscripcion)
        MB-precios-de-subscripcion (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/03edf50b-3d03-4f00-a638-3757612172fa/MB-precios-de-suscripcion)

    -->
    <div>
        <div class="precios-container py-16">
            <w-card :shadow="false">
                <div class="flex justify-center">
                    <p class="subtitle bold ml-5 my-5 md:ml-0">Precios de suscripción</p>
                </div>
                <br />
                <div>
                    <w-carousel
                        :items="windowWidth <= 764 ? 1 : 3"
                        :pagination="true"
                        :navigation="false"
                        class="custom-carousel"
                    >
                        <slide v-for="item in cards1" :key="item.i">
                            <div class="carousel-item">
                                <w-card>
                                    <template slot="header">
                                        <div class="flex justify-center">
                                            <p class="white-text bold body p-4">{{ item.tipo }}</p>
                                        </div>
                                    </template>
                                    <div>
                                        <div class="flex justify-center tertiary-text">
                                            <div class="flex items-start">
                                                <h1 class="text-4xl bold mt-3">S/</h1>
                                                <h1 class="text-6xl bold">{{ item.tarifa }}</h1>
                                            </div>
                                        </div>
                                        <div class="flex justify-center mb-8">
                                            <h1 class="caption bold">MENSUAL</h1>
                                        </div>
                                        <h1 class="flex justify-center caption my-2">10 propiedades</h1>
                                        <hr class="border-b-1 border-gray-500 mx-10 my-2" />
                                        <h1 class="flex justify-center caption my-2">3 agentes</h1>
                                        <hr class="border-b-1 border-gray-500 mx-10 my-2" />
                                        <h1 class="flex justify-center caption my-2">8 destacados</h1>
                                        <hr class="border-b-1 border-gray-500 mx-10 my-2" />
                                        <h1
                                            class="flex justify-center caption my-2"
                                        >Propiedades destacadas</h1>
                                        <div class="flex justify-center">
                                            <w-btn
                                                class="white-text bold justify-center"
                                                color="tertiary"
                                                :fullwidth="true"
                                            >suscribirse</w-btn>
                                        </div>
                                    </div>
                                </w-card>
                                <br />
                            </div>
                        </slide>
                    </w-carousel>
                </div>
                <div class="my-8">
                    <w-carousel
                        :items="windowWidth <= 764 ? 1 : 3"
                        :pagination="true"
                        :navigation="false"
                        class="custom-carousel"
                    >
                        <slide v-for="item in cards2" :key="item.i">
                            <div class="carousel-item">
                                <w-card>
                                    <template slot="header">
                                        <div class="flex justify-center">
                                            <p class="white-text bold body p-4">{{ item.tipo }}</p>
                                        </div>
                                    </template>
                                    <div>
                                        <div class="flex justify-center tertiary-text">
                                            <div class="flex items-start">
                                                <h1 class="text-4xl bold mt-3">S/</h1>
                                                <h1 class="text-6xl bold">{{ item.tarifa }}</h1>
                                            </div>
                                        </div>
                                        <div class="flex justify-center mb-8">
                                            <h1 class="caption bold">MENSUAL</h1>
                                        </div>
                                        <h1 class="flex justify-center caption my-2">10 propiedades</h1>
                                        <hr class="border-b-1 border-gray-500 mx-10 my-2" />
                                        <h1 class="flex justify-center caption my-2">3 agentes</h1>
                                        <hr class="border-b-1 border-gray-500 mx-10 my-2" />
                                        <h1 class="flex justify-center caption my-2">8 destacados</h1>
                                        <hr class="border-b-1 border-gray-500 mx-10 my-2" />
                                        <h1
                                            class="flex justify-center caption my-2"
                                        >Propiedades destacadas</h1>
                                        <div class="flex justify-center">
                                            <w-btn
                                                class="white-text bold justify-center"
                                                :color="$wlinii.tertiary"
                                                :fullwidth="true"
                                            >suscribirse</w-btn>
                                        </div>
                                    </div>
                                </w-card>
                                <br />
                            </div>
                        </slide>
                    </w-carousel>
                </div>
            </w-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            cards1: [
                {
                    tipo: "FREE",
                    tarifa: 0
                },
                {
                    tipo: "STANDAR",
                    tarifa: 39
                },
                {
                    tipo: "PREMIUM",
                    tarifa: 74
                }
            ],
            cards2: [
                {
                    tipo: "FREE",
                    tarifa: 80
                },
                {
                    tipo: "GOLD",
                    tarifa: 99
                },
                {
                    tipo: "PREMIUM",
                    tarifa: 106
                }
            ]
        };
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    }
};
</script>

<style lang="scss">
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
