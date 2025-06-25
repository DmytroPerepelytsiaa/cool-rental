<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import RentalCard from '@components/RentalCard.vue';
  import { useRentalStore } from '@stores/rental';

  const rentalStore = useRentalStore();
  const searchFilter = ref('');
  const currentPage = ref(1);
  const totalPages = computed(() => Math.ceil(rentalStore.filteredRentals.length / 5));
  const paginatedRentals = computed(() => {
    const start = (currentPage.value - 1) * 5;
    const end = start + 5;
    return rentalStore.filteredRentals.slice(start, end);
  });

  watch(searchFilter, () => {
    rentalStore.setFilteredRentals(searchFilter.value);
    currentPage.value = 1;
  });
</script>

<template>
  <input v-model="searchFilter" type="text" placeholder="Search rentals..." class="w-full mb-5 p-2 border rounded" />
  <ul class="flex flex-col gap-5 mx-auto mb-5">
    <li v-for="rental in paginatedRentals" :key="rental.id">
      <router-link :to="`/rental/${rental.id}`">
        <RentalCard :rental="rental" />
      </router-link>
    </li>
  </ul>
  <div class="flex justify-center items-center gap-4">
    <button 
      v-for="page in totalPages" 
      :key="page" 
      :class="{ '!bg-blue-500': currentPage === page }" class="text-white px-4 py-2 rounded bg-slate-500 w-10 h-10"
      @click="currentPage = page" 
    >
      {{ page }}
    </button>
  </div>
</template>
