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
