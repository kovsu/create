<script setup lang='ts'>
import { useRouter } from "vue-router";
const router = useRouter();

function back() {
  router.push("/");
}
</script>

<template>
  <h1>Here is Page2</h1>
  <button @click="back">
    Back
  </button>
</template>

<style scoped></style>
