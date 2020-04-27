<template>
    <div class="test-container">
        <w-card :shadow="false">
            <p class="body bold">Snackbar simple</p>
            <br />
            <div class="flex flex-row">
                <p class="bold">INGRESARA A LA PLATAFORMA</p>
                <w-snackbar class="ml-5">
                    <w-icon icon="info" h="24px"></w-icon>
                    <template slot="content">
                        <p class="bold">Importante!</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit</p>
                    </template>
                </w-snackbar>
            </div>
            <br />
            <hr />
            <br />
            <p class="body bold">Snackbar input, select, textarea</p>
            <p>Solo visible cuando el label esta elevado, o sea, cuando el input esta onFocus, con algun valor, o con algun contenido en el atributo placeholder</p>
            <form class="mt-16">
                <w-input v-model="form.input" label="Input label" placeholder="Input placeholder">
                    <template slot="snackbar">
                        <p class="bold">Importante!</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                    </template>
                </w-input>

                <w-select
                    label="Select label"
                    placeholder="Select placeholder"
                    v-model="form.select"
                    :options="['a', 'b', 'c']"
                >
                    <template slot="snackbar">
                        <p class="bold">Importante!</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                    </template>
                </w-select>

                <w-textarea
                    label="Textarea label"
                    placeholder="Textarea placeholder"
                    v-model="form.textarea"
                >
                    <template slot="snackbar">
                        <p class="bold">Importante!</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                    </template>
                </w-textarea>
            </form>
            <hr />
            <br />
            <p class="body bold">Snackbar Checkbox, switch</p>
            <form class="mt-16">
                <div class="flex flex-row justify-between">
                    <w-switch
                        activeLabel="Active label"
                        inactiveLabel="Inactive label"
                        v-model="form.switch"
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
                <div class="flex flex-row justify-between">
                    <w-checkbox label="Checkbox label" v-model="form.checkbox" color="secondary"></w-checkbox>
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
            <br />
            <p class="body bold">Pagination</p>
            <w-pagination v-model="page" :length="6" @click="navigate()"></w-pagination>
            <p>Pagina /test/{{ page }}</p>
        </w-card>
        <br />
    </div>
</template>

<script>
export default {
    data: () => ({
        form: {},
        page: 1
    })

    // PAGINACION, EJEMPLO
    // watch: {
    //     page() {
    //         this.$router.push(`/test/${this.page}`);
    //     }
    // }
};
</script>

<style lang="scss">
.test-container {
    max-width: 60%;
    margin: auto;
}
</style>