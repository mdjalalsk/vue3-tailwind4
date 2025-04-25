<script setup>
import { RouterView } from 'vue-router';
import CheckboxComponent from './components/CheckboxComponent.vue';
import MultipleSingleEmit from './components/MultipleSingleEmit.vue';
import PersonComponent from './components/PersonComponent.vue';
import ProvideInjectA from './components/ProvideInjectA.vue';
import RadioComponent from './components/RadioComponent.vue';
import SoltButton from './components/SoltButton.vue';
import TextComponent from './components/TextComponent.vue';
import { reactive, ref,provide } from 'vue';
const text = ref('Hello World');
const fname = ref('jalal');
const lname = ref('Sk');
const person=reactive({
   name:'jalal',
   email:"jalal@gmail.com"
})
const fruit = ref('apple');
const  tasksDone = ref(false);
const course = reactive({
   name:'Vue Js',
   duration: 30,
   instructor: 'jalal'
})
provide('trining', course);
</script>

<template>
  <div class="container mx-auto px-4">
    <header class="py-4 w-[600px] mx-auto ">
      <h1 class="text-2xl font-bold">Vue 3 Composition API</h1>
      <nav class="mt-4 flex justity-center">
        <router-link to="/" class="mx-2 text-blue-500 hover:underline">Home</router-link>
        <router-link to="/about" class="mx-2 text-blue-500 hover:underline">About</router-link>
        <router-link to="/blog" class="mx-2 text-blue-500 hover:underline">Blog</router-link>
      </nav>
    </header>
    <main>
      <RouterView ></RouterView>
    </main>

    <h1 class="text-red-500 text-center mt-4">Hello, how are you?</h1>
    <div class="flex flex-col items-center justify-center mt-8">
      <p class="mb-16 text-lg">Hello Test</p>

      <SoltButton>
        <template v-slot:licon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
          </svg>
        </template>
        hello click me
        <template #ricon>
          righticon
        </template>
      </SoltButton>

      <input type="text" v-model="text" class="border-2 border-gray-300 p-2 rounded-md block mt-4" placeholder="Enter text here" />
      <p class="text-gray-700 font-bold mb-2 block">{{ text }}</p>

      <!-- single reactive component -->
      <TextComponent label="Enter your Name" v-model="text" />

      <!-- multiple single value emits -->
      <p class="mt-4">First Name: {{ fname }} | Last Name: {{ lname }}</p>
      <MultipleSingleEmit v-model:fname="fname" v-model:lname="lname" />

      <!-- object value reactive component -->
      <p class="mt-4">Name: {{ person.name }} | Email: {{ person.email }}</p>
      <PersonComponent :person="person" />

      <!-- single value emit -->
      <p class="mt-10">Task Done: {{ tasksDone }}</p>
      <CheckboxComponent v-model="tasksDone" label="Task Done" />

      <!-- multiple value emit -->
      <p class="mt-10">Favorite fruit from Component: {{ fruit }}</p>
      <RadioComponent v-model="fruit" label="Apple" value="apple" />
      <RadioComponent v-model="fruit" label="Orange" value="orange" />
      <RadioComponent v-model="fruit" label="Banana" value="banana" />
    </div>

    <h1 class="text-xl font-bold mt-10">Provide and Inject Components</h1>
    <ProvideInjectA />

    <p class="mt-4 text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nostrum accusantium error. Ut provident veritatis neque corporis cumque maxime exercitationem quaerat culpa officiis accusantium magnam, expedita quae iure sapiente? Iusto.
    </p>
  </div>
</template>

<style scoped>

</style>
