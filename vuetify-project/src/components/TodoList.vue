<template>
    <div>
    <v-text-field 
        label="Add Task"
        v-on:keyup.enter="addTask"
        v-model="task.title"
  ></v-text-field>
    <!-- <v-text-field 
        label="Description"
        v-on:keyup.enter="addTask"
        v-model="task.title"
  ></v-text-field> -->

  <lists-tasks 
    :tasks="tasks"
  />
    </div>
</template>

<script setup>
import ListsTasks from './ListsTasks.vue';

import { computed, provide, reactive, ref} from 'vue';
import { useTaskStore } from '@/store/task';

const taskStore = useTaskStore();
const tasks = computed( () => taskStore.tasks);
// const tasks =  ref([
//         { 
//             value: 'notifications', 
//             title: 'Task Vue 1', 
//             description: 'Notify me about updates to apps or games that I downloaded' 
//         },
//         { 
//             value: 'documentaction', 
//             title: 'Learn documantation', 
//             description: 'Notify me about updates to apps or games that I downloaded' 
//         },
// ])

const task = reactive({
    title: '',
    description: ''
})

function addTask(){
    taskStore.addTask( {
        title: task.title,
        description: task.description
    } )

    task.title = '';
    task.description = '';
}

function deleteTask( index ){
    taskStore.deleteTask( index )
}

provide('deleteTask', deleteTask)
</script>