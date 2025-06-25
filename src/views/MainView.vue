<script setup lang="ts">
  import { computed, ref } from 'vue';
  import RentalCard from '@components/RentalCard.vue';
  import { useRentalStore } from '@stores/rental';

  const rentalStore = useRentalStore();
  const searchFilter = ref('');
  const filteredRentals = computed(() => {
    return rentalStore.rentals.filter(rental => {
      const location = rental.location.toLowerCase();
      const name = rental.name.toLowerCase();
      const search = searchFilter.value.toLowerCase().trim();

      return location.includes(search) || name.includes(search);
    });
  });
</script>

<template>
  <main class="max-w-[900px] pt-20 p-5 min-h-screen">
    <input v-model="searchFilter" type="text" placeholder="Search rentals..." class="w-full mb-5 p-2 border rounded" />
    <ul class="flex flex-col gap-5 mx-auto">
      <li v-for="rental in filteredRentals" :key="rental.id">
        <router-link :to="`/rental/${rental.id}`">
          <RentalCard :rental="rental" />
        </router-link>
      </li>
    </ul>
  </main>
</template>
