<template>
    <v-navigation-drawer permanent v-model="layoutStore.visibleSidebar">
    
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useLayoutStore} from '@/store/layout.ts'
const layoutStore = useLayoutStore();


</script>