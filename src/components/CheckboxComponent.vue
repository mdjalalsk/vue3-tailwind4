<script setup>
const props=defineProps([
    'label',
    'modelValue',
    'fruits'
])
const emit=defineEmits([
    'update:modelValue'
])
</script>
<template>
<h1 class="text-red-500 my-5">
    Hello Form  
</h1>
<form>
   <div class="flex flex-col items-center justify-center">
      <label for="task" class="text-gray-700 font-bold mb-2 block">{{ label }}</label>
      <!-- @change="$emit('update:modelValue', !modelValue)" -->
      <input
       type="checkbox"
        id="task"
         :checked="modelValue"
            @change="$emit('update:modelValue', $event.target.checked)"
       class="border-2 border-gray-300 p-2 rounded-md block" />
      <p class="text-gray-700 font-bold mb-2 block">{{ modelValue }}</p>
       
   </div>
</form>
</template>

<style lang="css" scoped>
</style>