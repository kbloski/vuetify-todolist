<template>
  <v-card class="mx-auto" max-width="400">
  <v-text-field 
    label="Add Task"
    v-on:keyup.enter="addTask"
    v-model="task.title"
  ></v-text-field>
    <v-divider></v-divider>

    <v-list
      v-model:selected="tasksSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader>General</v-list-subheader>
      <v-list-item
        v-for="item in tasks"
        :key="item.value"
        :subtitle="item.description"
        :title="item.title"
        :value="item.value"
      >
        <template v-slot:prepend="{ isSelected }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { reactive, ref} from 'vue';

const tasksSelection = ref([]);
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
