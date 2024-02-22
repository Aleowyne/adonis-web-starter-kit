<template>
  <input :type="type" :id="name" v-model="model" :placeholder="placeholder" />
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
  padding: 10px;
  border: none;
  border-radius: 4px;
  background: #ebebeb;
}
</style>
