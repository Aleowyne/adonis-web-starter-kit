<template>
  <div class="form-group">
    <Label :name="name" :label="label" />
    <Input :type="type" :name="name" v-model="model" :placeholder="placeholder" />
    <Error :errors="errors" />
  </div>
</template>

<script setup lang="ts">
import Label from '@/components/form/label.vue'
import Input from '@/components/form/input.vue'
import Error from '@/components/form/error.vue'

interface InputGroupProps {
  type: string
  name: string
  label: string
  placeholder?: string
  errors?: any
}

defineProps<InputGroupProps>()
const model = defineModel<string | number>()
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
}
</style>
