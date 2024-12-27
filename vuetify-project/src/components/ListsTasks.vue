<template>
  <div class="mx-auto" max-width="400">
    <v-divider></v-divider>

    <v-list
      v-model:selected="tasksSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader>General</v-list-subheader>
      <v-list-item
        v-for="item, index in tasks"
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
         <template v-slot:append>
          

           <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn
                    color="primary"
                    variant="text"
                    icon="mdi-chevron-down"
                    v-bind="props"
                ></v-btn>
            </template>
            <v-list>
                <v-list-item
                value='edit'
                >
                    <v-list-item-title
                        @click="toggleDialog(index)"

                    >
                    Edit</v-list-item-title>
                </v-list-item>
                <v-list-item
                value='delete'
                >
                    <v-list-item-title
                        @click="toggleDialog(index)"
                    >Delete</v-list-item-title>
                </v-list-item>
            </v-list>
    </v-menu>
        </template>
      </v-list-item>
    </v-list>

    <DialogTask 
      :dialog="showDialogTaskFields" 
      @toggle="toggleDialog"
      :task="tasks[indexTaskSelected]"
    />
  </div>
</template>

<script setup>
import DialogTask from './DialogTask.vue';
import { inject, watch, ref } from 'vue';

const props = defineProps({
    tasks: Object
})

const tasksSelection = ref([]);
const indexTaskSelected = ref(0);

const showDialogTaskFields = ref(false);
function toggleDialog( index ){
    showDialogTaskFields.value = !showDialogTaskFields.value;
    if (index) 
        indexTaskSelected.value = index


}


</script>
