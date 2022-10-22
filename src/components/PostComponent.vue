<script setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useCommentStore } from '../stores/comment'
  import Comment from '../components/Comment.vue'

  defineProps(['post', 'author'])

  const { getPostComments } = storeToRefs(useCommentStore())
  const { fetchComments } = useCommentStore()

  fetchComments()
</script>

<template>
  <div class="mt-12">
    <div>
      <h2 class="font-bold uppercase">{{ post.title }}</h2>
      <p v-if="author">Written by: <router-link :to="`/author/${author.username}`">{{ author.name }}</router-link>
        | <span>Comments: {{ getPostComments.length }}</span>
      </p>
      <p>{{ post.body }}</p>
    </div>
    <hr>
    <h3>Comments:</h3>
    <comment :comments="getPostComments"></comment>
  </div>
</template>