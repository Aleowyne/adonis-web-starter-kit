<template>
  <div class="form-error">
    <p v-if="error">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
  interface ErrorProps {
    error?: string
  }

  defineProps<ErrorProps>()
</script>

<style scoped>
  .form-error {
    height: 2em;
    margin-top: 0.5em;
    font-size: 0.8em;
    color: #ff0000;
  }
</style>
