<template>
  <div>
    <div>Server Error</div>

    <span>{{ props.error.message }}</span>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    error: { message: string }
  }>()
</script>
