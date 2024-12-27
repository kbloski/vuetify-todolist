<template>
    <div>
    <v-text-field 
        label="Add Task"
        v-on:keyup.enter="addTask"
        v-model="task.title"
  ></v-text-field>

  <lists-tasks  />
    </div>
</template>

<script setup>
import ListsTasks from './ListsTasks.vue';

import { reactive, ref} from 'vue';

import { useTaskStore } from '@/store/task';
const taskStore = useTaskStore();

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

</script>