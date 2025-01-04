<template>
  <div class="grid w-full items-center gap-1.5">
    <Label :for="props.name">{{ props.label }}</Label>
    <Textarea
      v-model="model"
      :name="props.name"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      rows="8"
    />
    <Error :error="props.error" />
  </div>
</template>

<script setup lang="ts">
  import Error from '@/components/form/Error.vue'
  import { Label } from '@/components/ui/label'
  import { Textarea } from '@/components/ui/textarea'

  const props = defineProps<{
    name: string
    label: string
    placeholder?: string
    disabled?: boolean
    error?: string
  }>()

  const model = defineModel<string>()
</script>
