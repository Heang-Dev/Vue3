<script setup>
import {ref, watch} from "vue";

const content = ref("");

watch(content, (curr, prev) => {
	console.log({curr, prev});
})
</script>

<template>
	<h1 class="title">
		Watch
	</h1>
	<div>
		<input v-model="content" />
		<h3>{{ content }}</h3>
	</div>
</template>

<style scoped>

</style>