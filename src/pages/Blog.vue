<script setup>
import { RouterLink } from 'vue-router';
import data from '../assets/data.json'

</script>

<template>
    <div class="Blog">
        <h1 class="text-2xl font-bold">Blog</h1>
        <p class="text-gray-700 font-bold mb-2 block">This is the blog page.</p>
        
        <div v-if="data.length > 0">
            <div v-for="(item, index) in data" :key="index" class="mb-4 p-4 border rounded-md shadow-md">
                <RouterLink :to="{ name: 'single', params: { id: item.id } }">
                    <h2 class="text-xl font-semibold">{{ item.id }}</h2>
                    <h2 class="text-xl font-semibold">{{ item.title }}</h2>
                    <p class="text-gray-600">{{ item.description }}</p>
                </RouterLink>
            </div>
        </div>
       
       
    </div>
</template>
<style scoped>
</style>