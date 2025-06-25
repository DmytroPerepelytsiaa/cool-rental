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
  <button @click="$router.go(-1)" class="bg-blue-900 hover:bg-blue-800 py-2 px-4 rounded-lg text-white font-medium mb-5 transition-colors flex gap-2 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <path fill="currentColor" fill-rule="evenodd" d="M4.297105,3.29289 L0.59,7 L4.297105,10.7071 C4.687635,11.0976 5.320795,11.0976 5.711315,10.7071 C6.101845,10.3166 6.101845,9.68342 5.711315,9.29289 L4.418425,8 L11.504215,8 C12.332615,8 13.004215,8.67157 13.004215,9.5 C13.004215,10.3284 12.332615,11 11.504215,11 L10.004215,11 C9.451935,11 9.004215,11.4477 9.004215,12 C9.004215,12.5523 9.451935,13 10.004215,13 L11.504215,13 C13.437215,13 15.004215,11.433 15.004215,9.5 C15.004215,7.567 13.437215,6 11.504215,6 L4.418425,6 L5.711315,4.70711 C6.101845,4.31658 6.101845,3.68342 5.711315,3.29289 C5.320795,2.90237 4.687635,2.90237 4.297105,3.29289 Z"/>
    </svg>
    Go Back
  </button>
  <div v-if="rental">
    <img :src="rental.image" :alt="'Rental Image of' + rental.name" class="w-full h-[400px] object-cover mb-5 rounded-[10px]" />
    <h2 class="text-lg">{{ rental.name }}</h2>
    <p class="text-slate-700 font-medium text-xs">{{ rental.location }}</p>
    <span class="font-medium text-[10px] mb-5 block">{{ rental.price }} USD month</span>
    <p class="text-sm">{{ rental.description }}</p>
  </div>
  <div id="map" class="w-full h-[600px] mx-auto"></div>
</template>