<template>
    <v-app-bar
      :order="order"
      image="https://picsum.photos/1920/1080?random"
      scroll-behavior="hide colapse elevate fade-image"
      density="compact"
      flat
    >
      <!-- title="Application bar" -->

        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-app-bar-title>
            Your TODO List
        </v-app-bar-title>

        <template v-slot:append>
            <v-switch
            v-model="order"
            false-value="0"
            label=""
            true-value="-1"
            hide-details
            inset
            ></v-switch>
        </template>
    </v-app-bar>

</template>

<script lang="ts" setup>
const order = ref(0)

</script>