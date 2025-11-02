<template>
  <Field :data-invalid="!!props.error">
    <FieldLabel :for="props.name">{{ props.label }}</FieldLabel>
    <Select :id="props.name" v-model="model">
      <SelectTrigger class="w-full bg-background">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup v-for="option in props.options" :key="option.id">
          <SelectItem :value="option.value" :disabled="option.disabled">
            {{ option.label }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <FieldError :errors="[{ message: props.error }]" class="text-xs" />
  </Field>
</template>

<script setup lang="ts">
  import { OptionForm } from '@/types'
  import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select'
  import { Field, FieldLabel, FieldError } from '@/components/ui/field'

  const props = defineProps<{
    name: string
    label: string
    options: OptionForm[]
    error?: string
  }>()

  const model = defineModel<string>()
</script>
