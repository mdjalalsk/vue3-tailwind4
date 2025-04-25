<script setup>

import { inject } from 'vue';
import ProvideInjectB from './ProvideInjectB.vue';
const course = inject('trining');
</script>
<template>
    <h3>This is Provide Inject compoent A:  {{ course.name }}</h3>
    <P>Duration: {{ course.duration }}</P>
    <ProvideInjectB />

</template>
<style scoped lang="css">
</style>