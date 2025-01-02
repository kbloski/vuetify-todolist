<template>
    <v-container max-width="600px">
        {{ selectedTasks }}
        <v-list
            v-model:selected="selectedTasks"
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
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script lang="ts" setup>
import { EnumTaskPriority } from '@/enum/EnumTaskPriority';
import type { TypeTask } from '@/types/TypeTask';

const props = defineProps<{
    tasks: TypeTask[];
}>()

const selectedTasks = ref<TypeTask['id'][]>([]);


</script>