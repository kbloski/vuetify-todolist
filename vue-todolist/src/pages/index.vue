<template>
  <task-form  @submit="onSubmitTask"/>
  <!-- <HelloWorld /> -->
</template>

<script lang="ts" setup>
import type { TypeTask } from '@/types/TypeTask';

function onSubmitTask(taskData : Omit<TypeTask, 'id'>){
}
</script>
