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
                prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
                subtitle="example@google.com"
                title="Kamil Błoński"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list-item link title="Home" to="/">
            <template v-slot:prepend>
                <v-icon :icon="'mdi-folder'"></v-icon>
            </template>
        </v-list-item>
        <v-list-item link title="About Me" to="/about-me">
            <template v-slot:prepend>
                <v-icon icon="mdi-star"></v-icon>
            </template>
        </v-list-item>
    </v-navigation-drawer>
</template>

<script setup>
// defineProps({})
import { ref } from "vue";

const visible = ref(false);
function toggleVisible() {
    visible.value = !visible.value;
}

const items = [{ text: "My Files", icon: "mdi-folder" }];
</script>
