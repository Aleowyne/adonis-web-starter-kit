<template>
  <div class="form-group">
    <Label :name="props.name" :label="props.label" />
    <Input v-model="model" :type="props.type" :name="props.name" :placeholder="props.placeholder" />
    <Error :error="props.error" />
  </div>
</template>

<script setup lang="ts">
  import Label from '@/components/form/label.vue'
  import Input from '@/components/form/input.vue'
  import Error from '@/components/form/error.vue'

  const props = defineProps<{
    type: string
    name: string
    label: string
    placeholder?: string
    error?: string
  }>()

  const model = defineModel<string | number>()
</script>

<style scoped>
  .form-group {
    display: flex;
    flex-direction: column;
  }
</style>
