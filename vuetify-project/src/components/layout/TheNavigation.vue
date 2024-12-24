<template>
    <v-navigation-drawer
        v-model="visible"
        color="grey-darken-2"
        permanent
        @click="toggleVisible"
    >
        <!-- @click="toggleVisible" -->
        <v-list>
            <v-list-item
                prepend-avatar="/logo.png"
                title="Kamil Błoński"
                subtitle="To Do List"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list>
            <v-list-item v-for="link in links" link :title="link.text" :to="link.path">
                <template v-slot:prepend>
                    <v-icon :icon="link.icon"></v-icon>
                </template>
                <template v-slot:activator="{ props }">
                    v-bind
                </template>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar
        class="mx-auto elevation-7"
        scroll-behavior="hide collapse elevate fade-image"
        scroll-threshold="20"
        color="white"
    >
        <v-app-bar-nav-icon @click="toggleVisible"></v-app-bar-nav-icon>
        <v-app-bar-title>To Do List</v-app-bar-title>
    </v-app-bar>
</template>

<script setup>
// defineProps({})
import { ref } from "vue";

const visible = ref(false);
function toggleVisible() {
    visible.value = !visible.value;
}

const links = [
    { text: "Home", icon: "mdi-folder", path: "/" },
    { text: "About Me", icon: "mdi-star", path: "/about-me" },
];
</script>
