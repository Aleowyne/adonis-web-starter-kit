<template>
  <div v-if="isVisibleMsg" class="alert" :class="classTypeAlert">
    {{ page.props.message.content }}
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { usePage } from '@inertiajs/vue3'
  import type { InertiaProps } from '@/types'

  const page = usePage<InertiaProps>()
  const isVisibleMsg = ref(false)
  const classTypeAlert = ref('')

  watch(
    () => page.props,
    (newValue) => {
      if (newValue.message) {
        classTypeAlert.value = `alert-${newValue.message.type}`
        isVisibleMsg.value = true

        setTimeout(() => {
          isVisibleMsg.value = false
        }, 3000)
      } else {
        isVisibleMsg.value = false
      }
    }
  )
</script>

<style scoped>
  .alert {
    position: fixed;
    z-index: 1;
    width: 100%;
    padding: 15px 0px;
    text-align: center;
    opacity: 0.85;
    color: #ffffff;
  }

  .alert-error {
    background-color: #842029;
  }

  .alert-warning {
    background-color: #997404;
  }

  .alert-success {
    background-color: #0f5132;
  }

  .alert-info {
    background-color: #084390;
  }
</style>
