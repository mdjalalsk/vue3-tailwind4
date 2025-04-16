<script setup>
 const props=defineProps([
    'person',
 ])

</script>
<template lang="">
    <div>
        <label class="text-gray-700 font-bold mb-2 block">Name</label>
        <input type="text" v-model="person.name" class="border-2 border-gray-300 p-2 rounded-md" placeholder="Enter text here" />
        <label class="text-gray-700 font-bold mb-2 block">Email</label>
        <input type="email" v-model="person.email" class="border-2 border-gray-300 p-2 rounded-md" placeholder="Enter text here" />
    </div>
</template>
<style lang="">
    
</style>