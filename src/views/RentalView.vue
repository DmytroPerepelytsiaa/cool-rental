<script lang="ts" setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useRentalStore } from '@stores/rental';

  const rentalStore = useRentalStore();
  const route = useRoute();
  const rental = computed(() => rentalStore.getById(route.params.id as string));
</script>

<template>
  <main class="max-w-[900px] pt-20 p-5 min-h-screen mx-auto">
    <!-- TODO: add icon -->
    <button @click="$router.go(-1)" class="bg-blue-900 hover:bg-blue-800 py-2 px-4 rounded-lg text-white font-medium mb-5 transition-colors">Go Back</button>
    <img :src="rental?.image" :alt="'Rental Image of' + rental?.name" class="w-full h-[400px] object-cover mb-5 rounded-[10px]" />
    <h2 class="text-lg">{{ rental?.name }}</h2>
    <p class="text-slate-700 font-medium text-xs">{{ rental?.location }}</p>
    <span class="font-medium text-[10px] mb-5 block">{{ rental?.price }} USD month</span>
    <p class="text-sm">{{ rental?.description }}</p>
  </main>
</template>