<template>
  <!--

        MB-listado-de-inmueble-1 (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/fc48a50e-e77f-46ea-ad97-0ff5901c07e4/MB-listado-de-inmueble-1)

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
        <w-btn v-for="(op, i) in panel.options" :key="i" @click="panel.selectOption = op">{{ op }}</w-btn>
      </w-panel>
    </div>
  </div>
</template>

<script>
export default {
  name: "FiltroPublicacion",
  props: ["panels"],
  data() {
    return {
      //   panels: [
      //     {
      //       value: false,
      //       name: "Tipo de Inmueble",
      //       options: ["Departamento", "Casa", "Oficina"],
      //       selectOption: null
      //     },
      //     {
      //       value: false,
      //       name: "Distrito / Ubicación",
      //       options: [
      //         "San Isidro",
      //         "Miraflores",
      //         "Santiago de Surco",
      //         "La Molina"
      //       ],
      //       selectOption: null
      //     },
      //     {
      //       value: false,
      //       name: "Precio",
      //       options: ["S/ 2500", "S/ 1500", "S/ 3550", "S/ 5400"],
      //       selectOption: null
      //     },
      //     {
      //       value: false,
      //       name: "Dormitorios",
      //       options: ["Dormitorios 1", "Dormitorios 2", "Dormitorios 3"],
      //       selectOption: null
      //     },
      //     {
      //       value: false,
      //       name: "Area Total (m2)",
      //       options: ["Area 1", "Area 2", "Area 3"],
      //       selectOption: null
      //     },
      //     {
      //       value: false,
      //       name: "Cocheras",
      //       options: ["Cocheras 1", "Cocheras 2", "Cocheras 3"],
      //       selectOption: null
      //     },
      //     {
      //       value: false,
      //       name: "Antigüedad",
      //       options: ["Antigüedad 1", "Antigüedad 2", "Antigüedad 3"],
      //       selectOption: null
      //     },
      //     {
      //       value: false,
      //       name: "Estado",
      //       options: ["Estado 1", "Estado 2", "Estado 3"],
      //       selectOption: null
      //     }
      //   ]
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
      const find = this.panels.find(element => element.selectOption == op);

      const index = this.panels.indexOf(find);
      this.panels[index].selectOption = null;
    }
  }
};
</script>

<style></style>
