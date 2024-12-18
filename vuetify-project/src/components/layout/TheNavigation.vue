<template>
    <v-app-bar 
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
    >
        <v-list-item title="Menu aplikacji" subtitle="TodoList"></v-list-item>
        <v-divider></v-divider>
        <v-list-item link title="List Item 1"></v-list-item>
        <v-list-item link title="List Item 2"></v-list-item>
        <v-list-item link title="List Item 3"></v-list-item>
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