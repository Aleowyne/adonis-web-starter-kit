<template>
  <div class="grid w-full items-center gap-1.5">
    <Label :for="props.name">{{ props.label }}</Label>
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
    <Error class="mt-1" :error="props.error" />
  </div>
</template>

<script setup lang="ts">
  import { OptionForm } from '@/types'
  import Error from '@/components/form/Error.vue'
  import { Label } from '@/components/ui/label'
  import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select'

  const props = defineProps<{
    name: string
    label: string
    options: OptionForm[]
    error?: string
  }>()

  const model = defineModel<string>()
</script>
