<template>
  <v-btn @click="changeSide">Go to learning side</v-btn>
  <HelloWorld />
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function changeSide(){
    router.push({
      path: '/learnSide'
    })
}

</script>
