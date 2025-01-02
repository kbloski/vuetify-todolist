<template>
    <v-container max-width="600px">
        <v-form v-model="valid" @submit.prevent="onSubmit">
            <v-text-field
                v-model="title"
                :counter="10"
                :rules="titleRules"
                len="20"
                label="Title"
                required
            ></v-text-field>
            <v-text-field
                v-model="description"
                :counter="10"
                :rules="descriptionRules"
                label="Description"
                required
            ></v-text-field>
            <v-radio-group label="Task priority" v-model="priority">
                <v-radio label="Hight" :value="EnumTaskPriority.HEIGHT"></v-radio>
                <v-radio label="Meidum" :value="EnumTaskPriority.MEDIUM"></v-radio>
                <v-radio label="Low" :value="EnumTaskPriority.LOW"></v-radio>
            </v-radio-group>
            <v-btn type="submit">Submit</v-btn>
        </v-form>
    </v-container>
</template>

<script lang="ts" setup>
import { EnumTaskPriority } from '@/enum/EnumTaskPriority';
import type { TypeTask } from '@/types/TypeTask';

const props = defineProps<{
    title?: TypeTask['title'],
    description?: TypeTask['description'],
    priority?: TypeTask['priority']
}>()


const emits = defineEmits<{
    (event: 'submit', formData: Omit<TypeTask, 'id'>) : void,
}>()


const valid = ref(false)
const title = ref(props.title );
const description = ref( props.description);
const priority = ref(props.priority ?? EnumTaskPriority.LOW)

function onSubmit(){
    if (
        !valid.value
        || !title.value

    ) return;

    emits('submit', {
        title: title.value,
        description: description.value,
        priority: priority.value,
    })

}


type Rule = boolean | string

const titleRules : ((value : string) => Rule)[]= [
    ( value ) => value ? true : 'Title is required',
]

const descriptionRules : ((value : string) => Rule)[] = []

</script>