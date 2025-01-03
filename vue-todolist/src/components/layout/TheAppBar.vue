<template>
    <v-app-bar
      :order="layoutStore.appBarOrder"
      scroll-behavior="hide colapse elevate fade-image"
      flat
    >
        <v-app-bar-nav-icon @click="layoutStore.toggleVisibleSidebar"></v-app-bar-nav-icon>
        <v-app-bar-title>
            Your TODO List
        </v-app-bar-title>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { useLayoutStore } from '@/store/layout'
const layoutStore = useLayoutStore();

</script>