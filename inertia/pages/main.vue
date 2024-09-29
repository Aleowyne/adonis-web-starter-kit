<template>
  <Layout>
    <div class="home">
      <h1>Home Page - {{ props.title }}</h1>
    </div>
  </Layout>
</template>

<script setup lang="ts">
  import Layout from '@/layouts/default.vue'

  const props = defineProps<{ title: string }>()
</script>

<style scoped>
  .home {
    display: grid;
    justify-items: center;
  }
</style>
