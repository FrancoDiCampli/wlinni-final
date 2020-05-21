<template>
  <!-- Paginas 30 - 36 - 39 - 41 -->
  <div>
    <div class="inmuebles-container">
      <div class="flex flex-row justify-around gap-8">
        <div class="w-full pb-16" v-if="filtrar">
          <div class="filter">
            <div class="filter-header">filtros</div>
            <div class="filter-body">
              <FiltrosMapa :panels="panels"></FiltrosMapa>
              <w-btn
                :fullwidth="true"
                color="secondary"
                :dark="true"
                @click="showFilters = false"
              >filtrar</w-btn>
            </div>
          </div>
        </div>
        <div class="w-full px-6" v-else>
          <w-card :shadow="false">
            <div class="float-filter w-4/12 lg:w-3/12 hidden md:block">
              <w-card>
                <template slot="header">
                  <p class="caption bold white-text">FILTROS APLICADOS</p>
                </template>

                <FiltrosMapa :panels="panels"></FiltrosMapa>
              </w-card>
            </div>
            <h1 class="subtitle bold text-center md:text-right">Listado de Inmuebles</h1>

            <div class="pb-2 lg:pb-0">
              <w-btn
                class="md:hidden"
                :dark="true"
                color="secondary"
                @click="showFilters = true"
              >filtrar</w-btn>
            </div>
            <br />

            <Mapas :center="center" :markers="markers"></Mapas>

            <br />
          </w-card>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import FiltrosMapa from "../../components/inmuebles/FiltrosMapa";
import Mapas from "../../components/mapas/Mapas";

export default {
  data: () => ({
    showFilters: false,
    windowWidth: window.innerWidth,
    center: { lat: -12.1122095, lng: -77.047945 },
    markers: [
      {
        position: { lat: -12.1221005, lng: -77.0315953 },
        image: "/images/departamentos/8.jpg",
        dir: "Calle los ficus Mz B lt. 10",
        description: " 19 unidades 1 a 3 dormitorio 45m a 97m techados",
        precio: "86,723",
        entrega: "Inmediata",
        condicion: "Preventa en planos"
      },
      {
        position: { lat: -12.1001099, lng: -77.0554858 },
        image: "/images/departamentos/7.jpg",
        dir: "Calle los ficus Mz B lt. 10",
        description: " 19 unidades 1 a 3 dormitorio 45m a 97m techados",
        precio: "90,232",
        entrega: "Inmediata",
        condicion: "Preventa en planos"
      },
      {
        position: { lat: -12.1206998, lng: -77.0347257 },
        image: "/images/departamentos/6.jpg",
        dir: " Calle los ficus Mz B lt. 10",
        description: "19 unidades 1 a 3 dormitorio 45m a 97m techados",
        precio: "90,232",
        entrega: "Inmediata",
        condicion: "Preventa en planos"
      }
    ],
    panels: [
      {
        value: false,
        name: "Tipo de Inmueble",
        options: ["Departamento", "Casa", "Oficina"],
        selectOption: null
      },
      {
        value: false,
        name: "Distrito / Ubicación",
        options: ["San Isidro", "Miraflores", "Santiago de Surco", "La Molina"],
        selectOption: null
      },
      {
        value: false,
        name: "Precio",
        options: ["S/ 2500", "S/ 1500", "S/ 3550", "S/ 5400"],
        selectOption: null
      },
      {
        value: false,
        name: "Dormitorios",
        options: ["Dormitorios 1", "Dormitorios 2", "Dormitorios 3"],
        selectOption: null
      },

      {
        value: false,
        name: "Area Total (m2)",
        options: ["Area 1", "Area 2", "Area 3"],
        selectOption: null
      },
      {
        value: false,
        name: "Cocheras",
        options: ["Cocheras 1", "Cocheras 2", "Cocheras 3"],
        selectOption: null
      },
      {
        value: false,
        name: "Antigüedad",
        options: ["Antigüedad 1", "Antigüedad 2", "Antigüedad 3"],
        selectOption: null
      },
      {
        value: false,
        name: "Estado",
        options: ["Estado 1", "Estado 2", "Estado 3"],
        selectOption: null
      }
    ]
  }),

  computed: {
    filtrar() {
      if (this.showFilters) {
        if (this.windowWidth >= 768) {
          this.showFilters = false;
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  },

  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },

  components: {
    FiltrosMapa,
    Mapas
  }
};
</script>

<style lang="scss" scoped>
.inmuebles-container {
  width: 95%;
  margin: auto;
  .float-filter {
    position: absolute;
    z-index: 4;
    left: 30px;
  }
}

@media (max-width: 764px) {
  .inmuebles-container {
    width: 100%;
  }
}

.filter {
  background-color: white;
  .filter-header {
    width: 100%;
    background-color: #ff7500;
    color: white;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 12px;
  }
  .filter-body {
    padding: 12px;
  }
}
</style>
