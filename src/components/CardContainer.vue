<script setup>

import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";

const users = [
	{
		id: 1,
		name: "Luffy",
		address: "One piece",
		status: true,
		img: "https://avatars.githubusercontent.com/u/157885974?v=4",
	},
	{
		id: 2,
		name: "Tanjiro",
		address: "Demon Slayer",
		status: false,
		img: "https://avatars.githubusercontent.com/u/157885974?v=4",
	},
	{
		id: 3,
		name: "Gojo",
		address: "Jujutsu Kaisen",
		status: true,
		img: "https://avatars.githubusercontent.com/u/157885974?v=4",
	},
]

const handleClick = () => {
	console.log(users);
}

</script>

<template>
	<h1 class="title">
		Component and Props
	</h1>
	<Card
			v-for="user in users"
			:key="user.id"
			:address="user.address"
			:img="user.img"
			:name="user.name"
			:status="user.status" />
	<Button title="Log User Info" :event="handleClick"/>
</template>

<style scoped>

</style>