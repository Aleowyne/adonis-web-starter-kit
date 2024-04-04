<template>
  <label :for="name">{{ label }}</label>
</template>

<script setup lang="ts">
interface LabelProps {
  name: string
  label: string
}

defineProps<LabelProps>()
</script>

<style scoped>
label {
  margin-bottom: 5px;
}
</style>
