<template>
    <v-text-field 
        label="Add Task"
        v-on:keyup.enter="addTask"
        v-model="task.title"
  ></v-text-field>

  <lists-tasks 
    :tasks="tasks"
  />
</template>

<script setup>
import ListsTasks from './ListsTasks.vue';
import { provide, reactive, ref} from 'vue';

const tasksSelection = ref([]);
provide('tasksSelection', tasksSelection)

const tasks =  ref([
        { 
            value: 'notifications', 
            title: 'Task Vue 1', 
            description: 'Notify me about updates to apps or games that I downloaded' 
        },
        { 
            value: 'documentaction', 
            title: 'Learn documantation', 
            description: 'Notify me about updates to apps or games that I downloaded' 
        },
])

const task = reactive({
    title: '',
    description: ''
})

function addTask(){
    tasks.value.push({
        value: Math.random(),
        title: task.title,
        description: task.description,
    })

    task.title = '';
    task.description = '';
}
</script>