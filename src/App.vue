<template>
  <button @click="click(post)" v-for="post in posts" :key="post.id">
    {{ post.title }}
  </button>
  {{ store.state.postId }}
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

onMounted(() => {
  fetchData();
})

/* if we prefer the setup function instead of script setup
return {
  click,
  postId: computed(() => store.state.postId)
  store,
}
*/

</script>

<style scoped>
</style>