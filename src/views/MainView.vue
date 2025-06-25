<script setup lang="ts">
  import { RENTAL_MOCKS } from '@mocks/rentals';
  import RentalCard from '@components/RentalCard.vue';

  const rentalMocks = RENTAL_MOCKS;
</script>

<template>
  <main class="pt-20 p-5 min-h-screen">
    <ul class="flex flex-col gap-5 mx-auto max-w-[900px]">
      <li v-for="rental in rentalMocks" :key="rental.id">
        <RentalCard :rental="rental" />
      </li>
    </ul>
  </main>
</template>
