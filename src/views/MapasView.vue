<template>
  <l-map style="height: 350px" :zoom="zoom" :center="center">
  <l-control-layers position="topright"></l-control-layers>
  <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        layer-type="base"/>
  </l-map>
  </template>
  
  <script>
  import {LMap, LTileLayer, LControlLayers} from 'vue2-leaflet';
  
  export default {
    components: {
      LMap,
      LTileLayer,
      LControlLayers
    },
    data () {
      return {
        zoom: 12.5,
        center: [-17.96973, -67.08986],
        tileProviders: [
          {
            name: 'OpenStreetMap',
            visible: true,
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          },
          {
            name: 'OpenTopoMap',
            visible: true,
            url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
          },
          {
            name: 'Google',
            visible: true,
            url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
          },
        ],
      };
    }
  }
  </script>