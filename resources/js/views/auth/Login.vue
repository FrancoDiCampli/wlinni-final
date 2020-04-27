<template>
    <!-- 

        pagina-logueo (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/df635d12-9a1d-4323-80b5-6a21b416e1c9/pagina-logueo)
        MB-logueo (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/898cb2e5-0e60-428f-bae4-dda910dc11e2/MB-regiistro)

    -->

    <div class="login">
        <div class="login-container">
            <w-card image="/images/login.png" class="login-card" :shadow="false">
                <div class="flex flex-row ml-4">
                    <p class="bold">INGRESARA A LA PLATAFORMA</p>
                    <w-snackbar class="ml-5">
                        <w-icon icon="info" h="24px"></w-icon>
                        <template slot="content">
                            <p class="bold">Importante!</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit</p>
                        </template>
                    </w-snackbar>
                </div>
                <form class="mt-6" @submit.prevent="login">
                    <w-input
                        label="Usuario"
                        beforeIcon="user"
                        color="tertiary"
                        v-model="form.username"
                    ></w-input>
                    <w-input
                        label="Contraseña"
                        beforeIcon="unlock"
                        color="tertiary"
                        v-model="form.pass"
                    ></w-input>
                    <a class="login-link ml-4">¿Ha olvidado la contraseña?</a>
                    <w-btn @click="login()" color="tertiary" :dark="true" :fullwidth="true">Ingresar</w-btn>
                    <w-checkbox
                        class="mt-6 ml-4"
                        color="tertiary"
                        label="¿Recordarme?"
                        v-model="form.remindMe"
                    ></w-checkbox>
                </form>
                <p class="ml-4">
                    ¿Aun no eres usuario?
                    <a class="login-link">Obtener una cuenta</a>
                </p>
            </w-card>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        form: {}
    }),

    methods: {
        login() {
            localStorage.setItem("logged", JSON.stringify(true));
        }
    }
};
</script>

<style lang="scss">
@import "../../components/wlinii_components/sass/_variables.scss";

.login {
    .login-container {
        padding: 75px 150px;

        .login-card {
            display: flex !important;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            .image,
            .card-text {
                max-width: 50%;
                height: 490px !important;
                flex: 1 1 auto;
            }

            .card-text {
                padding: 65px;
            }
        }
    }

    .login-link {
        color: #000;
        text-decoration: underline;
        cursor: pointer;
    }
}

@media (max-width: 1024px) {
    .login {
        .login-container {
            .login-card {
                justify-content: center;
                .image {
                    display: none;
                }
                .card-text {
                    max-width: 100% !important;

                    flex: 0 1 auto;
                    padding: 25px;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .login {
        .login-container {
            padding: 15px;
        }
    }
}
</style>
