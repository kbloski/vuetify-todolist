<template>
    <v-dialog
      v-model="taskStore.isVisibleDialogUpdate"
      width="auto"
    >
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        class="bg-white"
        title="Update task in progress"
      >
        <task-form 
            @submit="onUpdate"
        ></task-form>

        <template v-slot:actions>
          <v-btn
            text="Close"
            @click="taskStore.toggleDialogUpdate"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { useTaskStore } from '@/store/task';

const props = defineProps<{  

}>()

const taskStore = useTaskStore();
const taskId = taskStore.indexSelectedTask;

function onUpdate( formdata : any ){
    const newTask = formdata;
    taskStore.updateTask(taskId, newTask )
    taskStore.toggleDialogUpdate()
}

</script>