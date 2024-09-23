<script setup lang="ts">
  interface ErrorProps {
    error: { message: string }
  }

  defineProps<ErrorProps>()
</script>

<template>
  <div>
    <div>Server Error</div>

    <span>{{ error.message }}</span>
  </div>
</template>
