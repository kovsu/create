<script setup lang='ts'>
import { useToggle } from "@vueuse/core";
import { isDark } from "../composable/dark";

const toggleDark = useToggle(isDark);
</script>

<template>
  <header>
    <div class="switch" @click="toggleDark()">
      <Icon v-if="isDark" icon="ri:sun-fill" />
      <Icon v-else icon="ri:moon-fill" />
    </div>
    <a href="https://github.com/kovsu" target="_blank">
      <Icon icon="mdi:github" />
    </a>
  </header>
</template>

<style scoped>
header {
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.2rem;
}

.switch {
  cursor: pointer;
}
</style>
