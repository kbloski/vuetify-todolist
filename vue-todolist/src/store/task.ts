// Utilities
import { EnumTaskPriority } from '@/enum/EnumTaskPriority'
import type { TypeTask } from '@/types/TypeTask'
import { defineStore } from 'pinia'

interface TaskStore {
  tasks: TypeTask[]
}

export const useTaskStore = defineStore('taskStore', {
  state: () : TaskStore => ({
    tasks: [ ]
  }),
  actions: {
    addTask( task : Omit<TypeTask, 'id'>){
      const id : TypeTask['id'] = Math.ceil(Math.random() * 10000); 
      this.tasks.push( {
        id,
        ...task
      } )

      this.saveLocalData()
    },

    deleteTask( taskId : TypeTask['id']){
      this.tasks = this.tasks.filter( task => task.id !== taskId)
      this.saveLocalData()
    },

    getLocalData(){
      const items = localStorage.getItem('tasks');
      this.tasks = !items ? [] : JSON.parse( items );
    },
    saveLocalData(){
      localStorage.setItem('tasks', JSON.stringify( this.tasks ))
    }
  },

})
