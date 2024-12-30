// Utilities
import type { TypeTask } from '@/types/TypeTask'
import { defineStore } from 'pinia'

interface TaskStore {
  tasks: TypeTask[]
}

export const useTaskStore = defineStore('app', {
  state: () : TaskStore => ({
    tasks: []
  }),
})
