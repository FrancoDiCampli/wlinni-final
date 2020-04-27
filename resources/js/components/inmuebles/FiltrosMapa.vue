<template>
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
    name: "FiltroInmueble",
    data() {
        return {
            filtros: [],
            panels: [
                {
                    value: false,
                    name: "Tipo de Inmueble",
                    options: [
                        "Departamento (600)",
                        "Casa (250)",
                        "Oficinas (800)",
                        "Locales Comerciales (300)",
                        "Terrenos (150)"
                    ]
                },
                {
                    value: false,
                    name: "Distrito / Ubicación",
                    options: [
                        "Lima (600)",
                        "Callao (250)",
                        "Trujillo (800)",
                        "Piura (300)",
                        "Arequipa (150)"
                    ]
                },
                {
                    value: false,
                    name: "Precio",
                    options: ["S/ 2500", "S/ 1500", "S/ 3550", "S/ 5400"]
                },
                {
                    value: false,
                    name: "Dormitorios",
                    options: [
                        "1 Dormitorio (600)",
                        "2 Dormitorio (250)",
                        "3 Dormitorio (800)",
                        "4 Dormitorio (300)",
                        "5 Dormitorio (150)"
                    ]
                },

                {
                    value: false,
                    name: "Area Toral (m2)",
                    options: ["120m"]
                },
                {
                    value: false,
                    name: "Cocheras",
                    options: ["Opción 1", "Opción 2", "Opción 3"]
                },
                {
                    value: false,
                    name: "Antigüedad",
                    options: ["Opción 1", "Opción 2", "Opción 3"]
                },
                {
                    value: false,
                    name: "Estado",
                    options: ["Opción 1", "Opción 2", "Opción 3"]
                }
            ]
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
