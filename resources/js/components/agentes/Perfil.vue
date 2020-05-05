<template>
    <div class="flex flex-row justify-between flex-wrap agent-component">
        <div class="w-full md:w-1/3">
            <div class="block md:hidden ml-1">
                <p class="bold">PERFIL AGENTES</p>
                <div class="divider my-5"></div>
            </div>
            <div class="flex flex-col items-center flex-wrap">
                <div class="w-full flex flex-row justify-center">
                    <img :src="agent.img" class="agent-img" />
                </div>
                <div class="hidden md:w-full md:flex md:flex-row md:justify-center md:flex-wrap">
                    <p class="my-3">Valoración del agente</p>
                    <div class="w-full flex flex-row justify-center">
                        <w-btn
                            :icon="true"
                            v-for="i in 5"
                            :key="i"
                            :disabled="true"
                            style="margin: 2px; background-color: white !important;"
                        >
                            <w-icon :icon="agent.stars >= i ? 'star-brown' : 'star-grey'" h="14px"></w-icon>
                        </w-btn>
                    </div>
                    <div class="w-full flex flex-row justify-center my-5">
                        <w-btn :icon="true">
                            <w-icon icon="mail-grey" h="12px"></w-icon>
                        </w-btn>
                        <w-btn :icon="true">
                            <w-icon icon="facebook-grey" h="15px"></w-icon>
                        </w-btn>
                        <w-btn :icon="true">
                            <w-icon icon="linkedin-grey" h="17px"></w-icon>
                        </w-btn>
                        <w-btn :icon="true">
                            <w-icon icon="twitter-grey" h="15px"></w-icon>
                        </w-btn>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full md:w-2/3">
            <div class="hidden md:block">
                <div class="flex justify-between items-center">
                    <p class="bold">PERFIL AGENTES</p>
                    <w-snackbar class="mt-1">
                        <w-icon icon="info" h="24px"></w-icon>
                        <template slot="content">
                            <p class="bold">Importante!</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit</p>
                        </template>
                    </w-snackbar>
                </div>
                <div class="divider my-5"></div>
            </div>
            <p class="subtitle bold mt-5 md:mt-0">{{ agent.name }}</p>
            <p class="mb-8">{{ agent.dir }}</p>
            <p class="bold">{{ agent.job }}</p>
            <p class="md:mb-10">Codigo Ministerio de vivienda: {{ agent.cod }}</p>
            <div class="full-divider block md:hidden mt-5"></div>
            <div class="flex flex-row flex-wrap md:hidden">
                <div class="w-1/2 self-center">
                    <p class="my-3">Valoración del agente</p>
                </div>
                <div class="w-1/2 self-center">
                    <div class="w-full flex flex-row justify-center">
                        <w-btn
                            :icon="true"
                            v-for="i in 5"
                            :key="i"
                            :disabled="true"
                            style="margin: 2px;"
                        >
                            <w-icon :icon="agent.stars >= i ? 'star-brown' : 'star-grey'" h="14px"></w-icon>
                        </w-btn>
                    </div>
                </div>
                <div class="w-full">
                    <div class="w-full flex flex-row justify-start mb-5" style="margin-left: -6px;">
                        <w-btn :icon="true">
                            <w-icon icon="mail-grey" h="12px"></w-icon>
                        </w-btn>
                        <w-btn :icon="true">
                            <w-icon icon="facebook-grey" h="15px"></w-icon>
                        </w-btn>
                        <w-btn :icon="true">
                            <w-icon icon="linkedin-grey" h="17px"></w-icon>
                        </w-btn>
                        <w-btn :icon="true">
                            <w-icon icon="twitter-grey" h="15px"></w-icon>
                        </w-btn>
                    </div>
                </div>
            </div>
            <div class="full-divider block md:hidden mb-5"></div>
            <div class="flex flex-row flex-wrap">
                <div class="w-full md:w-1/3 my-0 md:my-3">
                    <p class="bold tertiary-text">Cel.</p>
                </div>
                <div class="w-full md:w-2/3 my-3 md:my-3">
                    <p>{{ agent.cel }}</p>
                </div>
                <div class="w-full md:w-1/3 my-0 md:my-3">
                    <p class="bold tertiary-text">Email</p>
                </div>
                <div class="w-full md:w-2/3 my-3 md:my-3">
                    <p>{{ agent.email }}</p>
                </div>
                <div class="w-full md:w-1/3 my-0 md:my-3">
                    <p class="bold tertiary-text">Acerca de mi</p>
                </div>
                <div class="w-full md:w-2/3 my-3 md:my-3">
                    <p>{{ agent.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        agent: {
            name: "Peter Llanos Barnachea",
            dir: "Lima / San Borja",
            job: "Titanio Inversiones Inmobiliarias, SAC",
            cod: 382358412,
            description:
                "Persona comprometida... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
            img: "/images/rostros/1.png",
            cel: 5194641341,
            email: "rs@agenlesasociados.com",
            stars: 4
        }
    })
};
</script>

<style lang="scss">
.agent-component {
    .agent-img {
        width: 90%;
        height: auto;
        max-width: 290px;
    }
}
</style>