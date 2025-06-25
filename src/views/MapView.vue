<script setup lang="ts">
import maplibregl, { LngLatBounds, Marker } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { onMounted } from 'vue';
import { useRentalStore } from '@stores/rental';

const rentalStore = useRentalStore();
const coordinates: LngLatBounds = new LngLatBounds();

onMounted(() => {
  const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [0, 0],
    zoom: 3,
  });

  rentalStore.rentals.forEach(rental => {
    const [longitude, latitude] = rental.geometry.coordinates;
    coordinates.extend({ lng: longitude, lat: latitude });
    new Marker().setLngLat([longitude, latitude]).addTo(map);
  });

  map.fitBounds(coordinates, {
    padding: { top: 50, bottom: 50, left: 50, right: 50 },
  });
});
</script>

<template>
  <h2 class="mb-5 text-center">Available Rentals on the Map</h2>
  <div id="map" class="w-full h-[600px]"></div>
</template>
