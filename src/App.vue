<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header class="text-white flex justify-between items-center px-10 bg-slate-800 h-16 fixed w-full">
    <!-- TODO: add logo -->
    <h1>CoolRental</h1>
    <nav class="flex gap-8">
      <router-link to="/" class="font-medium hover:text-blue-400 transition-colors" active-class="text-blue-400 border-b-2 border-blue-400" exact>Main</router-link>
      <router-link to="/map" class="font-medium hover:text-blue-400 transition-colors" active-class="text-blue-400 border-b-2 border-blue-400" exact>Map</router-link>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
