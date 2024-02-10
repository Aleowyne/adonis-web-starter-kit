<template>
  <div class="alert" :class="classTypeAlert" v-if="isVisibleMsg">
    {{ props.message.content }}
  </div>
</template>

<script setup lang="ts">
import type { Message } from '@/types'
import { ref, watch } from 'vue'

const props = defineProps<Message>()
const isVisibleMsg = ref(false)
const classTypeAlert = ref('')

watch(
  () => props.message,
  (newValue) => {
    if (newValue) {
      classTypeAlert.value = `alert-${newValue.type}`
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
