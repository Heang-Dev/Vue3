<script setup>
	import { computed } from 'vue';

	const props = defineProps(["username", "password", "gender"]);
	const emit = defineEmits([
		"update:username",
		"update:password",
		"update:gender"
	]);

	const usernameValue = computed({
		get: () => props.username,
		set: (newValue) => emit("update:username", newValue),
	})
	const passwordValue = computed({
		get()  { return props.password },
		set(newValue) { emit("update:password", newValue); },
	})
	const genderValue = computed({
		get()  { return props.gender },
		set(newValue) { emit("update:gender", newValue); },
	})
</script>

<template>
	<div class="card">
		<label>User Name</label>
		<input
				type="text"
				v-model.lazy="usernameValue"
		/>
		<label>Password</label>
		<input
				type="password"
				v-model.lazy="passwordValue"
		/>
		<label>Gender</label>
		<select v-model="genderValue">
			<option value="Female">Female</option>
			<option value="Male">Male</option>
		</select>
	</div>
</template>

<style scoped>
 .card {
	 display: flex;
	 flex-direction: column;
	 max-width: 300px;
 }
</style>