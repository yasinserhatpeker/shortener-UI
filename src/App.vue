<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class=" min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col"> 
   <Navbar/>
   <main class="grow">
  <router-view></router-view>
   </main>
  </div>
</template>