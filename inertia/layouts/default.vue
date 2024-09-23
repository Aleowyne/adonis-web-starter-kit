<template>
  <Error />
  <Header />
  <div class="content">
    <slot />
  </div>
  <Footer />
</template>

<script setup lang="ts">
  import Header from '@/components/header.vue'
  import Footer from '@/components/footer.vue'
  import Error from '@/components/message.vue'
</script>

<style scoped>
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
