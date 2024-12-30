import { defineStore } from "pinia";

interface LayoutStore {
  visibleSidebar: boolean;
  appBarOrder: number;
}

export const useLayoutStore = defineStore('layout', {
    state: () : LayoutStore => ({
        visibleSidebar: false,
        appBarOrder: 0
    }),
    actions: {
        toggleVisibleSidebar() : void {
            this.visibleSidebar = !this.visibleSidebar;
        },
    },
    getters: {
        isSidebarVisible: (state) : boolean => state.visibleSidebar
    }
})