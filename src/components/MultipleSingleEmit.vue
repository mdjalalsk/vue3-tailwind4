<script setup>
 const pops=defineProps([
    'fname',
    'lname',
 ])
 const emits=defineEmits([
    'update:fname',
    'update:lname'
 ])
</script>
<template lang="">
    <div>
        <label class="text-gray-700 font-bold mb-2 block">First Name</label>
        <input type="text" :value="fname" @input="$emit('update:fname', $event.target.value)" class="border-2 border-gray-300 p-2 rounded-md" placeholder="Enter text here" />

        <label class="text-gray-700 font-bold mb-2 block">Last Name</label>
        <input type="text" :value="lname" @input="$emit('update:lname', $event.target.value)" class="border-2 border-gray-300 p-2 rounded-md" placeholder="Enter text here" />
    </div>
</template>
<style lang="">
    
</style>