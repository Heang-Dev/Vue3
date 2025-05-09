<script setup>

import {ref} from "vue";

const text = ref('');
const selected = ref('');

const username = ref('');
const password = ref('');

const handleSubmit = () => {
	const payload = {
		username: username.value,
		password: password.value,
	}

	console.log(payload);
}

const handleInput = (e) => {
	text.value = e.target.value;
}
</script>

<template>
	<h1 class="title">
		Form Input V-Model
	</h1>
	<div>
		<p>
			Selected : <span>{{ text }}</span>
		</p>
		<!--		<input :value="text" @input="handleInput" />-->
		<input v-model="text" placeholder="default" />
		<br />
		<input v-model.lazy="text" placeholder="With .lazy update text when lost focus" />
		<br />
		<input v-model.number="text" placeholder="With .number convert this to number" />
		<br />
		<input v-model.trim="text" placeholder="With .trim remove whitespace" />
	</div>
	<div>
		<p>
			Selected : <span>{{ selected }}</span>
		</p>
		<select v-model="selected">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
		</select>
	</div>
	<form @submit.prevent="handleSubmit">
		<h1>
			Login Form
		</h1>
		<p>
			Username : <span>{{ username }}</span>
		</p>
		<p>
			Password : <span>{{ password }}</span>
		</p>
		<label for="username">
			User name
		</label>
		<input
				type="text"
				v-model.trim.lazy="username"
				id="username"
		/>
		<label for="password">
			Password
		</label>
		<input
				type="password"
				v-model.trim.lazy="password"
				id="password"
		/>
		<button type="submit">Login</button>
	</form>
</template>

<style scoped>
form {
	display: flex;
	flex-direction: column;
	max-width: 300px;
}

input {
	margin: 5px 0;
	width: 300px;
}
</style>