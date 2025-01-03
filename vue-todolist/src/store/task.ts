// Utilities
import { EnumTaskPriority } from '@/enum/EnumTaskPriority'
import type { TypeTask } from '@/types/TypeTask'
import { defineStore } from 'pinia'

interface TaskStore {
  tasks: TypeTask[],
  selectedTasks: TypeTask['id'][],

  indexSelectedTask: number,
  isVisibleDialogUpdate: boolean
}

export const useTaskStore = defineStore("taskStore", {
  state: (): TaskStore => ({
    tasks: [],
    indexSelectedTask: 0,
    selectedTasks: [],
    isVisibleDialogUpdate: false,
  }),
  actions: {
    toggleDialogUpdate() {
      this.isVisibleDialogUpdate = !this.isVisibleDialogUpdate;
    },
    getLocalData() {
      const itemsTasks = localStorage.getItem("tasks");
      this.tasks = !itemsTasks ? [] : JSON.parse(itemsTasks);

      const itemsSelectedTasks = localStorage.getItem("selected-tasks");
      this.selectedTasks = !itemsSelectedTasks
        ? []
        : JSON.parse(itemsSelectedTasks);
    },
    saveLocalData() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      localStorage.setItem(
        "selected-tasks",
        JSON.stringify(this.selectedTasks)
      );
    },
    setIndexSelectedTaskById( taskId: TypeTask["id"]) {
      return this.indexSelectedTask = this.tasks.findIndex( task => task.id === taskId)
    },
    addTask(task: Omit<TypeTask, "id">) {
      const id: TypeTask["id"] = Math.ceil(Math.random() * 10000);
      this.tasks.unshift({
        id,
        ...task,
      });

      this.saveLocalData();
    },
    updateTask(id: TypeTask["id"], task: Partial<Omit<TypeTask, "id">>) {
      try {
        this.tasks[this.indexSelectedTask] = {
          ...this.tasks[this.indexSelectedTask],
          ...task,
        };
        this.saveLocalData();
      } catch (err) {
        console.error(err);
      }
    },
    deleteTask(taskId: TypeTask["id"]) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.selectedTasks = this.selectedTasks.filter((id) => id != taskId);

      this.saveLocalData();
      this.getLocalData();
    },
  },
  getters: {
    getSelectedTask(): TypeTask | undefined {
      return this.tasks.find((task) => task.id === this.indexSelectedTask);
    },
  },
});
