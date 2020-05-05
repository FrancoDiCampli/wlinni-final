<template>
    <!-- 
    
        MB-listado-de-publicacion-1 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/e6046d22-e0ea-4f7e-9b58-31ded648428e/MB-listado-de-publicacion-1)

    -->
    <div>
        <div class="flex flex-row flex-wrap" v-if="filtros.length > 0">
            <w-btn
                :small="true"
                :rounded="true"
                color="secondary"
                :dark="true"
                v-for="(filtro, i) in filtros"
                :key="i"
                @click="unset(filtro)"
            >{{ filtro }} X</w-btn>
        </div>
        <div v-for="(panel, i) in panels" :key="i">
            <w-panel :header="panel.name" v-model="panel.value">
                <w-btn
                    v-for="(op, i) in panel.options"
                    :key="i"
                    @click="panel.selectOption = op"
                >{{ op }}</w-btn>
            </w-panel>
        </div>
    </div>
</template>

<script>
export default {
    name: "FiltroPublicacion",
    data() {
        return {
            panels: [
                {
                    value: false,
                    name: "operaciones",
                    options: ["Venta", "Alquiler", "Traspaso"],
                    selectOption: null
                },
                {
                    value: false,
                    name: "publicaciones",
                    options: ["Publicado", "Vendido", "Borrador"],
                    selectOption: null
                },
                {
                    value: false,
                    name: "borradores",
                    options: ["Opción 1", "Opción 2", "Opción 3"],
                    selectOption: null
                }
            ]
        };
    },

    computed: {
        filtros() {
            const filtrosArray = [];
            for (let i = 0; i < this.panels.length; i++) {
                if (this.panels[i].selectOption) {
                    filtrosArray.push(this.panels[i].selectOption);
                }
            }
            return filtrosArray;
        }
    },

    methods: {
        unset(op) {
            const find = this.panels.find(
                element => element.selectOption == op
            );

            const index = this.panels.indexOf(find);
            this.panels[index].selectOption = null;
        }
    }
};
</script>

<style></style>
