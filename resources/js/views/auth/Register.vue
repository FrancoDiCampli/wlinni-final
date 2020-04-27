<template>
    <!-- 

        registro-sin-codigo (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/7c7bfe78-40ab-441b-b500-9cf1297f15ff/registro-sin-codigo)
        registro-con-codigo (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/1c2a9608-f90b-48de-9ff4-7e247249a814/registro-con-codigo)
        MB-registro-sin-codigo (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/5b5935e0-77f9-4408-b7de-e6fde27896b5/MB-regiistro-sin-con-codigo-)
        MB-registro-con-codigo (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/4e00a66b-b194-4b13-a8f5-8c46b71041a3/MB-regiistro-con-codigo-2con-codigo-2)

    -->
    <div class="register mb-20">
        <div class="register-container">
            <p class="subtitle bold white-text ml-5">Registro</p>
            <div class="divider ml-5 mt-1"></div>
            <p class="white-text mt-10 ml-5 hidden md:block">Crear una cuenta</p>
            <w-card :shadow="false" class="mt-5 register-card">
                <form>
                    <div class="flex flex-row justify-between">
                        <w-switch
                            activeLabel="ASESORES INMOBILIARIAS"
                            inactiveLabel="REGISTRADOS MVCS"
                            v-model="code"
                            color="secondary"
                        ></w-switch>
                        <w-snackbar class="mt-1">
                            <w-icon icon="info" h="24px"></w-icon>
                            <template slot="content">
                                <p class="bold">Importante!</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit</p>
                            </template>
                        </w-snackbar>
                    </div>
                </form>
                <hr />
                <div v-if="!code" class="mt-5">
                    <form>
                        <p class="bold ml-5">INGRESAR NUEVO USUARIO</p>
                        <div class="mt-10"></div>
                        <w-input
                            v-model="form.code"
                            label="Código MVCS"
                            placeholder="Ingresar nombre / Codigo"
                        >
                            <template slot="snackbar">
                                <p class="bold">Importante!</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                            </template>
                        </w-input>
                        <w-input
                            v-model="form.phone"
                            label="Número Teléfono"
                            placeholder="Ingresar número"
                        >
                            <template slot="snackbar">
                                <p class="bold">Importante!</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                            </template>
                        </w-input>
                        <w-textarea
                            v-model="form.description"
                            label="Ingresar breve descripción"
                            placeholder="Descripción"
                        ></w-textarea>
                        <div class="flex flex-row justify-center">
                            <w-btn
                                color="tertiary"
                                :dark="true"
                                class="register-btn"
                                :fullwidth="windowWidth <= 768"
                                @click="$router.push('/register/successful')"
                            >REGSITRAR</w-btn>
                        </div>
                    </form>
                </div>
                <div v-else class="mt-5">
                    <form>
                        <p class="bold ml-5">INGRESAR NUEVO USUARIO</p>
                        <div class="mt-10"></div>
                        <div class="flex flex-row justify-center flex-wrap">
                            <div class="w-full md:w-1/2 pr-0 md:pr-2">
                                <w-input
                                    v-model="form.code"
                                    label="Código MVCS"
                                    placeholder="Ingresar nombre / Codigo"
                                >
                                    <template slot="snackbar">
                                        <p class="bold">Importante!</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                                    </template>
                                </w-input>
                            </div>
                            <div class="w-full md:w-1/2 pl-0 md:pl-2 mb-8 md:mb-0">
                                <w-btn
                                    color="tertiary"
                                    :rounded="true"
                                    :fullwidth="true"
                                    :dark="true"
                                    style="margin-top: 0px !important;"
                                >Buscar</w-btn>
                            </div>
                        </div>
                        <div class="primary-alert">* Usted elegio la empresa: Corredores Peru SAC</div>
                        <div class="grey-alert">
                            <p>Empresa: Corredores Peru SAC</p>
                            <p>Estado: Activo</p>
                            <p>Codigo: 2039021323</p>
                        </div>
                        <div class="flex flex-row justify-center flex-wrap">
                            <div class="w-full md:w-1/2 pr-0 md:pr-2">
                                <w-input
                                    v-model="form.firstname"
                                    label="Primer Nombre"
                                    placeholder=" "
                                >
                                    <template slot="snackbar">
                                        <p class="bold">Importante!</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                                    </template>
                                </w-input>
                            </div>
                            <div class="w-full md:w-1/2 pl-0 md:pl-2">
                                <w-input
                                    v-model="form.secondname"
                                    label="Segundo Nombre"
                                    placeholder=" "
                                >
                                    <template slot="snackbar">
                                        <p class="bold">Importante!</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                                    </template>
                                </w-input>
                            </div>
                        </div>
                        <div class="flex flex-row justify-center flex-wrap">
                            <div class="w-full md:w-1/2 pr-0 md:pr-2">
                                <w-input
                                    v-model="form.lastname1"
                                    label="Apellido Paterno"
                                    placeholder=" "
                                >
                                    <template slot="snackbar">
                                        <p class="bold">Importante!</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                                    </template>
                                </w-input>
                            </div>
                            <div class="w-full md:w-1/2 pl-0 md:pl-2">
                                <w-input
                                    v-model="form.lastname2"
                                    label="Apellido Materno"
                                    placeholder=" "
                                >
                                    <template slot="snackbar">
                                        <p class="bold">Importante!</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                                    </template>
                                </w-input>
                            </div>
                        </div>
                        <w-input
                            v-model="form.email"
                            label="Ingresar correo electrónico"
                            placeholder="example@gmail.com"
                        >
                            <template slot="snackbar">
                                <p class="bold">Importante!</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                            </template>
                        </w-input>
                        <w-input
                            v-model="form.dni"
                            label="Ingresar documento de identidad"
                            placeholder="Ingresar documento"
                        >
                            <template slot="snackbar">
                                <p class="bold">Importante!</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                            </template>
                        </w-input>
                        <w-textarea
                            v-model="form.description"
                            label="Ingresar breve descripción"
                            placeholder="Descripción"
                        ></w-textarea>
                        <div class="flex flex-row justify-center">
                            <w-btn
                                color="tertiary"
                                :dark="true"
                                class="register-btn"
                                :fullwidth="windowWidth <= 768"
                                @click="$router.push('/register/successful')"
                            >REGSITRAR</w-btn>
                        </div>
                    </form>
                </div>
            </w-card>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        code: false,
        form: {},
        windowWidth: window.innerWidth
    }),

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    }
};
</script>

<style lang="scss">
@import "../../components/wlinii_components/sass/_variables.scss";

.register {
    margin-top: -20px;
    .register-container {
        background-image: url("/images/banners/3.png");
        background-size: 100% 425px;
        background-repeat: no-repeat;
        background-position: top center;
        padding: 75px 250px;
        .divider {
            height: 0px;
            width: 32px;
            border: thin solid $tertiary;
        }

        .register-card {
            .card-text {
                padding: 40px 95px;
            }
            .register-btn {
                padding: 12px 56px;
            }

            .primary-alert {
                background-color: $primary;
                color: white;
                padding: 24px;
                border-radius: $full-radius;
            }

            .grey-alert {
                background-color: #eeeeee;
                border: thin #9e9e9e solid;
                color: black;
                padding: 24px;
                border-radius: $full-radius;
                margin: 20px 0px 40px 0px;
            }
        }
    }
}

@media (max-width: 1024px) {
    .register {
        .register-container {
            .register-card {
                .card-text {
                    padding: 25px;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .register {
        .register-container {
            padding: 45px 15px;
        }
    }
}
</style>
