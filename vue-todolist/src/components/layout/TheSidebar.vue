<template>
    <v-navigation-drawer permanent v-model="layoutStore.visibleSidebar">
        <v-list>
            <v-list-item 
                v-for="l in links"
                link
                :to="l.to"
                :key="l.name"
            > {{ l.name }}</v-list-item>
        </v-list>

        <v-list>
            <v-list-subheader>Settings</v-list-subheader>
            <v-list-item>
                <v-switch
                    v-model="layoutStore.appBarOrder"
                    false-value="0"
                    label="Change Header Style"
                    true-value="-1"
                    hide-details
                    inset
                ></v-switch>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useLayoutStore} from '@/store/layout.ts'
const layoutStore = useLayoutStore();

type TypeLink = {
    name: string;
    to: string;
}

const links : TypeLink[] = [
    {name: 'Home', to:'/' },
    {name: 'About Application', to:'/about-app' },
]

</script>