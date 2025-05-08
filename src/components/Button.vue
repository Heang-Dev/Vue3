<script setup>
	const handleClick = () => {
		console.log('Clicked');
	}
</script>

<template>
	<button @click="handleClick">
		Click me
	</button>
</template>

<style scoped>
	button {
		cursor: pointer;
		margin: 10px;
		padding: 10px 20px;
		border: 1px solid red;
		border-radius: 20px;
		background-color: transparent;
		font-weight: bold;
		color:  red;
	}

	button:hover {
		border: 1px  solid white;
		color:  white;
		transition: all .2s;
	}
</style>