<template>
  <div class="form-error">
    <p v-if="props.error">
      {{ props.error }}
    </p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    error?: string
  }>()
</script>

<style scoped>
  .form-error {
    height: 2em;
    margin-top: 0.5em;
    font-size: 0.8em;
    color: #ff0000;
  }
</style>
