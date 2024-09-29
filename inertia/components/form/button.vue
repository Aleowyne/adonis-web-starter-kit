<template>
  <button class="btn" type="submit">
    {{ props.label }}
  </button>
</template>

<script setup lang="ts">
  const props = defineProps<{
    label: string
  }>()
</script>

<style scoped>
  .btn {
    height: 3em;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #000000;
    background-color: #fb771a;
    border-color: #fb771a;
    border-style: none;
    border-radius: 4px;
  }

  .btn:not(:disabled) {
    cursor: pointer;
  }
</style>
