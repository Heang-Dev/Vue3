<script setup>
	import { useTodoStore} from "@/Stores/Todos.js";

	const todoStore = useTodoStore();
	const onSelectAll = () => (todoStore.filter = "all");
	const onSelectFinished = () => (todoStore.filter = "finished");
	const onSelectUnfinished= () => (todoStore.filter = "unfinished");
</script>

<template>
	<div class="card-wrapper">
		<div class="card" @click="onSelectAll">
			All Todos : <span>{{ todoStore.todos.length }}</span>
		</div>
		<div class="card" @click="onSelectFinished">
			Finished Todos : <span>{{ todoStore.finishedTodos.length }}</span>
		</div>
		<div class="card" @click="onSelectUnfinished">
			Unfinished Todos : <span>{{ todoStore.unFinishedTodos.length }}</span>
		</div>
	</div>
</template>

<style scoped>
	.card-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 20px auto;
		gap: 10px;
	}

	.card {
		border:  1px solid #ccc;
		flex: 1;
		max-width: 500px;
		min-width: 150px;
		padding: 20px 0;
		cursor: pointer;
	}
</style>