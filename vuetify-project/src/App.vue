<template>
  <v-app ref="app" class="rounded rounded-md">
    <the-navigation></the-navigation>
    

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view></router-view>
    </v-main>

    <the-footer></the-footer>
  </v-app>
</template>

// <script setup>
import TheNavigation from './components/layout/TheNavigation.vue';
import TheFooter from './components/layout/TheFooter.vue';
//   //

  import { useLayout } from 'vuetify'
  
  // getC

  const Child = {
    setup(props, ctx) {
      const { getLayoutItem } = useLayout()

      function print(key) {
        alert(JSON.stringify(getLayoutItem(key), null, 2))
      }

      return { print }
    },
  }
</script>
