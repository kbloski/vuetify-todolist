<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="props.dialog"
      min-width="400"
      max-width="600"
      persistent
    >
      <!-- <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps">
          Open Dialog
        </v-btn>
      </template> -->

      <v-card
        prepend-icon="mdi-map-marker"
        title="Edit tASK"
      >
        <v-card-text>
          <v-text-field 
            v-model="props.task.title"
            clearable 
            label="Title"
          ></v-text-field>
          <v-text-field 
            v-model="props.task.description"
            clearable 
            label="Description"
          ></v-text-field>
        </v-card-text>


        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="toggleEmit">
            OK
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue';

const props = defineProps({
    dialog: Boolean,
    task: Object
})

const emits = defineEmits(['toggle'])

function toggleEmit(){
    emits('toggle')
}


</script>