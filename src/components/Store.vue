<script setup>
	import { onMounted } from "vue";
	import { useOptionAPIStore } from "../Stores/OptionAPIStore.js";
	import { useCompositionAPIStore } from "../Stores/CompositionAPIStore.js";

	const userStore = useOptionAPIStore();
	const userStore2 = useCompositionAPIStore();

	onMounted(() => userStore.fetchUser());
	onMounted(() => userStore2.fetchUser2());
</script>

<template>
	<h1 class="title">State Management With Pinia</h1>
	<h2>Store with Option API syntax</h2>
	<p>
		<span>{{ userStore.full_name }}</span>
	</p>
	<h2>Store with Option Composition syntax</h2>
	<p>
		<span>{{ userStore2.full_name }}</span>
	</p>
</template>

<style scoped>

</style>