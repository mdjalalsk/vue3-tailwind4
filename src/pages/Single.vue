<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import data from '../assets/data.json';

const route = useRoute();

// Set up a reactive ref to hold the current post ID
const postId = ref(route.params.id);

watch(
  () => route.params.id,
  (newId) => {
    postId.value = newId;
  }
);

// Computed property to get the post from data.json
const blogPost = computed(() => {
  return data.find((item) => item.id == postId.value);
});
</script>

<template>
  <div class="Single blog">
    <h1 class="text-2xl font-bold mb-4">Blog Details</h1>

    <div v-if="blogPost">
      <h2 class="text-xl font-semibold">Post {{ blogPost.id }}</h2>
      <h2 class="text-xl font-semibold">{{ blogPost.title }}</h2>
      <p class="text-gray-700 font-bold">{{ blogPost.description }}</p>
    </div>

    <div v-else>
      <p class="text-red-600">Blog post not found.</p>
    </div>
  </div>
</template>

<style scoped>
</style>
