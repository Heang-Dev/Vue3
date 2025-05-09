<script setup>

import RefAndReactive from "@/components/RefAndReactive.vue";
import Computed from "@/components/Computed.vue";
import Watch from "@/components/Watch.vue";
import CardContainer from "@/components/CardContainer.vue";
import EventsHandler from "@/components/EventsHandler.vue";
import FormInputVModel from "@/components/FormInputVModel.vue";
import ComponentVModel from "@/components/ComponentVModel.vue";
import Composable from "@/components/Composable.vue";
// import CombineComposable from "@/components/CombineComposable.vue";
</script>

<template>
<!--	<RefAndReactive />-->
<!--	<Computed />-->
<!--	<Watch />-->
<!--	<CardContainer />-->
<!--	<EventsHandler />-->
<!--	<FormInputVModel />-->
<!--<ComponentVModel />-->
<!--<Composable />-->
<!--	<CombineComposable />-->
	<h1>
		Hello
	</h1>
	<div>
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
		<router-link to="/contact">Contact</router-link>
	</div>
	<div>
		<router-view></router-view>
	</div>
</template>

<style scoped>

</style>