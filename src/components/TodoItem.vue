<script setup>
	import { computed }	from 'vue';

	const props = defineProps({
		id: Number,
		text: String,
		isFinished: Boolean,
	})

	const emit =  defineEmits(['update:isFinished'])

	const status = computed({
		get: () => props.isFinished,
		set: (value) => emit('update:isFinished', value),
	})
</script>

<template>
		<div class="todo-item">
			<div :class="isFinished ? 'finished-todo' : ''">
				{{ id + 1 }} . {{ text }}
			</div>
			<input
					type="checkbox"
					v-model="status"
					style="width: 20px; height: 20px;"
			/>
		</div>
</template>

<style scoped>
	.todo-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10px;
		border: 1px solid #ccc;
		padding: 10px 20px;
		font-size: 14px;
		border-radius: 5px;
	}

	.finished-todo {
		text-decoration: line-through;
	}
</style>