<template>
  <v-layout class="rounded rounded-md">
    <the-sidebar />
    <the-app-bar />

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>

</script>

