<template>
  <Error />
  <Header />
  <main>
    <slot></slot>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Error from '@/components/message.vue'
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
}
</style>
