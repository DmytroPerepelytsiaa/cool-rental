<script setup lang="ts">
import { RouterView } from 'vue-router';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

<template>
  <header class="text-white z-10 flex justify-between items-center px-10 bg-slate-800 h-16 fixed w-full">
    <router-link to="/" class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M23.8108 8.01412H15.7432V0H8.01165C8.01165 4.42738 4.42601 8.01412 0 8.01412V15.748H8.01165V23.7622H15.7432C15.7432 19.3348 19.3848 15.748 23.8108 15.748V8.01412Z" fill="url(#paint0_linear_73_5082)"/>
        <defs>
          <linearGradient id="paint0_linear_73_5082" x1="14.5" y1="5" x2="21" y2="16" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E9D5FF"/>
            <stop offset="1" stop-color="#D9F99D"/>
          </linearGradient>
        </defs>
      </svg>
      <h1>CoolRental</h1>
    </router-link>
    <nav class="flex gap-8">
      <router-link to="/" class="font-medium hover:text-blue-400 transition-colors" active-class="text-blue-400 border-b-2 border-blue-400" exact>Main</router-link>
      <router-link to="/map" class="font-medium hover:text-blue-400 transition-colors" active-class="text-blue-400 border-b-2 border-blue-400" exact>Map</router-link>
    </nav>
  </header>

  <main class="max-w-[900px] pt-20 p-5 min-h-screen mx-auto">
    <RouterView />
  </main>
</template>

<style scoped>
</style>
