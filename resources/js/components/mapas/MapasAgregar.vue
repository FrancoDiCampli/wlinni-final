<template>
  <div class="map-new">
    <div class="w-full flex flex-row" style="padding: 10px" id="myAutocomplete">
      <div class="flex flex-row justify-start items-center autocomplete-container">
        <gmap-autocomplete class="autocomplete-input" @place_changed="setPlace"></gmap-autocomplete>
        <w-icon icon="address-secondary" h="16px"></w-icon>
      </div>
      <div class="autocomplete-btn">
        <w-btn @click="search()" :rounded="true" :dark="true">Buscar</w-btn>
      </div>
    </div>

    <gmap-map
      ref="mapRef"
      :center="center"
      :zoom="14"
      :options="mapOptions"
      style="width: 100%; height: 600px;"
      @click="addMaker"
    >
      <gmap-marker :icon="markerOptions" :position="marker.position"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  data: () => ({
    center: { lat: -12.1122095, lng: -77.047945 },
    marker: {},
    mapOptions: {
      mapTypeControl: false,
      streetViewControl: false
    },
    currentPlace: null,
    markerOptions: {
      url: "/images/pin.png",
      size: { width: 22.5, height: 31.5, f: "px", b: "px" },
      scaledSize: { width: 22.5, height: 31.5, f: "px", b: "px" }
    },

    infoWindowPos: {
      lat: 0,
      lng: 0
    },
    infoWinOpen: false,

    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35
      }
    },
    card: {},

    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35
      }
    },
    card: {},
    dir: ""
  }),

  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },

    search() {
      if (this.currentPlace) {
        this.center = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
      }
    },

    // addMaker(e) {
    //   const marker = {
    //     lat: e.latLng.lat(),
    //     lng: e.latLng.lng()
    //   };
    //   this.marker = { position: marker };
    //   this.center = marker;
    //   this.currentPlace = null;

    addMaker(e) {
      let marker = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      this.marker = { position: marker };
      this.center = marker;
      this.currentPlace = null;

      this.searchAddress(e);
    },

    searchAddress(e) {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        {
          location: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        },
        results =>
          this.$emit("eventAddress", {
            coordenadas: this.marker,
            direccion: results[0].formatted_address
          })
      );
    },

    geolocate() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style lang="scss">
.map-new {
  .autocomplete-container {
    position: relative;
    height: auto;
    min-height: 38px;
    width: 332px;
    background-color: white;
    border: 2px solid #ff7500;
    border-radius: 21px;
    padding: 0px 19px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .autocomplete-input {
      width: 90%;
      outline: none;
      font-size: 16px;
    }
  }

  .autocomplete-btn {
    .btn {
      margin: 0px 12px;
      height: 38px;
      padding: 0px 19px;
    }
  }
}

.pac-container {
  margin-top: 16px !important;
  margin-left: -21px !important;
  width: 332px !important;
  border-radius: 21px !important;
  &::after {
    display: none !important;
  }
  .pac-item {
    padding: 12px 32px !important;
    font-size: 13px !important;
    .pac-icon,
    .pac-icon-marker {
      display: none !important;
    }
  }
}
</style>
