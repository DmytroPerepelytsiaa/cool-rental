<script setup lang="ts">
  import { computed, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import maplibregl, { Marker, type LngLatLike } from 'maplibre-gl';
  import { useRentalStore } from '@stores/rental';

  const rentalStore = useRentalStore();
  const router = useRouter();
  const route = useRoute();
  const rental = computed(() => rentalStore.getById(route.params.id as string));

  onMounted(() => {
    if (!rental.value) {
      router.push({ name: 'not-found' });
      return;
    }

    const center = rental.value.geometry.coordinates as LngLatLike;
    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://demotiles.maplibre.org/style.json',
      center,
      zoom: 1,
    });
    
    new Marker().setLngLat(center).addTo(map);
  });
</script>

<template>
  <!-- TODO: add icon -->
  <button @click="$router.go(-1)" class="bg-blue-900 hover:bg-blue-800 py-2 px-4 rounded-lg text-white font-medium mb-5 transition-colors">Go Back</button>
  <div v-if="rental">
    <img :src="rental.image" :alt="'Rental Image of' + rental.name" class="w-full h-[400px] object-cover mb-5 rounded-[10px]" />
    <h2 class="text-lg">{{ rental.name }}</h2>
    <p class="text-slate-700 font-medium text-xs">{{ rental.location }}</p>
    <span class="font-medium text-[10px] mb-5 block">{{ rental.price }} USD month</span>
    <p class="text-sm">{{ rental.description }}</p>
  </div>
  <div id="map" class="w-full h-[600px] mx-auto"></div>
</template>