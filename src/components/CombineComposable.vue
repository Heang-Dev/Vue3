<script setup>

import ScreenOne from "@/components/ScreenOne.vue";
import ScreenTwo from "@/components/ScreenTwo.vue";
</script>

<template>
	<h1 class="title">
		Combine Composable
	</h1>
	<div class="container">
		<ScreenOne class="screen" />
		<ScreenTwo class="screen" />
	</div>
</template>

<style>
	.container {
		display: flex;
		padding: 20px;
		justify-content: center;
	}

	.screen {
		border: 1px solid #ccc;
		height: 200px;
	}

	.card {
		padding: 40px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items:  center;
		min-width:  300px;
	}

</style>