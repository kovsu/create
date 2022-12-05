<script setup lang='ts'>
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
.container {
  margin-top: 3.2rem;
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  align-items: center;
}

button {
  border: none;
  border-radius: 0.3rem;
  color: #fff;
  background-color: #42b883;
  cursor: pointer;
  padding: 0.8rem 1rem;
}
</style>
