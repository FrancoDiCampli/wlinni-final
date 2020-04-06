<template>
  <div>
    <div class="inmuebles-container">
      <div class="flex flex-row justify-around gap-8">
        <div class="w-3/12 hidden lg:block">
          <div>
            <w-card :shadow="false">
              <template slot="header">
                <p class="caption bold white-text">FILTROS</p>
              </template>

              <FiltroInmueble></FiltroInmueble>
            </w-card>
          </div>
        </div>

        <div class="sm:w-full lg:w-9/12 px-6 bg-white rounded-lg p-10 mx-5">
          <div>
            <h1 class="title bold">Listado de Inmuebles</h1>
            <div class="map-container">
              <gmap-map
                ref="mapRef"
                :center="center"
                :zoom="12"
                :options="mapOptions"
                style="width:100%;  height: 400px;"
              >
                <gmap-marker
                  :key="index"
                  :icon="markerOptions"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  @click="center=m.position"
                ></gmap-marker>
              </gmap-map>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
// import FiltroMapa from "./filtros/FiltrosMapa.vue";
import FiltroInmueble from "./FiltroInmueble.vue";
export default {
  data() {
    return {
      center: { lat: -12.1122095, lng: -77.047945 },
      markers: [
        {
          position: { lat: -12.1221005, lng: -77.0315953 },
          title: "Miraflores"
        },
        {
          position: { lat: -12.1001099, lng: -77.0554858 },
          title: "San Isidro"
        },
        {
          position: { lat: -12.1206998, lng: -77.0347257 },
          title: "Santiago de Surco"
        }
      ],
      places: [],
      currentPlace: null,
      mapOptions: {
        mapTypeControl: false
      },

      markerOptions: {
        url: "images/key-hole.png",
        size: { width: 20, height: 35, f: "px", b: "px" },
        scaledSize: { width: 10, height: 20, f: "px", b: "px" }
      },

      filtrar: false
    };
  },
  components: { FiltroInmueble }
};
</script>

<style></style>
