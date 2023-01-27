<template>
  <h1>
    {{ store.state.count }}
  </h1>
  <button @click="click">Increment</button>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const click = () => {
  // commit the mutation
  store.commit('increment', 10);
}

console.log(store);
</script>

<style scoped>
</style>