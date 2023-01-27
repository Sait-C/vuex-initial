<template>
  <button @click="click(post)" v-for="post in posts" :key="post.id">
    {{ post.title }}
  </button>
  {{ store.state.postId }}

  <div v-if="currentPost">
    <h2>{{ currentPost.title }}</h2>
    <h4>{{ currentPost.content }}</h4>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const click = (post) => {
  store.commit('setPostId', post.id);
}
const fetchData = () => {
  store.dispatch('fetchPosts');
}
const posts = computed(() => store.state.posts);
const currentPost = computed(() => store.getters.currentPost); 

onMounted(() => {
  fetchData();
})

</script>

<style scoped>
</style>