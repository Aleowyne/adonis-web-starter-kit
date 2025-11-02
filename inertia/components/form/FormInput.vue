<template>
  <Field :data-invalid="!!props.error">
    <FieldLabel :for="props.name">{{ props.label }}</FieldLabel>
    <Input
      :id="props.name"
      v-model="model"
      :type="props.type"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :min="props.type === 'number' && props.min"
      :max="props.type === 'number' && props.max"
      :aria-invalid="!!props.error"
      class="bg-background"
    />
    <FieldError :errors="[{ message: props.error }]" class="text-xs" />
  </Field>
</template>

<script setup lang="ts">
  import { Input } from '@/components/ui/input'
  import { Field, FieldLabel, FieldError } from '@/components/ui/field'

  const props = defineProps<{
    type: string
    name: string
    label: string
    placeholder?: string
    disabled?: boolean
    min?: number
    max?: number
    error?: string
  }>()

  const model = defineModel<string | number>()
</script>
