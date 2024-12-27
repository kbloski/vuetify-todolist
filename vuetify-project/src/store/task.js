import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task',
    {
    state: () => {
        return {
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
        deleteTask( index ){
            this.tasks.splice(index, 1)
        },

        addTask( task ){
            this.tasks.push( task)
        }
    }
})

