<script setup>

import CustomizeComponent from "@/components/CustomizeComponent.vue";
import {ref} from "vue";

const username = ref("");
const password = ref("");
const gender = ref("");
</script>

<template>
	<h1 class="title">
		Component V_Model
	</h1>
	<div>
		<p>
			Username : <span>{{ username }}</span>
		</p>
		<p>
			Username : <span>{{ password }}</span>
		</p>
		<p>
			Gender : <span>{{ gender }}</span>
		</p>
		<CustomizeComponent
				v-model:username="username"
				v-model:password="password"
				v-model:gender="gender"
		/>
	</div>
</template>

<style scoped>

</style>