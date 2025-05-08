<script setup>
import {computed, reactive, ref} from "vue";

	const library = reactive({
		name: "Jack",
		books: [
			"HTML",
			"CSS",
			"JavaScript",
			"Laravel",
			"Vue",
		]
	})

	const hasPublishedBook = computed(() => {
		return  library.books.length > 0 ? "YES" : "NO";
	})

	const content = ref("");

	const capitalizedContent = computed(() => {
		return content.value.toUpperCase();
	})
</script>

<template>
	<h1 class="title">
		Computed
	</h1>
	<h1>
		Has Published Books :
<!--		No Computed-->
<!--		<span>{{ library.books.length > 0 ? "YES" : "NO"}}</span>-->
<!--		With computed-->
		<span>{{ hasPublishedBook }}</span>
	</h1>
	<div>
		<input v-model="content" />
		<h3>{{ content }}</h3>
		<h3>{{ capitalizedContent }}</h3>
	</div>
</template>

<style scoped>

</style>