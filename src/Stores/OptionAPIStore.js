import { defineStore } from "pinia";

export const useOptionAPIStore = defineStore('user', {
    state: () => ({
        first_name: "",
        last_name: "",
        avatar_url: "",
    }),

    getters: {
        full_name: (state) => state.first_name + " " + state.last_name,
    },

    actions: {
        fetchUser() {
            this.first_name = "Chhun";
            this.last_name = "Mengheang";
        },
    }
})