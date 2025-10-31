<template>
  <div class="h-4 text-xs mb-5 text-red-600 dark:text-red-500">
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
