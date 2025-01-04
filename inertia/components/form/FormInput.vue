<template>
  <div class="grid w-full items-center gap-1.5">
    <Label :for="props.name">{{ props.label }}</Label>
    <Input
      :id="props.name"
      v-model="model"
      :type="props.type"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :min="props.type === 'number' && props.min"
      :max="props.type === 'number' && props.max"
    />
    <Error :error="props.error" />
  </div>
</template>

<script setup lang="ts">
  import Error from '@/components/form/Error.vue'
  import { Label } from '@/components/ui/label'
  import { Input } from '@/components/ui/input'

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
