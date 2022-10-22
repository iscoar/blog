<script setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { usePostStore } from '../stores/post'

  const { posts, loading, error } = storeToRefs(usePostStore())
  const { fetchPosts } = usePostStore()

  fetchPosts()
</script>


<template>
  <main class="mt-12">
    <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="posts" v-for="post in posts" :key="post.id" class="my-5">
      <router-link :to="`/post/${post.id}`" class="font-bold uppercase">{{ post.title }}</router-link>
      <p>{{ post.body }}</p>
    </p>
    <hr>
  </main>
</template>