// Utilities
import { EnumTaskPriority } from '@/enum/EnumTaskPriority'
import type { TypeTask } from '@/types/TypeTask'
import { defineStore } from 'pinia'

interface TaskStore {
  tasks: TypeTask[],
  selectedTasks: TypeTask['id'][]
}

export const useTaskStore = defineStore('taskStore', {
  state: () : TaskStore => ({
    tasks: [ ],
    selectedTasks: []
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

    // selectTask( taskId: TypeTask['id']){
    //   this.selectedTasks.push( taskId );
    //   this.saveLocalData()
    // },

    // unselectTask( taskId: TypeTask['id']){
    //   this.selectedTasks = this.selectedTasks.filter( id => id != taskId);
    //   this.saveLocalData()
    // },



    getLocalData(){
      const itemsTasks = localStorage.getItem('tasks');
      this.tasks = !itemsTasks ? [] : JSON.parse( itemsTasks );
      
      const itemsSelectedTasks = localStorage.getItem("selected-tasks");
      this.selectedTasks = !itemsSelectedTasks ? [] : JSON.parse( itemsSelectedTasks );
    },

    saveLocalData(){
      localStorage.setItem('tasks', JSON.stringify( this.tasks ))
      localStorage.setItem('selected-tasks', JSON.stringify( this.selectedTasks))
    }
  },
})
