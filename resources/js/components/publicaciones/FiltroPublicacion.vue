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
                <w-btn v-for="(op, i) in panel.options" :key="i" @click="set(op)">{{ op }}</w-btn>
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
                    options: ["Venta", "Alquiler", "Traspaso"]
                },
                {
                    value: false,
                    name: "publicaciones",
                    options: ["Publicado", "Vendido", "Borrador"]
                },
                {
                    value: false,
                    name: "borradores",
                    options: ["Opción 1", "Opción 2", "Opción 3"]
                }
            ],

            filtros: []
        };
    },
    methods: {
        set(op) {
            this.filtros.push(op);
        },
        unset(op) {
            const i = this.filtros.indexOf(op);
            this.filtros.splice(i, 1);
        }
    }
};
</script>

<style></style>
