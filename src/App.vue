<script setup>
import MultipleSingleEmit from './components/MultipleSingleEmit.vue';
import PersonComponent from './components/PersonComponent.vue';
import TextComponent from './components/TextComponent.vue';
import { reactive, ref } from 'vue';
const text = ref('Hello World');
const fname = ref('jalal');
const lname = ref('Sk');
const person=reactive({
   name:'jalal',
   email:"jalal@gmail.com"
})
</script>

<template>

   <h1 class="text-red-500">hello how are you?</h1>
   <div class="flex flex-col items-center justify-center">
   
    <p> Hello Test</p>
    <input type="text" v-model="text" class="border-2 border-gray-300 p-2 rounded-md block" placeholder="Enter text here" />
      <p class="text-gray-700 font-bold mb-2 block">{{ text }}</p>

    <!-- single reactive componet  -->
   <TextComponent label="Enter your Name" v-model="text" />
   <!-- multiple  single value emits  -->
   <p>First Name:{{ fname }} | Last Name:{{ lname }}</p>

    <MultipleSingleEmit v-model:fname="fname" v-model:lname="lname" />

   <!-- boject value reactive compoent  -->
    <p>Name:{{ person.name }} | Email:{{person.email }}</p>
    <PersonComponent :person="person" />

   </div>
</template>

<style scoped>

</style>
