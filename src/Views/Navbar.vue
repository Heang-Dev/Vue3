<script setup>

</script>

<template>
	<nav class="container">
		<div class="logo">
			<h1>Navbar</h1>
		</div>
		<div class="menu">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/contact">Contact</router-link>
		</div>
	</nav>
</template>

<style scoped>
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		background: #222222;
		color: white;
	}

	.logo {
		padding: 0 10px;
		cursor: pointer;
	}

	.menu {
		display: flex;
		justify-content: center;
		align-items: center;
		gap:  20px;
	}
</style>