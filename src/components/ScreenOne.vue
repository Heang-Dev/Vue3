<script setup>
	import { useMouseTracker } from "@/Composable/useMouseTracker.js";

	const { x, y } =  useMouseTracker();
</script>

<template>
	<div class="card">
		<h1>
			Screen <span>1</span>
		</h1>
		<p>x = <span>{{ x }}</span> , y = <span>{{ y }}</span></p>
	</div>
</template>

<style scoped>

</style>