<script setup lang="ts">
import { ref } from 'vue';

const isAuthenticated = ref(false)
</script>

<template>
    <nav class=" bg-blue-400  border- b border-gray-300">
        <div class=" max-w-7xl p-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-12">
               <div class="shrink-0">
                  <router-link to="/" class="text-2xl font-bold text-gray-900 text-shadow-cyan-800">
                    Monetiqua
                  </router-link> 
               </div>

               <div class="hidden md:flex flex-1 justify-center">
                 <router-link to="/faq" class=" text-black  hover:text-gray-800 mx-2 font-medium transition">
                    FAQ
                 </router-link>
                  <router-link to="/resources" class=" text-black  hover:text-gray-800 mx-2 font-medium transition">
                    Resources
                 </router-link>
                  <router-link to="/resources" class=" text-black  hover:text-gray-800 mx-2 font-medium transition">
                    Features
                 </router-link>
               </div>

               <div class="flex items-center space-x-4">
                <template v-if="!isAuthenticated">
              <router-link to="/login" class="text-black hover:text-gray-900 font-bold transition">
                    <button class="text-blue-500 hover:text-black font-bold transition cursor-pointer p-2 rounded-2xl bg-amber-50">Log In</button>
             </router-link>
              <router-link to="/login" class="text-black hover:text-gray-900 font-bold transition">
                  Sign Up
             </router-link>
            </template>

            <template v-else>
            <router-link to="dashboard" class="text-black hover:text-gray-900 font-bold transition">
               Dashboard
            </router-link>

           <button class="text-blue-500 hover:text-black font-bold transition cursor-pointer p-2 rounded-2xl bg-amber-50">
              Log Out
            </button>
            
            </template>
             </div>
              </div>
        </div>
      
    </nav>
</template>