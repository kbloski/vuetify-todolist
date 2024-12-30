import { defineStore } from "pinia";

interface LayoutStore {
  visibleSidebar: boolean;
}

export const useLayoutStore = defineStore('layout', {
    state: () : LayoutStore => ({
        visibleSidebar: false
    }),
    actions: {
        toggleVisibleSidebar() : void {
            this.visibleSidebar = !this.visibleSidebar;
        }
    },
    getters: {
        isSidebarVisible: (state) : boolean => state.visibleSidebar
    }
})