<script setup lang="ts">
defineProps<{ error: any }>()
</script>

<template>
  <div>
    <div>Server Error</div>

    <span>{{ error.message }}</span>
  </div>
</template>
