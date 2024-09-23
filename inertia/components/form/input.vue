<template>
  <input :id="name" v-model="model" :type="type" :placeholder="placeholder" />
</template>

<script setup lang="ts">
  interface InputProps {
    type: string
    name: string
    placeholder?: string
  }

  defineProps<InputProps>()
  const model = defineModel<string | number>()
</script>

<style scoped>
  input {
    padding: 1em;
    border: 1px solid #ced4da;
    border-radius: 4px;
  }
</style>
