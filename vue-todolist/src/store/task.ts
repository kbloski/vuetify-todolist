// Utilities
import { EnumTaskPriority } from '@/enum/EnumTaskPriority'
import type { TypeTask } from '@/types/TypeTask'
import { defineStore } from 'pinia'

interface TaskStore {
  tasks: TypeTask[]
}

export const useTaskStore = defineStore('app', {
  state: () : TaskStore => ({
    tasks: [
      {
        id: 1,
        title: 'Tytuł #1',
        description: 'Podtytuł 1',
        priority: EnumTaskPriority.LOW
      }
    ]
  }),
  actions: {
    addTask( task : Omit<TypeTask, 'id'>){
      const id : TypeTask['id'] = Math.ceil(Math.random() * 100); 
      this.tasks.push( {
        id,
        ...task
      } )
    }
  }
})
