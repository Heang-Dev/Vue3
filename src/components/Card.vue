<script setup>

defineProps({
		name: String,
		address: String,
		status: Boolean,
		img: String,
})

</script>

<template>
	<div class="card">
		<div class="avatar">
			<img :src="img" alt="avatar" />
		</div>
		<div>
			<div class="parent">
				<h3>{{ name }}</h3>
				<h6 :class="status ? 'on' : 'off'">{{ status ? "Online" : "Offline" }}</h6>
			</div>
			<p>{{ address }}</p>
		</div>
	</div>
</template>

<style scoped>
	.card {
		display: flex;
		gap:  15px;
		align-items:  center;
		width:  300px;
		padding: 10px;
		border: 2px solid white;
		border-radius: 40px;
		margin: 10px 0;
	}

	.avatar {
		border-radius: 50%;
		width: 50px;
		height: 50px;
		overflow: hidden;
	}

	img {
		width: inherit;
	}

	.parent {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 190px;
	}

	h3 {
		font-weight: bold;
		color: white;
	}

	.on {
		color: green;
	}

	.off {
		color: red;
	}

</style>