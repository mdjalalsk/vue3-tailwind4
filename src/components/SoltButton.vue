<script setup>
</script>
<template>
 <button class="bg-red-600 font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
     <slot name="licon"></slot>
    <slot> call me</slot>
    <slot name="ricon"></slot>
 </button>
</template>
<style scoped>
</style>