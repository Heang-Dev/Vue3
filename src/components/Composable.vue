<script setup>

	import { useMouseTracker} from "@/Composable/useMouseTracker.js";

	const { x, y } = useMouseTracker();
</script>

<template>
	<h1 class="title">
		Composable
	</h1>
	<div>
		<p>
			Mouse Position : x = <span>{{ x }}</span> , y = <span>{{ y }}</span>
		</p>
	</div>
</template>

<style scoped>

</style>