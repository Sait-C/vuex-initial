<template>
  <h1>
    {{ store.state.count }}
  </h1>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

console.log(store);
</script>

<style scoped>
</style>