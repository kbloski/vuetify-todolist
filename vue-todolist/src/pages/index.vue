<template>
  <task-form  @submit="onSubmitTask"/>
  <task-list :tasks="taskStore.tasks"/>
</template>

<script lang="ts" setup>
import type { TypeTask } from '@/types/TypeTask';
import { useTaskStore } from '@/store/task';

const taskStore = useTaskStore()
taskStore.getLocalData();

function onSubmitTask(taskData : Omit<TypeTask, 'id'>){
  taskStore.addTask( taskData )
}
</script>
