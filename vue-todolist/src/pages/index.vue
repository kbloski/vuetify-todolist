<template>
  <task-form  @submit="onSubmitTask"/>
  <task-list :tasks="taskStore.tasks"/>
  <!-- <HelloWorld /> -->
</template>

<script lang="ts" setup>
import type { TypeTask } from '@/types/TypeTask';
import { useTaskStore } from '@/store/task';
import { EnumTaskPriority } from '@/enum/EnumTaskPriority';

const taskStore = useTaskStore()
taskStore.getLocalData();

function onSubmitTask(taskData : Omit<TypeTask, 'id'>){
  taskStore.addTask( taskData )
}
</script>
