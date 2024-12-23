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

    <v-navigation-drawer v-model="visible" color="grey-darken-2" permanent>
        <!-- @click="toggleVisible" -->
        <v-list>
            <v-list-item
                prepend-avatar="/logo.png"
                title="Kamil Błoński"
                subtitle="Todo List"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list>
            <v-list-item
                v-for="link in links"
                link
                :title="link.text"
                :to="link.path"
                active-color="white"
                active-class="akctive-test-item"
            >
                <template v-slot:prepend>
                    <v-icon :icon="link.icon"></v-icon>
                </template>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
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

<style>
.akctive-test-item {
    color: red;
    position: absolute;
    transform: translateX(20px);
    transition: all 0.3s ease;
}
</style>