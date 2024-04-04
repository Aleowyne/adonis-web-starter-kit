<template>
  <button type="submit">{{ label }}</button>
</template>

<script setup lang="ts">
interface LabelProps {
  label: string
}

defineProps<LabelProps>()
</script>

<style scoped>
button {
  height: 54px;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: #000000;
  background-color: #fb771a;
  border-color: #fb771a;
  border-style: none;
  border-radius: 4px;
}

button:not(:disabled) {
  cursor: pointer;
}
</style>
