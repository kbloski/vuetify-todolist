<template>
    <v-container max-width="600px">
        <v-list
            v-model:selected="selectedItems"
            lines="three"
            select-strategy="leaf"
        >
            <v-list-subheader>Task List</v-list-subheader>
            <v-list-item
                v-for="task in tasks"
                :key="task.id"
                :title="task.title"
                :subtitle="task.description"
                :value="task.id"
                :class="{
                    'bg-red' : task.priority === EnumTaskPriority.HEIGHT,
                    'bg-warning' : task.priority === EnumTaskPriority.MEDIUM,
                    'bg-success' : task.priority === EnumTaskPriority.LOW
                }"
            >
                <template v-slot:prepend="{ isSelected }">
                <v-list-item-action start>
                        <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
                    </v-list-item-action>
                </template>

                <template v-slot:append>
                    <v-menu
                    >
                    <template v-slot:activator="{ props }">
                        <v-btn
                            color="grey-lighten-1"
                            icon="mdi-information"
                            v-bind="props"
                            variant="text"
                        ></v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(item, index) in items"
                            :key="index"
                        >
                        <v-list-item-title>
                            <v-btn
                                @click="item.onclick( task.id )"
                            >{{ item.title }}</v-btn>
                        </v-list-item-title>
                        </v-list-item>
                    </v-list>
                    </v-menu>
                </template>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script lang="ts" setup>
import { EnumTaskPriority } from '@/enum/EnumTaskPriority';
import type { TypeTask } from '@/types/TypeTask';
import { useTaskStore } from '@/store/task';


const taskStore = useTaskStore()
const props = defineProps<{
    tasks: TypeTask[];
}>()

// Save selected tasks
const selectedItems = ref(taskStore.selectedTasks);
watch( selectedItems, () => {
    taskStore.selectedTasks = selectedItems.value;
    taskStore.saveLocalData()
})

const items : {
    title: string, 
    onclick: ( id : TypeTask['id']) => void
}[]= 
[
    { title: 'Update', onclick: ( id ) => {
        console.log( id )
    }},
    { title: 'Delete', onclick: ( id ) => { 
        taskStore.deleteTask( id ) } 
    },
]


</script>