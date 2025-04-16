<script setup>
 const pops=defineProps([
    'label',
    'modelValue',
 ])
 const emits=defineEmits([
    'update:modelValue'
 ])
</script>
<template lang="">
    <div>
        <label class="text-gray-700 font-bold mb-2 block">{{ label }}</label>
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="border-2 border-gray-300 p-2 rounded-md" placeholder="Enter text here" />
    </div>
</template>
<style lang="">
    
</style>