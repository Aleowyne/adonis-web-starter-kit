<template>
  <div class="form-error">
    <p v-if="errors">{{ errors[0] }}</p>
  </div>
</template>

<script setup lang="ts">
interface ErrorProps {
  errors?: Array<string>
}

defineProps<ErrorProps>()
</script>

<style scoped>
.form-error {
  height: 1.5em;
  margin-bottom: 20px;
  font-size: 0.8em;
  color: #ff0000;
}
</style>
