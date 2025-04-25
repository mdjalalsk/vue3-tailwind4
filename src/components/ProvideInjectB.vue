<script setup>
import { inject } from 'vue';
const trining = inject('trining');
</script>
<template>
    <h3>This is Provide Inject compoent B: {{ trining.instructor }}</h3>
</template>
<style scoped lang="css">
</style>