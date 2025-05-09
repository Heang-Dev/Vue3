<script setup>

import { ref } from 'vue';
import Button from "@/components/Button.vue";

const count = ref(0);

const handleIncrement = (msg) => {
	count.value++;
	console.log(msg + count.value);
}

const handleSubmit = () => {
	console.log("Submitted")
}

const stringInput = ref('');

const clearInput = () => {
	stringInput.value = '';
}

</script>

<template>
	<h1 class="title">
		Event Handler
	</h1>
	<div>
		<h1>
			Count : <span>{{ count }}</span>
		</h1>
		<Button title="Increment" :event="() => handleIncrement('Count +1 : ')" />
	</div>
	<div class="container">
		<form @submit.prevent="handleSubmit">
			<p>
				You type : <span>{{ stringInput }}</span>
			</p>
			<input placeholder="Something..."
			       v-model="stringInput"
			       @keyup.alt.enter="clearInput"
			/>
			<button type="submit">
				Submit
			</button>
		</form>
	</div>
</template>

<style scoped>
	.container {
		width: 250px;
		padding: 20px 10px;
		margin: 20px 0;
		border: 1px solid #ccc;
		border-radius: 10px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	input {
		width: 100%;
		padding: 10px 20px;
	}

	button {
		padding: 10px 20px;
		border-radius: 10px;
		cursor: pointer;
	}
</style>