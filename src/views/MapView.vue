<script setup lang="ts">
import maplibregl, { LngLatBounds, Marker } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useRentalStore } from '@stores/rental';

const rentalStore = useRentalStore();
const router = useRouter();
const bounds: LngLatBounds = new LngLatBounds();

onMounted(() => {
  const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [0, 0],
    zoom: 1,
  });

  rentalStore.rentals.forEach(rental => {
    const [longitude, latitude] = rental.geometry.coordinates;
    bounds.extend({ lng: longitude, lat: latitude });
    new Marker().setLngLat([longitude, latitude]).addTo(map).getElement().addEventListener('click', () => {
      router.push({ name: 'rental', params: { id: rental.id }});
    });
  });

  map.fitBounds(bounds, {
    padding: { top: 50, bottom: 50, left: 50, right: 50 },
  });
});
</script>

<template>
  <h2 class="mb-5 text-center">Available Rentals on the Map</h2>
  <div id="map" class="w-full h-[600px]"></div>
</template>
