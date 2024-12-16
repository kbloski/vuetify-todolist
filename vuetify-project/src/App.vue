<template>
  <v-app>
    <the-navigation></the-navigation>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import TheNavigation from './components/layout/TheNavigation.vue';
  //
</script>
