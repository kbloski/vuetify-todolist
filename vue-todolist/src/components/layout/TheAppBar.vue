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
        <!-- <template v-slot:append>
            <v-switch
            v-model="layoutStore.appBarOrder"
            false-value="0"
            label=""
            true-value="-1"
            hide-details
            inset
            ></v-switch>
        </template> -->
    </v-app-bar>
</template>

<script lang="ts" setup>
import { useLayoutStore } from '@/store/layout.ts'
const layoutStore = useLayoutStore();

</script>