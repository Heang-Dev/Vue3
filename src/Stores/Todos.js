import { defineStore } from "pinia";

export const useTodoStore = defineStore("todos", {
    state: () => ({
        todos: [],
        filter: "all",
        nextTodoId: 0,
    }),

    getters: {
        finishedTodos(state) {
            return state.todos.filter((todo) => todo.isFinished)
        },
        unFinishedTodos(state) {
            return state.todos.filter((todo) => !todo.isFinished)
        },
        filteredTodos(state) {
            if (this.filter === 'finished'){
                return state.finishedTodos
            } else if (state.filter === 'unfinished'){
                return state.unFinishedTodos
            } else {
                return state.todos;
            }
        }
    },

    actions: {
        addTodo(text) {
            this.todos.push({ text, id: this.nextTodoId++,  isFinished: false });
        }
    }
});