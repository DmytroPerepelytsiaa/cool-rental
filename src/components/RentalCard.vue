<script lang="ts" setup>
import { defineProps } from 'vue';
import type { Rental } from '@models/rental';

const props = defineProps<{
  rental: Rental,
}>();

</script>

<template>
  <div class="flex justify-between gap-8 border border-black rounded-lg h-64 p-5 pl-10 hover:scale-[1.01] transition-transform duration-500 cursor-pointer">
    <div class="overflow-hidden">
      <h2 class="text-lg">{{ props.rental.name }}</h2>
      <p class="text-slate-700 font-medium text-xs">{{ props.rental.location }}</p>
      <span class="font-medium text-[10px] mb-5 block">{{ props.rental.price }} USD month</span>
      <p class="text-sm">{{ props.rental.description }}</p>
    </div>
    <img :src="props.rental.image" :alt="`Image of ${props.rental.name}`" class="hidden md:block w-[216px] h-[216px] object-cover rounded-md">
  </div>
</template>