import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task',
    {
    state: () => {
        return {
            indexTaskSelected: 0,
            tasks: [
                    { 
                        value: 'notifications', 
                        title: 'Task Vue 1', 
                        description: 'Notify me about updates to apps or games that I downloaded' 
                    },
                    { 
                        value: 'documentaction', 
                        title: 'Learn documantation', 
                        description: 'Notify me about updates to apps or games that I downloaded' 
                    },
            ]
        }
    },
    actions: {
        deleteTask(){
            if (this.indexTaskSelected != null)
                this.tasks.splice( this.indexTaskSelected, 1)
        },
        addTask( task ){
            this.tasks.push( task)
        }
    }
})

