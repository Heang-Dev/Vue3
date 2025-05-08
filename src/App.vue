<script setup>
	import {ref, reactive} from "vue";

	const name = "Jack";
	const content = ref("Old");

	const refObj = ref({
		name: "ABC",
		age: 32,
		address: "New York",
	});

	const ReactiveObj = reactive({
		name: "DEF",
		age: 33,
		address: "London",
	});

	const handleUpdate = () => {
		content.value = "New";
		refObj.value.name = "ref ";
		ReactiveObj.name = "reactive";
		// Change content back after 3s
		setTimeout(() => {
			content.value = "Old";
			refObj.value.name = "ABC";
			ReactiveObj.name = "DEF";
		}, 3000);
	};
</script>

<template>
	<h1>
		Hello {{ name }}
	</h1>
	<p>ref name : <span>{{ refObj.name }}</span></p>
	<p>reactive name : <span>{{ ReactiveObj.name }}</span></p>
	<p>
		Content : <span>{{ content }}</span>
	</p>
	<button @click="handleUpdate">
		Update Content
	</button>
</template>

<style scoped>
	span{
		color: red;
	}
</style>