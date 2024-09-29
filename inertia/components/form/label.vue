<template>
  <label class="label" :for="props.name">
    {{ props.label }}
  </label>
</template>

<script setup lang="ts">
  const props = defineProps<{
    name: string
    label: string
  }>()
</script>

<style scoped>
  .label {
    margin-bottom: 0.5em;
  }
</style>
