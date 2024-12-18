<template>
    <v-app-bar 
        class="mx-auto"
        scroll-behavior="hide collapse elevate fade-image"
        scroll-threshold="20"
        color="grey-lighten-2" 
        image="/logo.png"
    >
        <v-app-bar-nav-icon @click="toggleVisible"></v-app-bar-nav-icon>
        <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="visible"
      color="grey-darken-2"
      permanent
    >
        <v-list-item title="Menu aplikacji" subtitle="Podtytuł"></v-list-item>
        <v-divider></v-divider>
        <v-list-item link title="Link 1"></v-list-item>
    </v-navigation-drawer> 
</template>

<script setup>
// defineProps({})
import { ref } from 'vue';

const visible = ref(false);
function toggleVisible(){
    visible.value = !visible.value
}

</script>