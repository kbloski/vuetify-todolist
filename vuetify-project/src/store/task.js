import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task',
    {
    state: () => {
        return {
            indexTaskSelected: 0,
            tasks: []
        }
    },
    actions: {
        deleteTask(){
            if (this.indexTaskSelected != null)
                this.tasks.splice( this.indexTaskSelected, 1)
            this.saveLocalData()
        },
        addTask( task ){
            this.tasks.push( task)
            this.saveLocalData()
        },
        saveLocalData(){
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        getLocalData(){
            const items = localStorage.getItem('tasks');
            if (!items) return this.tasks = [];

            this.tasks = JSON.parse( items )
        }
    },
})

