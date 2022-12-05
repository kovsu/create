<script setup lang='ts'>
import { useRouter } from "vue-router";
const router = useRouter();

function to() {
  router.push("/2");
}
</script>

<template>
  <h1>hello!</h1>
  <button @click="to">
    To Page2
  </button>
</template>

<style scoped></style>
