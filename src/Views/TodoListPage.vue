<script setup>
	import { ref } from "vue";
	import { useTodoStore } from "@/Stores/Todos.js";
	import TodoItem from "@/components/TodoItem.vue";
	import TodoTracker from "@/components/TodoTracker.vue";

	const todoStore = useTodoStore();

	const inputTodo = ref("");

	const handleAddTodo = () => {
		todoStore.addTodo(inputTodo.value);
		inputTodo.value = "";
	}
</script>

<template>
	<h1 class="title">
		Todo List App
	</h1>
	<div class="container">
		<TodoTracker />
		<div>
			<input
				v-model="inputTodo"
				@keyup.enter = "handleAddTodo"
				style="width: 100%"
			/>
		</div>
		<br />
		<div v-for="todo in todoStore.filteredTodos">
			<TodoItem
					:id="todo.id"
					:text="todo.text"
					v-model:isFinished="todo.isFinished" />
		</div>
	</div>
</template>

<style scoped>
	.container {
		max-width: 1024px;
		display: flex;
		flex-direction: column;
		margin: 20px auto;
	}

	input {
		width: 100%;
		height: 32px;
		font-size: 14px;
		padding: 5px 10px;
	}
</style>