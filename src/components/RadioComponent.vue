<script setup>
import { computed } from 'vue';

const props=defineProps([
    'label',
    'modelValue',
    'value'
])
const emit=defineEmits([
    'update:modelValue'
])
const radioVlue=computed({
    get: ()=>props.modelValue,
    set: (value)=>emit('update:modelValue', value)
    
    
});
</script>
<template>
    <div>
        <label class="mr-5">{{ label }}</label>

        <input type="radio" :value="value" v-model="radioVlue" /> 
    </div>

</template>
<style scoped lang="css">
</style>