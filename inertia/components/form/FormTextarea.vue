<template>
  <Field :data-invalid="!!props.error">
    <FieldLabel :htmlFor="props.name">{{ props.label }}</FieldLabel>
    <Textarea
      :id="props.name"
      v-model="model"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :rows="props.rows"
      class="bg-background"
    />
    <FieldError :errors="[{ message: props.error }]" class="text-xs" />
  </Field>
</template>

<script setup lang="ts">
  import { Textarea } from '@/components/ui/textarea'
  import { Field, FieldLabel, FieldError } from '@/components/ui/field'

  const props = defineProps<{
    name: string
    label: string
    rows?: number
    placeholder?: string
    disabled?: boolean
    error?: string
  }>()

  const model = defineModel<string>()
</script>
