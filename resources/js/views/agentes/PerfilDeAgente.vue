<template>
    <!-- 
        
       perfil-del-agente (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/040862ab-5d60-4397-a888-53a600060565/perfil-del-agente)
       MB-perfil-del-agente (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/1a5e262d-c8f4-4584-9cc7-fa5788a05d10/MB-perfil-del-agente)
    
    -->

    <div class>
        <div class="agente-perfil-container">
            <w-card :shadow="false">
                <p class="subtitle bold mt-5 ml-5">Perfil de Agente</p>
                <p class="ml-5 mb-4">Agregar y editar información litado</p>

                <div class="lg:w-2/3 primary rounded-bl-full rounded-r-full lg:ml-5 mb-4 p-4">
                    <p
                        class="caption white-text truncate"
                    >Configuración flexible y formas de edición, agregue y edite información de listado, fotos y ubicación de la posición</p>
                </div>

                <form @submit.prevent>
                    <div class="mb-4">
                        <div class="w-full md:w-1/2 ml-5 mt-5 mb-10">
                            <w-checkbox label="Soy un agente" v-model="form.soyagente"></w-checkbox>
                        </div>
                    </div>
                    <div class="flex-wrap lg:flex">
                        <div class="w-full md:w-1/3 px-2">
                            <w-select
                                label="nombre agencia"
                                placeholder="Choose a option"
                                :options="['Lara Group']"
                                v-model="form.agencia"
                            ></w-select>
                        </div>
                        <div class="w-full md:w-1/3 px-2">
                            <w-select
                                label="pais"
                                placeholder="Choose a country"
                                :options="['A']"
                                v-model="form.pais"
                            ></w-select>
                        </div>
                        <div class="w-full md:w-1/3 px-2">
                            <w-select
                                label="ciudad"
                                placeholder="Choose a city"
                                :options="['A']"
                                v-model="form.ciudad"
                            ></w-select>
                        </div>
                    </div>
                    <div>
                        <p class="tertiary-text bold body ml-5 mb-5">Información de Contacto</p>
                        <br />
                        <div class="flex-wrap lg:flex">
                            <div class="w-full md:w-1/3 px-2">
                                <w-input
                                    label="nombres"
                                    placeholder="Ingrese ..."
                                    v-model="form.nombres"
                                ></w-input>
                            </div>
                            <div class="w-full md:w-1/3 px-2">
                                <w-input
                                    label="apellidos"
                                    placeholder="Ingrese ..."
                                    v-model="form.apellidos"
                                ></w-input>
                            </div>
                            <div class="w-full md:w-1/3 px-2">
                                <w-input
                                    label="celular de trabajo"
                                    placeholder="Ingrese ..."
                                    v-model="form.celular"
                                ></w-input>
                            </div>
                            <div class="w-full md:w-1/3 px-2">
                                <w-input
                                    label="telefono"
                                    placeholder="Ingrese ..."
                                    v-model="form.telefono"
                                ></w-input>
                            </div>
                            <div class="w-full md:w-1/3 px-2">
                                <w-input
                                    label="email"
                                    placeholder="email@example.com"
                                    v-model="form.email"
                                ></w-input>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="tertiary-text bold body ml-5 mb-5">Acerca de mi</p>
                        <br />
                        <div class="flex flex-row flex-wrap">
                            <div class="w-full lg:w-2/3 md:w-2/3 px-2">
                                <w-textarea
                                    label="DESCRIPCIÓN"
                                    placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis."
                                    v-model="form.ambiente"
                                ></w-textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </w-card>
        </div>
        <br />
        <div class="agente-perfil-container">
            <w-card :shadow="false">
                <p class="tertiary-text bold body ml-5 mb-5">Mis redes sociales</p>
                <br />
                <form @submit.prevent>
                    <div class="w-full lg:w-2/3 md:w-2/3">
                        <w-input
                            label="facebook"
                            placeholder="https://www.facebook.com/messages"
                            v-model="form.facebook"
                        ></w-input>
                    </div>
                    <div class="w-full lg:w-2/3 md:w-2/3">
                        <w-input
                            label="twitter"
                            placeholder="https://www.twitter.com/messages"
                            v-model="form.twitter"
                        ></w-input>
                    </div>
                    <div class="w-full lg:w-2/3 md:w-2/3">
                        <w-input
                            label="instagram"
                            placeholder="https://www.instagram.com/messages"
                            v-model="form.instagram"
                        ></w-input>
                    </div>
                    <div class="w-full lg:w-2/3 md:w-2/3">
                        <w-input
                            label="linkedin"
                            placeholder="https://www.linkedin.com/messages"
                            v-model="form.linkedin"
                        ></w-input>
                    </div>
                    <div class="flex flex-row justify-center md:justify-start">
                        <w-btn dark large :color="$wlinii.tertiary" class="bold">GUARDAR CAMBIOS</w-btn>
                    </div>
                </form>
            </w-card>
        </div>
        <br />
        <div class="hidden lg:block md:block agente-perfil-container">
            <w-card :shadow="false">
                <div class="flex justify-around">
                    <div class="w-1/2 px-4">
                        <p class="tertiary-text bold body ml-5 mb-5">Cambia tu contraseña</p>
                        <br />
                        <form @submit.prevent>
                            <div class="w-4/5">
                                <w-input
                                    label="CONTRASEÑA ACTUAL"
                                    placeholder=" "
                                    v-model="form.actual"
                                ></w-input>
                            </div>
                            <div class="w-4/5">
                                <w-input
                                    label="NUEVA CONTRASEÑA"
                                    placeholder=" "
                                    v-model="form.nueva"
                                ></w-input>
                            </div>
                            <div class="w-4/5">
                                <w-input
                                    label="CONFIRMACIÓM NUEVA CONTRASEÑA"
                                    placeholder=" "
                                    v-model="form.confirmar"
                                ></w-input>
                            </div>

                            <div class="flex flex-row justify-center md:justify-start">
                                <w-btn
                                    dark
                                    large
                                    :color="$wlinii.tertiary"
                                    class="bold"
                                >GUARDAR CAMBIOS</w-btn>
                            </div>
                        </form>
                    </div>
                    <div class="w-1/2 px-4">
                        <p class="bold caption mt-10 mb-2">INSINUACIÓN</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. lor sit amet, consectetuer adipiscing elit. Donec odio</p>
                    </div>
                </div>
            </w-card>
            <br />
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        windowWidth: window.innerWidth,
        form: {}
    }),

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    }
};
</script>

<style lang="scss" scoped>
.agente-perfil-container {
    width: 90%;
    max-width: 1180px;
    margin: auto;
}
</style>
