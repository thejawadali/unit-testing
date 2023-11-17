<template>
  <div>
    <button @click="fetchPosts">Get Posts</button>
    <p v-if="loading">loading...</p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios";

const posts = ref( [] )
const loading = ref( false )
async function fetchPosts () {
  console.log('fetching');
  loading.value = true
  const { data } = await axios.get( 'https://jsonplaceholder.typicode.com/posts?_limit=5' )
  loading.value = false
  posts.value = data
}
</script>

